import { useRef, useState } from "react";
import { useReveal } from "../hooks";

function ProjectCard({ p, i }) {
  const ref = useRef(null);

  // Cursor-follow glow + subtle tilt (desktop only; harmless on touch).
  const onMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--rx", `${((y / r.height) - 0.5) * -6}deg`);
    el.style.setProperty("--ry", `${((x / r.width) - 0.5) * 6}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`card project ${p.featured ? "featured" : ""}`}
      style={{ animationDelay: `${i * 60}ms` }}
    >
      <div className="glow" />
      <header>
        <span className="chip">{p.kind}</span>
        {p.link && p.link !== "" && (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`${p.title} on GitHub`}
            className="ext"
          >
            ↗
          </a>
        )}
      </header>
      <h3>
        {p.link && p.link !== "" ? (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="title-link"
          >
            {p.title}
          </a>
        ) : (
          p.title
        )}
      </h3>
      <h4>{p.subtitle}</h4>
      <p>{p.text}</p>
      <ul className="tags">
        {p.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects({ projects, filters }) {
  const [ref, shown] = useReveal();
  const [active, setActive] = useState("all");
  const list =
    active === "all" ? projects : projects.filter((p) => p.kind === active);

  return (
    <section id="projects" className="section">
      <div ref={ref} className={`container reveal ${shown ? "in" : ""}`}>
        <p className="kicker">03 — Projects</p>
        <h2>Things I've built.</h2>

        <div className="filters" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              className={active === f.id ? "on" : ""}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="project-grid" key={active}>
          {list.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
