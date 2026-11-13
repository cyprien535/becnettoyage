# Security Specification — BEC Nettoyage Firestore

## 1. Data Invariants
1. **Quote Isolation (PII Protection)**: `devis_requests` documents contain PII (`nomComplet`, `telephone`, `email`, `quartier`). Unauthenticated users and non-admin users MUST NEVER be able to `get`, `list`, `update`, or `delete` any document in `/devis_requests`.
2. **Strict Creation Contract**: Anyone submitting the public quote onboarding form can `create` a document in `/devis_requests/{devisId}` ONLY IF:
   - `devisId` matches `^[a-zA-Z0-9_\-]+$` (e.g., `BEC-20261113-A1B2`, `<= 128` chars),
   - All required keys exist and NO extra/shadow keys are injected (`hasOnly`),
   - Every string field has strict type and bounded `.size()`,
   - `statut` is locked to `'nouveau'` on creation,
   - `emailSent` is locked to `false` on creation,
   - `createdAt` equals `request.time` (no forged timestamps).
3. **Admin-Only Management & Email Verification**: Only verified admins (`request.auth.token.email_verified == true` AND either `/admins/$(request.auth.uid)` exists OR `request.auth.token.email == 'sciencesmcv@gmail.com'`) can read, list, update status, or delete quote requests.
4. **Terminal State Locking**: Once a quote request reaches `statut == 'archive'`, updates are locked.
5. **Default Deny**: All other collections/paths are denied by default.

## 2. The "Dirty Dozen" Payloads (Expected: PERMISSION_DENIED)
1. **Unauthenticated List PII**: Unauthenticated `list` on `/devis_requests` -> `PERMISSION_DENIED`.
2. **Unauthenticated Get PII**: Unauthenticated `get` on `/devis_requests/BEC-20261113-AB12` -> `PERMISSION_DENIED`.
3. **Non-Admin Authenticated Get**: Authenticated user (`user@example.com`, `email_verified: true`) attempting `get` on `/devis_requests/BEC-20261113-AB12` -> `PERMISSION_DENIED`.
4. **Email Spoofing Attack**: Authenticated user with `email: 'sciencesmcv@gmail.com'` and `email_verified: false` attempting `list` on `/devis_requests` -> `PERMISSION_DENIED`.
5. **Shadow Field Injection**: Public `create` with extra field `isAdmin: true` or `approved: true` -> `PERMISSION_DENIED`.
6. **Status Shortcutting on Create**: Public `create` with `statut: 'traite'` instead of `'nouveau'` -> `PERMISSION_DENIED`.
7. **Forged Timestamp on Create**: Public `create` with client-supplied `createdAt` != `request.time` -> `PERMISSION_DENIED`.
8. **ID Poisoning**: Public `create` with oversized or invalid characters in `devisId` (e.g., `'bad$id'` or 200 chars) -> `PERMISSION_DENIED`.
9. **Resource Poisoning (1MB Details)**: Public `create` with `details.size() > 2000` -> `PERMISSION_DENIED`.
10. **Invalid Type Poisoning**: Public `create` with `telephone: 123456` (number instead of string) -> `PERMISSION_DENIED`.
11. **Public Update Attempt**: Non-admin attempting `update` on `/devis_requests/BEC-20261113-AB12` -> `PERMISSION_DENIED`.
12. **Self-Assigned Admin Escalation**: Non-admin user attempting `create` on `/admins/{uid}` -> `PERMISSION_DENIED`.

## 3. Test Runner
See `firestore.rules.test.ts` for the verification suite covering all 12 payloads.
