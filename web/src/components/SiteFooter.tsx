import { emblem } from "@/assets/images";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <img
            className="footer__emblem"
            src={emblem}
            alt="Emblem of Nepal"
            width={512}
            height={432}
            loading="lazy"
          />
          <p className="footer__est">
            {t(
              "Est. under the Ministry of Health & Population — serving Biratnagar since generations.",
              "स्वास्थ्य तथा जनसंख्या मन्त्रालय अन्तर्गत — पुस्तादेखि विराटनगरको सेवामा।"
            )}
          </p>
        </div>

        <p className="footer__word" aria-hidden="true">
          Koshi Hospital
        </p>

        <div className="footer__cols">
          <div>
            <h5>{t("Hospital", "अस्पताल")}</h5>
            <a href="#about">{t("About", "हाम्रोबारे")}</a>
            <a href="#services">{t("Services", "सेवाहरू")}</a>
            <a href="#doctors">{t("Doctors", "अधिकारी र कर्मचारी")}</a>
            <a href="#notices">{t("Notices", "सूचना")}</a>
          </div>
          <div>
            <h5>{t("Patient", "बिरामी")}</h5>
            <a href="#visit">{t("Book appointment", "अपोइन्टमेन्ट बुक")}</a>
            <a
              href="https://labreport.merodoctor.com/616"
              target="_blank"
              rel="noopener"
            >
              {t("Lab reports", "ल्याब रिपोर्ट")}
            </a>
            <a href="#visit">{t("Office hours", "कार्यालय समय")}</a>
            <a href="tel:+977021570103">{t("Emergency line", "आपतकालीन लाइन")}</a>
          </div>
          <div>
            <h5>{t("Contact", "सम्पर्क")}</h5>
            <span>{t("Rangeli Road, Biratnagar", "रंगेली रोड, विराटनगर")}</span>
            <a href="tel:+977021570103">021-570103</a>
            <a href="mailto:info@koshihospital.gov.np">info@koshihospital.gov.np</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            {t(
              "© 2083 Koshi Hospital, Biratnagar · Government of Nepal",
              "© २०८३ कोशी अस्पताल, विराटनगर · नेपाल सरकार"
            )}
          </span>
          <span>{t("Health is wealth", "स्वस्थ शरीरमा स्वस्थ मन")}</span>
        </div>
      </div>
    </footer>
  );
}
