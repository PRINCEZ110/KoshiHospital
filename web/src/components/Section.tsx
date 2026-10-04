import type { ReactNode } from "react";
import { useLang } from "@/lib/i18n";

interface SectionProps {
  id: string;
  num: string;
  labelEn: string;
  labelNp: string;
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  num,
  labelEn,
  labelNp,
  className,
  children,
}: SectionProps) {
  const { t } = useLang();
  return (
    <section className={`section${className ? ` ${className}` : ""}`} id={id}>
      <div className="section__label">
        <sup>{num}</sup>
        <span>{t(labelEn, labelNp)}</span>
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}
