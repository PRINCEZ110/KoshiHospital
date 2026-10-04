import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { useLang, type Lang } from "@/lib/i18n";
import { navItems } from "@/lib/data";

export function SiteHeader() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 30);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    for (const { id } of navItems) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className={`header${scrolled ? " is-scrolled" : ""}`} id="header">
        <a className="wordmark" href="#top" aria-label="Koshi Hospital — home">
          <span className="wordmark__mark" aria-hidden="true">
            <svg viewBox="0 0 100 100" fill="none">
              <rect x="38" y="10" width="24" height="80" rx="10" fill="#C8102E" />
              <rect x="10" y="38" width="80" height="24" rx="10" fill="#C8102E" />
            </svg>
          </span>
          <span className="wordmark__text">
            Koshi <em>Hospital</em>
          </span>
        </a>

        <nav className="index-nav" aria-label="Primary">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? "is-active" : undefined}
            >
              <sup>{n.num}</sup>
              <span>{t(n.en, n.np)}</span>
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <ToggleGroup
            type="single"
            value={lang}
            onValueChange={(v) => {
              if (v) setLang(v as Lang);
            }}
            className="lang-toggle"
            aria-label="Switch language"
          >
            <ToggleGroupItem value="en" className="lang-toggle__item">
              ENG
            </ToggleGroupItem>
            <ToggleGroupItem value="np" className="lang-toggle__item">
              नेपाली
            </ToggleGroupItem>
          </ToggleGroup>

          <a className="btn-emergency" href="tel:+977021570103">
            {t("Emergency · 021-570103", "आपतकालीन · ०२१-५७०१०३")}
          </a>

          <button
            className={`burger${menuOpen ? " is-open" : ""}`}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent className="sheet-mobile">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            {t("Site navigation", "साइट मेनु")}
          </SheetDescription>
          <nav className="sheet-mobile__nav" aria-label="Mobile">
            {navItems.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)}>
                <sup>{n.num}</sup>
                <span>{t(n.en, n.np)}</span>
              </a>
            ))}
          </nav>
          <div className="sheet-mobile__foot">
            <span>{t("Rangeli Road, Biratnagar", "रंगेली रोड, विराटनगर")}</span>
            <a href="tel:+977021570103">021-570103</a>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
