import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { importantLinks } from "@/lib/data";
import { Section } from "./Section";

export function Contact() {
  const { t } = useLang();

  const cards = [
    {
      kEn: "Call the front desk",
      kNp: "फ्रन्ट डेस्कमा कल गर्नुहोस्",
      strong: "021-570103",
      sEn: "Mon–Sun, 9 AM – 5 PM",
      sNp: "सोम–आइत, बिहान ९ – साँझ ५",
      href: "tel:+977021570103",
    },
    {
      kEn: "Information officer",
      kNp: "सूचना अधिकारी",
      strong: "9842139969",
      sEn: "Gajendra Prasad Yadav",
      sNp: "गजेन्द्र प्रसाद यादव",
      href: "tel:9842139969",
    },
    {
      kEn: "Write to us",
      kNp: "हामीलाई लेख्नुहोस्",
      strong: "info@koshihospital.gov.np",
      sEn: "Replies within 2 working days",
      sNp: "२ कार्यदिनभित्र जवाफ",
      href: "mailto:info@koshihospital.gov.np",
    },
  ];

  return (
    <Section
      id="contact"
      num="06"
      labelEn="Contact & links"
      labelNp="सम्पर्क र लिङ्क"
      className="contact"
    >
      <Reveal as="h2" className="pull pull--sm">
        <span>{t("Talk to", "सम्पर्क")}</span>{" "}
        <em>{t("a human.", "हामीसँग।")}</em>
      </Reveal>

      <div className="contact__grid">
        <div className="contact__cards">
          {cards.map((c, i) => (
            <Reveal as="a" className="ccard" href={c.href} key={c.strong} delay={i * 70}>
              <span className="ccard__k">{t(c.kEn, c.kNp)}</span>
              <strong>{c.strong}</strong>
              <span className="ccard__s">{t(c.sEn, c.sNp)}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="contact__links" delay={120}>
          <h4>{t("Important links", "महत्त्वपूर्ण लिङ्कहरू")}</h4>
          {importantLinks.map((l) => (
            <a
              className="ilink"
              href={l.href}
              target="_blank"
              rel="noopener"
              key={l.href}
            >
              <span>{t(l.en, l.np)}</span>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
