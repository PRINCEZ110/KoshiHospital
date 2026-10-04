import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { services } from "@/lib/data";
import { Section } from "./Section";

export function Services() {
  const { t } = useLang();
  const previewRef = useRef<HTMLDivElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const preview = previewRef.current;
    const previewImg = previewImgRef.current;
    if (!preview || !previewImg) return;
    const finePointer = window.matchMedia(
      "(hover:hover) and (pointer:fine)"
    ).matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;

    const move = () => {
      px += (tx - px) * 0.12;
      py += (ty - py) * 0.12;
      preview.style.transform = `translate(${px}px, ${py}px)`;
      raf = requestAnimationFrame(move);
    };
    raf = requestAnimationFrame(move);

    const items = document.querySelectorAll<HTMLElement>(".svc-index li");
    const cleanups: (() => void)[] = [];
    items.forEach((item) => {
      const enter = () => {
        if (document.documentElement.classList.contains("motion-off")) return;
        const src = item.dataset.img;
        if (src) previewImg.src = src;
        preview.classList.add("is-visible");
      };
      const leave = () => preview.classList.remove("is-visible");
      const moveHandler = (e: MouseEvent) => {
        tx = e.clientX + 24;
        ty = e.clientY - 150;
      };
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
      item.addEventListener("mousemove", moveHandler);
      cleanups.push(() => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
        item.removeEventListener("mousemove", moveHandler);
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <Section id="services" num="02" labelEn="Services" labelNp="सेवाहरू" className="services">
      <Reveal as="h2" className="pull pull--sm">
        <span>{t("Six departments,", "छ विभागहरू,")}</span>{" "}
        <em>{t("one roof.", "एउटै छत।")}</em>
      </Reveal>

      <ul className="svc-index">
        {services.map((s, i) => (
          <Reveal
            as="li"
            key={s.num}
            data-img={s.img}
            delay={Math.min(i * 60, 300)}
          >
            <a href="#visit">
              <span className="svc-index__num">{s.num}</span>
              <span className="svc-index__name">{t(s.en, s.np)}</span>
              <span className="svc-index__tag">{t(s.tagEn, s.tagNp)}</span>
              <span className="svc-index__desc">{t(s.descEn, s.descNp)}</span>
              <span className="svc-index__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </Reveal>
        ))}
      </ul>

      <div className="svc-preview" ref={previewRef} aria-hidden="true">
        <img ref={previewImgRef} alt="" />
      </div>
    </Section>
  );
}
