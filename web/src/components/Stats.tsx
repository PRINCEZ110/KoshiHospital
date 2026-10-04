import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io.unobserve(el);
          const dur = 1400;
          const t0 = performance.now();
          const step = (now: number) => {
            const k = Math.min((now - t0) / dur, 1);
            el.textContent = String(
              Math.round(target * (1 - Math.pow(1 - k, 3)))
            );
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="counter">
      0
    </span>
  );
}

export function Stats() {
  const { t } = useLang();
  const stats = [
    { value: "24/7", en: "Emergency care", np: "आपतकालीन सेवा" },
    { value: null, en: "Departments", np: "विभागहरू" },
    { value: "24h", en: "Pharmacy", np: "फार्मेसी" },
    { value: "100%", en: "Public institution", np: "सरकारी संस्था" },
  ];

  return (
    <section className="stats">
      {stats.map((s, i) => (
        <Reveal className="stat" key={s.en} delay={i * 60}>
          <strong>
            {s.value === null ? <Counter target={6} /> : s.value}
          </strong>
          <span>{t(s.en, s.np)}</span>
        </Reveal>
      ))}
    </section>
  );
}
