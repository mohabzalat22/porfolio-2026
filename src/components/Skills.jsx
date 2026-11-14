import { useReveal } from "../hooks";

export default function Skills({ skills }) {
  const [ref, shown] = useReveal();
  return (
    <section id="skills" className="section">
      <div ref={ref} className={`container reveal ${shown ? "in" : ""}`}>
        <p className="kicker">04 — Skills</p>
        <h2>My toolbox.</h2>
        <div className="skills-grid">
          {skills.map((g, gi) => (
            <div
              key={g.group}
              className="card skill-group"
              style={{ transitionDelay: `${gi * 60}ms` }}
            >
              <h3>{g.group}</h3>
              <ul className="tags">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
