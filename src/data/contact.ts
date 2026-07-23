// Real business contact details, centralized so every page/component
// reads from one source of truth. Update here if any of these change —
// and keep index.html's JSON-LD (telephone/email/contactPoint) in sync
// manually, since that file is static HTML rather than JS.
//
// The Netherlands number takes calls and WhatsApp; the Portugal number is
// WhatsApp-only (no voice calls) — components must respect that
// distinction rather than rendering both as plain tel: links.
export const CONTACT = {
  phoneNL: {
    display: '+31 6 4487 7149',
    tel: '+31644877149',
    whatsapp: '31644877149',
    callable: true,
  },
  phonePT: {
    display: '+351 913 825 401',
    tel: null,
    whatsapp: '351913825401',
    callable: false,
  },
  // Marked by the client as a temporary address — expect this to be
  // replaced with a permanent business inbox later.
  email: 'NederlandPortugalExpress@gmail.com',
  social: {
    instagram: '',
    linkedin: '',
  },
} as const
