import { emailTypes, languages, tones } from "../services/emailFormatter";

export default function EmailForm({ form, setForm, onGenerate }) {
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  return (
    <form className="settings-card" onSubmit={onGenerate}>
      <h2>New Parent Email</h2>
      <div className="form-grid">
        {[
          ["studentName", "Student Name"], ["guardianName", "Parent/Guardian Name"], ["teacherName", "Teacher Name"],
          ["subject", "Class/Subject"], ["gradeLevel", "Grade Level"], ["requestedAction", "Requested Action"], ["deadline", "Optional Deadline"]
        ].map(([name, label]) => (
          <label key={name}>{label}<input name={name} value={form[name] || ""} onChange={onChange} /></label>
        ))}
        <label>Email Type<select name="emailType" value={form.emailType} onChange={onChange}>{emailTypes.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label>Tone<select name="tone" value={form.tone} onChange={onChange}>{tones.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label>Language<select name="language" value={form.language} onChange={onChange}>{languages.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label>Urgency<select name="urgency" value={form.urgency} onChange={onChange}><option>Low</option><option>Medium</option><option>High</option></select></label>
      </div>
      <label>Rough Notes<textarea name="roughNotes" value={form.roughNotes} onChange={onChange} rows="6" /></label>
      <label className="check"><input type="checkbox" name="meetingRequest" checked={form.meetingRequest} onChange={onChange} /> Optional meeting request</label>
      <button className="btn primary" type="submit">Generate Email</button>
    </form>
  );
}
