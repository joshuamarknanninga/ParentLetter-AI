import { Link, NavLink } from "react-router-dom";

const links = [
  ["/", "Dashboard"],
  ["/new-email", "New Email"],
  ["/saved-emails", "Saved Emails"],
  ["/templates", "Templates"],
  ["/pricing", "Pricing"],
  ["/settings", "Settings"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">ParentLetter AI</Link>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
