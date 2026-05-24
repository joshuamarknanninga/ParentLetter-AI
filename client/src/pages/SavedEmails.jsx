import { useMemo, useState } from "react";
import SavedEmailCard from "../components/SavedEmailCard";
import { getSavedEmails } from "../services/storage";

export default function SavedEmails() {
  const [filters, setFilters] = useState({ q: "", emailType: "", tone: "", language: "", student: "", date: "" });
  const items = getSavedEmails();
  const filtered = useMemo(() => items.filter((i) => (!filters.q || i.subject.toLowerCase().includes(filters.q.toLowerCase()) || i.body.toLowerCase().includes(filters.q.toLowerCase())) && (!filters.emailType || i.emailType === filters.emailType) && (!filters.tone || i.tone === filters.tone) && (!filters.language || i.language === filters.language) && (!filters.student || (i.studentName || "").toLowerCase().includes(filters.student.toLowerCase())) && (!filters.date || i.createdAt.startsWith(filters.date))), [items, filters]);
  return <main className="page"><section className="settings-card"><h1>Saved Emails</h1><div className="form-grid">{Object.keys(filters).map((k) => <input key={k} placeholder={`Filter by ${k}`} value={filters[k]} onChange={(e) => setFilters((p) => ({ ...p, [k]: e.target.value }))} />)}</div></section><section className="feature-grid">{filtered.map((item) => <SavedEmailCard key={item.id} item={item} />)}</section></main>;
}
