export default function SavedEmailCard({ item }) {
  return (
    <article className="feature-card">
      <h3>{item.subject}</h3>
      <p><strong>Student:</strong> {item.studentName}</p>
      <p><strong>Type:</strong> {item.emailType} | <strong>Tone:</strong> {item.tone}</p>
      <p><strong>Language:</strong> {item.language} | <strong>Date:</strong> {new Date(item.createdAt).toLocaleDateString()}</p>
      <p>{item.body.slice(0, 220)}...</p>
    </article>
  );
}
