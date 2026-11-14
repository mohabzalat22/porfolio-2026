import { useReveal, useCountUp } from "../hooks";

function Stat({ value, suffix, label, shown }) {
  const n = useCountUp(value, shown);
  return (
    <div className="stat">
      <strong>
        {n}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function About({ profile, education }) {
  const [ref, shown] = useReveal();
  return (
    <section id="about" className="section">
      <div ref={ref} className={`container reveal ${shown ? "in" : ""}`}>
        <p className="kicker">01 — About</p>
        <h2>Owning features, end to end.</h2>
        <div className="about-grid">
          <p className="lead">{profile.summary}</p>
          <div className="card about-card">
            <div className="stats">
              {profile.stats.map((s) => (
                <Stat key={s.label} {...s} shown={shown} />
              ))}
            </div>
            <div className="edu">
              <span className="chip">Education</span>
              <p>{education.school}</p>
              <small>
                {education.major} · {education.period}
              </small>
            </div>
            <div className="edu">
              <span className="chip">Based in</span>
              <p>{profile.location}</p>
              <small>Open to remote</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
