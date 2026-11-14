import { useReveal } from "../hooks";

function Item({ job }) {
  const [ref, shown] = useReveal({ threshold: 0.2 });
  return (
    <li ref={ref} className={`tl-item reveal ${shown ? "in" : ""}`}>
      <span className="tl-dot" />
      <div className="card">
        <small className="period">{job.period}</small>
        <h3>{job.role}</h3>
        <h4>{job.company}</h4>
        <ul>
          {job.points.map((pt) =>
            typeof pt === "string" ? (
              <li key={pt}>{pt}</li>
            ) : (
              <li key={pt.label}>
                <a className="inline-link" href={pt.url} target="_blank" rel="noreferrer">
                  {pt.label}
                </a>
                : {pt.text}
              </li>
            )
          )}
        </ul>
      </div>
    </li>
  );
}

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="kicker">05 — Experience</p>
        <h2>Where I've worked.</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <Item key={job.period} job={job} />
          ))}
        </ol>
      </div>
    </section>
  );
}
