import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { notices } from "@/lib/data";
import { Section } from "./Section";

export function Notices() {
  const { t } = useLang();
  return (
    <Section
      id="notices"
      num="04"
      labelEn="Notices"
      labelNp="सूचना"
      className="notices"
    >
      <Reveal as="h2" className="pull pull--sm">
        <span>{t("Official", "आधिकारिक")}</span>{" "}
        <em>{t("notice board.", "सूचना पाटी।")}</em>
      </Reveal>

      <ul className="notice-list">
        {notices.map((n, i) => {
          const external = n.href !== "#notices";
          return (
            <Reveal as="li" key={`${n.en}-${i}`} delay={Math.min(i * 50, 300)}>
              <a
                href={n.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener" : undefined}
              >
                <span className="notice-list__text">{t(n.en, n.np)}</span>
                {n.date && <time>{n.date}</time>}
                {n.pdf && <em className="notice-list__pdf">PDF</em>}
              </a>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
