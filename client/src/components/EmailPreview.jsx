export default function EmailPreview({ email, onCopySubject, onCopyBody, onSave }) {
  if (!email) return <section className="settings-card"><p>Generate an email to preview it here.</p></section>;
  return (
    <section className="settings-card">
      <h2>Generated Email Preview</h2>
      <p><strong>Subject:</strong> {email.subject}</p>
      <pre className="email-preview">{email.body}</pre>
      <div className="hero-actions">
        <button className="btn secondary" onClick={onCopySubject}>Copy Subject</button>
        <button className="btn secondary" onClick={onCopyBody}>Copy Body</button>
        <button className="btn primary" onClick={onSave}>Save Email</button>
      </div>
    </section>
  );
}
