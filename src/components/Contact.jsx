import { useState } from "react";
import { useReveal } from "../hooks";

export default function Contact({ profile }) {
  const [ref, shown] = useReveal();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div ref={ref} className={`container reveal ${shown ? "in" : ""}`}>
        <div className="card contact">
          <p className="kicker">06 — Contact</p>
          <h2>
            Let's build something <span className="grad">great</span>.
          </h2>
          <p className="lead">
            Looking for a remote role delivering well-architected solutions.
            Say hi — I reply fast.
          </p>
          <div className="hero-cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <button className="btn ghost" onClick={copy}>
              {copied ? "Copied" : profile.email}
            </button>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
