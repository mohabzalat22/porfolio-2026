import { useState } from "react";
import { useActiveSection } from "../hooks";

const links = [
  { id: "about", label: "About" },
  { id: "replytia", label: "Replytia" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ name }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(["home", ...links.map((l) => l.id)]);

  return (
    <header className="nav">
      <a href="#home" className="logo" onClick={() => setOpen(false)}>
        <span className="logo-text">{name.split(" ")[0] + " > Labs.com"}</span>
      </a>

      <button
        className={`burger ${open ? "is-open" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
