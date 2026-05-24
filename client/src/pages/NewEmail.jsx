import { useState } from "react";
import EmailForm from "../components/EmailForm";
import EmailPreview from "../components/EmailPreview";
import { generateParentEmail } from "../services/emailFormatter";
import { saveEmail } from "../services/storage";

export default function NewEmail() {
  const [form, setForm] = useState({ emailType: "General Update", tone: "Warm Professional", language: "English", urgency: "Low", meetingRequest: false, roughNotes: "", requestedAction: "Please reply when you have a chance." });
  const [email, setEmail] = useState(null);
  const onGenerate = (e) => { e.preventDefault(); setEmail({ ...generateParentEmail(form), ...form }); };
  const copy = async (text) => navigator.clipboard.writeText(text);
  const onSave = () => { if (!email) return; saveEmail(email); alert("Email saved."); };
  return <main className="page"><EmailForm form={form} setForm={setForm} onGenerate={onGenerate} /><EmailPreview email={email} onCopySubject={() => copy(email?.subject || "")} onCopyBody={() => copy(email?.body || "")} onSave={onSave} /></main>;
}
