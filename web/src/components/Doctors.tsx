import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { doctors } from "@/lib/data";
import { Section } from "./Section";

export function Doctors() {
  const { t } = useLang();
  return (
    <Section
      id="doctors"
      num="03"
      labelEn="Doctors & Staff"
      labelNp="अधिकारी र कर्मचारी"
      className="doctors"
    >
      <Reveal as="h2" className="pull pull--sm">
        <span>{t("The people", "मानिसहरू")}</span>{" "}
        <em>{t("behind the care.", "सेवाका पछाडि।")}</em>
      </Reveal>

      <div className="docs">
        {doctors.map((d, i) => (
          <Reveal as="article" className="doc" key={d.name} delay={i * 80}>
            <div className="doc__photo doc__photo--mono">
              <span>
                {d.monoLines[0]}
                <br />
                {d.monoLines[1]}
              </span>
            </div>
            <h3 className="doc__name">{d.name}</h3>
            <p className="doc__role">{t(d.roleEn, d.roleNp)}</p>
            {d.tel && (
              <a className="doc__tel" href={`tel:${d.tel}`}>
                {d.tel}
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
