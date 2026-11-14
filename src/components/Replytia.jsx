import { useEffect, useState } from "react";
import { useReveal } from "../hooks";

// Scripted demo conversation — loops forever.
const script = [
  { from: "user", text: "Hi! Is the black hoodie (M) in stock?" },
  { from: "tia", text: "Yes — 4 left in size M, EGP 750. Want me to reserve one?" },
  { from: "user", text: "Yes please, deliver to Alexandria" },
  { from: "tia", text: "Done — order #1042 created. Delivery in 2 days." },
];

function ChatDemo() {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let t;
    if (step >= script.length) {
      t = setTimeout(() => setStep(0), 3500);
    } else {
      const next = script[step];
      if (next.from === "tia") {
        setTyping(true);
        t = setTimeout(() => {
          setTyping(false);
          setStep((s) => s + 1);
        }, 1100);
      } else {
        t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 700 : 1000);
      }
    }
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="phone" aria-label="Animated Replytia chat demo">
      <div className="phone-top">
        <span className="avatar">T</span>
        <div>
          <strong>TIA</strong>
          <small>
            <i className="dot" /> WhatsApp · online
          </small>
        </div>
      </div>
      <div className="chat">
        {script.slice(0, step).map((m, i) => (
          <div key={i} className={`bubble ${m.from}`}>
            {m.text}
          </div>
        ))}
        {typing && (
          <div className="bubble tia typing">
            <i /> <i /> <i />
          </div>
        )}
      </div>
    </div>
  );
}

function Kanban() {
  const cols = [
    { name: "New", items: ["Sara · hoodie", "Omar · sneakers"] },
    { name: "Negotiating", items: ["Mona · 3 items"] },
    { name: "Won", items: ["Ahmed · #1041", "Lina · #1042"] },
  ];
  return (
    <div className="kanban">
      {cols.map((c, ci) => (
        <div key={c.name} className="kcol">
          <h5>{c.name}</h5>
          {c.items.map((it, i) => (
            <div
              key={it}
              className="kcard"
              style={{ animationDelay: `${(ci * 2 + i) * 0.35}s` }}
            >
              {it}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Replytia({ data }) {
  const [ref, shown] = useReveal();
  return (
    <section id="replytia" className="section">
      <div ref={ref} className={`container reveal ${shown ? "in" : ""}`}>
        <p className="kicker">02 — Latest project</p>
        <div className="rt-head">
          <h2>
            <span className="grad">{data.name}</span> — {data.tagline}
          </h2>
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Visit replytia.com
          </a>
        </div>
        <p className="lead">{data.description}</p>

        <div className="rt-demo">
          <ChatDemo />
          <div className="rt-side">
            <h4>Pipeline, automatically</h4>
            <Kanban />
            <div className="channels">
              {data.channels.map((c) => (
                <span key={c.name} className="channel">
                  <i className="dot" /> {c.name} <em>{c.status}</em>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="feature-grid">
          {data.features.map((f, i) => (
            <article
              key={f.title}
              className="card feature"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="f-top">
                <span className="f-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="chip">{f.tag}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
