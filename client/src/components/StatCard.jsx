export default function StatCard({ label, value, hint }) {
  return (
    <article className="stat-card">
      <p className="eyebrow">{label}</p>
      <h3>{value}</h3>
      <p>{hint}</p>
    </article>
  );
}
