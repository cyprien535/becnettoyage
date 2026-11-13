import nodemailer from 'nodemailer';

interface VercelReq {
  method?: string;
  body?: unknown;
}

interface VercelRes {
  status: (code: number) => VercelRes;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

interface DevisEmailPayload {
  reference: string;
  ville: string;
  quartier?: string;
  typeLocal: string;
  nomComplet: string;
  telephone: string;
  email?: string;
  contactPrefere?: string;
  frequenceType: string;
  delaiPonctuel?: string;
  datePrecise?: string;
  rythmeMensuel?: string;
  joursPreferes?: string;
  superficieTranche: string;
  details?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
  );
}

async function sendPdgNotificationEmail(payload: DevisEmailPayload): Promise<boolean> {
  if (!isSmtpConfigured()) {
    console.warn('SMTP credentials are not configured; skipping CEO email notification.');
    return false;
  }

  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.isFinite(smtpPort) ? smtpPort : 587,
    secure: smtpSecure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const pdgEmail =
    process.env.PDG_EMAIL?.trim() || 'olakiki302@gmail.com';
  const fromAddress =
    process.env.SMTP_FROM?.trim() ||
    `BEC Nettoyage <${process.env.SMTP_USER}>`;

  const isPonctuel = payload.frequenceType === 'une_fois';
  const frequenceLibelle = isPonctuel
    ? `Une seule fois — ${payload.delaiPonctuel || 'Dès que possible'}${
        payload.datePrecise ? ` (Date souhaitée : ${payload.datePrecise})` : ''
      }`
    : `Chaque mois — ${payload.rythmeMensuel || 'Sur mesure'} (Préférence : ${
        payload.joursPreferes || 'Non précisée'
      })`;

  const cleanPhone = payload.telephone.replace(/[^\d+]/g, '');
  const waNumber = cleanPhone.startsWith('+')
    ? cleanPhone.slice(1)
    : cleanPhone.startsWith('229')
    ? cleanPhone
    : `229${cleanPhone}`;

  const textBody = [
    `NOUVELLE DEMANDE DE DEVIS — BEC NETTOYAGE (${payload.reference})`,
    '====================================================',
    `Client : ${payload.nomComplet}`,
    `Téléphone / WhatsApp : ${payload.telephone}`,
    `E-mail client : ${payload.email || 'Non renseigné'}`,
    `Canal préféré : ${payload.contactPrefere || 'WhatsApp'}`,
    '',
    'DÉTAILS DE LA PRESTATION :',
    `- Ville : ${payload.ville}`,
    `- Quartier / Repère : ${payload.quartier || 'Non précisé'}`,
    `- Type d'espace : ${payload.typeLocal}`,
    `- Superficie estimée : ${payload.superficieTranche}`,
    `- Fréquence : ${frequenceLibelle}`,
    '',
    'Précisions complémentaires :',
    payload.details?.trim() || 'Aucune précision complémentaire.',
    '====================================================',
    `Référence enregistrée dans Firebase Firestore : ${payload.reference}`,
  ].join('\n');

  const htmlBody = `
    <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f5f9fe; padding: 24px; color: #10233f;">
      <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #d9e4f5; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #02164f 0%, #0a5be8 100%); padding: 24px 28px; color: #ffffff;">
          <p style="margin: 0 0 6px; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #00d2ff; font-weight: 700;">
            BEC Nettoyage · Propreté Plus Bénin
          </p>
          <h1 style="margin: 0; font-size: 22px; font-weight: 800;">
            Nouvelle demande de devis (${escapeHtml(payload.reference)})
          </h1>
        </div>

        <div style="padding: 24px 28px;">
          <p style="margin: 0 0 18px; font-size: 14px; color: #55688a;">
            Un client vient de soumettre une nouvelle configuration de devis depuis le site web. La demande a été enregistrée dans Firebase Firestore.
          </p>

          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #0a5be8; margin: 0 0 10px;">
            Coordonnées du client
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600; width: 40%;">Nom / Société</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;">${escapeHtml(payload.nomComplet)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600;">Téléphone / WhatsApp</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;"><strong>${escapeHtml(payload.telephone)}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600;">E-mail</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;">${escapeHtml(payload.email || 'Non renseigné')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600;">Canal préféré</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;">${escapeHtml(payload.contactPrefere || 'WhatsApp')}</td>
            </tr>
          </table>

          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #0a5be8; margin: 0 0 10px;">
            Détails de la prestation
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600; width: 40%;">Zone</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;">${escapeHtml(payload.ville)}${payload.quartier ? ` — ${escapeHtml(payload.quartier)}` : ''}</td>
            </tr>
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600;">Type d'espace</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;">${escapeHtml(payload.typeLocal)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600;">Superficie estimée</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;">${escapeHtml(payload.superficieTranche)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600;">Fréquence</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;">${escapeHtml(frequenceLibelle)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 10px; background: #f5f9fe; border: 1px solid #e2eaf6; font-weight: 600;">Précisions</td>
              <td style="padding: 8px 10px; border: 1px solid #e2eaf6;">${escapeHtml(payload.details?.trim() || 'Aucune précision')}</td>
            </tr>
          </table>

          <div style="text-align: center; padding-top: 8px;">
            <a
              href="https://wa.me/${escapeHtml(waNumber)}"
              style="display: inline-block; background-color: #25d366; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 22px; border-radius: 10px;"
            >
              Contacter ${escapeHtml(payload.nomComplet)} sur WhatsApp
            </a>
          </div>
        </div>

        <div style="background: #f5f9fe; padding: 14px 28px; font-size: 12px; color: #55688a; border-top: 1px solid #e2eaf6; text-align: center;">
          Notification automatique — BEC Nettoyage (Propreté Plus Bénin)
        </div>
      </div>
    </div>
  `;

  const rawClientEmail = payload.email?.trim() || '';
  const validReplyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawClientEmail)
    ? rawClientEmail
    : undefined;

  const info = await transporter.sendMail({
    from: fromAddress,
    to: pdgEmail,
    replyTo: validReplyTo,
    subject: `[Devis ${payload.reference}] ${payload.typeLocal} à ${payload.ville} — ${payload.nomComplet}`,
    text: textBody,
    html: htmlBody,
  });

  console.log('CEO notification email sent:', {
    reference: payload.reference,
    to: pdgEmail,
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
  });

  return Array.isArray(info.accepted) && info.accepted.length > 0;
}

