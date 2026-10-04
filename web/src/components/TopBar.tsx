import { useLang } from "@/lib/i18n";

export function TopBar() {
  const { t } = useLang();
  return (
    <div className="topbar">
      <span className="topbar__left">
        {t(
          "Government of Nepal · Ministry of Health and Population",
          "नेपाल सरकार · स्वास्थ्य तथा जनसंख्या मन्त्रालय"
        )}
      </span>
      <span className="topbar__right">
        <a
          href="https://labreport.merodoctor.com/616"
          target="_blank"
          rel="noopener"
        >
          {t("Online Lab Report", "अनलाइन ल्याब रिपोर्ट")}
        </a>
        <a href="tel:+977021570103">{t("021-570103", "०२१-५७०१०३")}</a>
      </span>
    </div>
  );
}
