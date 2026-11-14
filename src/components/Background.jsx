import { useEffect, useRef } from "react";

// Lightweight canvas constellation. Fewer particles on mobile,
// pauses when the tab is hidden, respects prefers-reduced-motion.
export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, dpr, particles, raf;
    const pointer = { x: -9999, y: -9999 };

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor((w * h) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          const f = (1 - d2 / 14000) * 0.6;
          p.x += (dx / Math.sqrt(d2 || 1)) * f;
          p.y += (dy / Math.sqrt(d2 || 1)) * f;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(52,211,153,0.55)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ax = p.x - q.x;
          const ay = p.y - q.y;
          const dist = ax * ax + ay * ay;
          if (dist < 9000) {
            ctx.strokeStyle = `rgba(16,185,129,${0.14 * (1 - dist / 9000)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const t = e.touches ? e.touches[0] : e;
      pointer.x = t.clientX;
      pointer.y = t.clientY;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
    };
    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) draw();
    };

    init();
    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }
    window.addEventListener("resize", init);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("touchend", onLeave);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("touchend", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <canvas ref={canvasRef} className="bg-canvas" aria-hidden="true" />
    </>
  );
}
