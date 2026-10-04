import { useEffect, useRef, useState } from "react";
import { hospital1 } from "@/assets/images";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";

export function Hero() {
  const { t } = useLang();
  const [linesIn, setLinesIn] = useState([false, false]);
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLinesIn([true, true]);
      return;
    }
    const timers = [
      setTimeout(() => setLinesIn((prev) => [true, prev[1]]), 250),
      setTimeout(() => setLinesIn((prev) => [prev[0], true]), 410),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const img = photoRef.current;
    if (!img) return;
    const finePointer = window.matchMedia(
      "(hover:hover) and (pointer:fine)"
    ).matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (document.documentElement.classList.contains("motion-off")) return;
        const holder = img.parentElement;
        if (!holder) return;
        const rect = holder.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > innerHeight) return;
        const progress =
          (rect.top + rect.height / 2 - innerHeight / 2) / innerHeight;
        img.style.transform = `translateY(${progress * -34}px) scale(1.06)`;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <Reveal as="p" className="overline">
            <span className="overline__sq" />
            <span>
              {t(
                "Public Hospital — Rangeli Road, Biratnagar",
                "सरकारी अस्पताल — रंगेली रोड, विराटनगर"
              )}
            </span>
          </Reveal>
          <h1 className="hero__title">
            <span className={`hero__line${linesIn[0] ? " is-in" : ""}`}>
              <span>{t("The hospital", "विराटनगरको")}</span>
            </span>
            <span className={`hero__line${linesIn[1] ? " is-in" : ""}`}>
              <span>
                {t("Biratnagar", "भरोसाको")}{" "}
                <em>{t("relies on.", "अस्पताल।")}</em>
              </span>
            </span>
          </h1>
          <Reveal as="p" className="hero__sub">
            {t(
              "A government institution under the Ministry of Health and Population — emergency, surgery, intensive care and everyday medicine, open day and night.",
              "स्वास्थ्य तथा जनसंख्या मन्त्रालयको सरकारी संस्था — आपतकालीन, सर्जरी, सघन उपचार र दैनिक चिकित्सा सेवा, दिन र रात खुला।"
            )}
          </Reveal>
          <Reveal className="hero__meta">
            <span>
              {t(
                "Ministry of Health & Population",
                "स्वास्थ्य तथा जनसंख्या मन्त्रालय"
              )}
            </span>
            <span className="hero__meta-dot" aria-hidden="true" />
            <span>
              {t("Emergency open 24 hours", "आपतकालीन २४ घण्टा खुला")}
            </span>
          </Reveal>
          <Reveal className="hero__cta">
            <a href="#visit" className="btn-solid">
              {t("Book an appointment", "अपोइन्टमेन्ट बुक गर्नुहोस्")}
            </a>
            <a href="#services" className="btn-line">
              {t("Explore services", "सेवाहरू हेर्नुहोस्")}
            </a>
          </Reveal>
        </div>

        <Reveal as="figure" className="hero__photo" delay={200}>
          <div className="hero__photo-frame" aria-hidden="true" />
          <img
            ref={photoRef}
            src={hospital1}
            alt="Koshi Hospital building on Rangeli Road, Biratnagar"
            width={1200}
            height={608}
            fetchPriority="high"
          />
          <figcaption>
            <span>
              {t(
                "Koshi Hospital — Rangeli Road, Biratnagar",
                "कोशी अस्पताल — रंगेली रोड, विराटनगर"
              )}
            </span>
            <span className="hero__photo-credit">Hospital archive</span>
          </figcaption>
        </Reveal>
      </div>
      <a className="hero__scroll" href="#about" aria-label="Scroll to about">
        <span>{t("Scroll", "स्क्रल")}</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
