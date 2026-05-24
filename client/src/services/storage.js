const KEY = "parentletter_saved_emails";
export function getSavedEmails() { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; } }
export function saveEmail(email) { const data = getSavedEmails(); data.unshift({ ...email, id: crypto.randomUUID(), createdAt: new Date().toISOString() }); localStorage.setItem(KEY, JSON.stringify(data)); return data; }
