import TemplateCard from "../components/TemplateCard";

const templates = [
  { title: "Behavior Concern", type: "Behavior Concern", tone: "Firm But Kind", description: "Address behavior factually with clear next steps and support." },
  { title: "Positive Praise", type: "Positive Praise", tone: "Encouraging", description: "Celebrate growth and reinforce positive habits." },
  { title: "Sensitive Concern", type: "Sensitive Concern", tone: "Restorative", description: "Communicate concerns calmly without diagnosis or legal language." },
  { title: "Parent Conference Request", type: "Parent Conference Request", tone: "Warm Professional", description: "Invite family partnership with optional meeting times." },
];

export default function Templates() { return <main className="page"><section className="page-header"><p className="eyebrow">Templates</p><h1>School-Ready Templates</h1><p>Use proven starting points for difficult and positive conversations.</p></section><section className="feature-grid">{templates.map((t) => <TemplateCard key={t.title} template={t} />)}</section></main>; }
