export default function TemplateCard({ template }) {
  return (
    <article className="feature-card">
      <h3>{template.title}</h3>
      <p><strong>Type:</strong> {template.type}</p>
      <p><strong>Tone:</strong> {template.tone}</p>
      <p>{template.description}</p>
    </article>
  );
}
