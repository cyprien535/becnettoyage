import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDocFromServer,
  serverTimestamp,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid ?? null,
      email: auth.currentUser?.email ?? null,
      emailVerified: auth.currentUser?.emailVerified ?? null,
      isAnonymous: auth.currentUser?.isAnonymous ?? null,
      tenantId: auth.currentUser?.tenantId ?? null,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

testConnection();

export interface DevisSubmissionInput {
  ville: string;
  quartier?: string;
  typeLocal: string;
  nomComplet: string;
  telephone: string;
  email?: string;
  contactPrefere: 'WhatsApp' | 'Téléphone';
  frequenceType: 'une_fois' | 'chaque_mois';
  delaiPonctuel?: string;
  datePrecise?: string;
  rythmeMensuel?: string;
  joursPreferes?: string;
  superficieTranche: string;
  details?: string;
}

function generateDevisReference(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const randomBytes = new Uint8Array(2);
  crypto.getRandomValues(randomBytes);
  const hex = Array.from(randomBytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
  return `BEC-${y}${m}${d}-${hex}`;
}

export async function saveDevisToFirestore(
  input: DevisSubmissionInput
): Promise<{ reference: string }> {
  const reference = generateDevisReference();
  const docPath = `devis_requests/${reference}`;

  const payload: Record<string, unknown> = {
    reference,
    ville: input.ville.trim().slice(0, 100),
    typeLocal: input.typeLocal.trim().slice(0, 150),
    superficieTranche: input.superficieTranche.trim().slice(0, 100),
    nomComplet: input.nomComplet.trim().slice(0, 200),
    telephone: input.telephone.trim().slice(0, 80),
    contactPrefere: input.contactPrefere === 'Téléphone' ? 'Téléphone' : 'WhatsApp',
    frequenceType: input.frequenceType === 'chaque_mois' ? 'chaque_mois' : 'une_fois',
    emailSent: false,
    statut: 'nouveau',
    createdAt: serverTimestamp(),
  };

  if (input.quartier?.trim()) {
    payload.quartier = input.quartier.trim().slice(0, 255);
  }
  if (input.email?.trim()) {
    payload.email = input.email.trim().slice(0, 200);
  }
  if (input.frequenceType === 'une_fois') {
    if (input.delaiPonctuel?.trim()) {
      payload.delaiPonctuel = input.delaiPonctuel.trim().slice(0, 150);
    }
    if (input.datePrecise?.trim()) {
      payload.datePrecise = input.datePrecise.trim().slice(0, 50);
    }
  } else {
    if (input.rythmeMensuel?.trim()) {
      payload.rythmeMensuel = input.rythmeMensuel.trim().slice(0, 150);
    }
    if (input.joursPreferes?.trim()) {
      payload.joursPreferes = input.joursPreferes.trim().slice(0, 150);
    }
  }
  if (input.details?.trim()) {
    payload.details = input.details.trim().slice(0, 2000);
  }

  try {
    await setDoc(doc(db, 'devis_requests', reference), payload);
    return { reference };
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, docPath);
  }
}
