export default function PlanCard({ plan, onSubscribe }) {
  return (
    <article className={plan.featured ? "plan-card featured-plan" : "plan-card"}>
      {plan.featured && <p className="badge">Most Useful</p>}
      <h2>{plan.name}</h2><p className="plan-price">{plan.price}</p><p>{plan.description}</p>
      <ul>{plan.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
      <button className="btn primary" onClick={() => onSubscribe(plan.key)}>{plan.cta}</button>
    </article>
  );
}