export default async function handler(req: VercelReq, res: VercelRes) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  let parsedBody: Partial<DevisEmailPayload> = {};
  if (typeof req.body === 'string') {
    try {
      parsedBody = JSON.parse(req.body) as Partial<DevisEmailPayload>;
    } catch {
      parsedBody = {};
    }
  } else if (req.body && typeof req.body === 'object') {
    parsedBody = req.body as Partial<DevisEmailPayload>;
  }

  const reference = String(parsedBody.reference || '').trim();
  const ville = String(parsedBody.ville || '').trim();
  const quartier = String(parsedBody.quartier || '').trim();
  const typeLocal = String(parsedBody.typeLocal || '').trim();
  const nomComplet = String(parsedBody.nomComplet || '').trim();
  const telephone = String(parsedBody.telephone || '').trim();
  const email = String(parsedBody.email || '').trim();
  const contactPrefere = String(parsedBody.contactPrefere || 'WhatsApp').trim();
  const frequenceType = String(parsedBody.frequenceType || 'une_fois').trim();
  const delaiPonctuel = String(parsedBody.delaiPonctuel || '').trim();
  const datePrecise = String(parsedBody.datePrecise || '').trim();
  const rythmeMensuel = String(parsedBody.rythmeMensuel || '').trim();
  const joursPreferes = String(parsedBody.joursPreferes || '').trim();
  const superficieTranche = String(parsedBody.superficieTranche || '').trim();
  const details = String(parsedBody.details || '').trim();

  if (!reference || !ville || !typeLocal || !nomComplet || !telephone || !superficieTranche) {
    return res.status(400).json({
      ok: false,
      error: 'Champs obligatoires manquants pour la notification e-mail.',
    });
  }

  let emailSent = false;
  try {
    emailSent = await sendPdgNotificationEmail({
      reference,
      ville,
      quartier,
      typeLocal,
      nomComplet,
      telephone,
      email,
      contactPrefere,
      frequenceType,
      delaiPonctuel,
      datePrecise,
      rythmeMensuel,
      joursPreferes,
      superficieTranche,
      details,
    });
  } catch (mailError) {
    console.error('Failed to send CEO notification email:', mailError);
    return res.status(500).json({
      ok: false,
      emailSent: false,
      error: 'Échec de l’envoi SMTP.',
    });
  }

  return res.status(200).json({
    ok: emailSent,
    emailSent,
  });
}
