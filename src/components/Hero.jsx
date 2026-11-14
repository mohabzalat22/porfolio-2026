import { useTyping } from "../hooks";
import heroPhoto from "../assets/hero.jpg";

export default function Hero({ profile }) {
  const typed = useTyping(profile.typing);
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow reveal-load" style={{ "--d": "0ms" }}>
            <span className="pulse" /> Available for remote roles
          </p>
          <h1 className="reveal-load" style={{ "--d": "100ms" }}>
            Hi, I'm <span className="grad">{profile.name}</span>
          </h1>
          <p className="hero-sub reveal-load" style={{ "--d": "200ms" }}>
            {profile.role} building <span className="typed">{typed}</span>
            <span className="caret" />
          </p>
          <p className="hero-text reveal-load" style={{ "--d": "300ms" }}>
            From database design to production deployment — Laravel, Node.js,
            TypeScript, and AI-powered products.
          </p>
          <div className="hero-cta reveal-load" style={{ "--d": "400ms" }}>
            <a href="#projects" className="btn primary">
              View my work
            </a>
            <a href="#contact" className="btn ghost">
              Get in touch
            </a>
          </div>
        </div>
        <figure className="hero-photo reveal-load" style={{ "--d": "300ms" }}>
          <img
            src={heroPhoto}
            alt={`Portrait of ${profile.name}`}
            width="960"
            height="1280"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
