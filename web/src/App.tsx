import { LangProvider } from "@/lib/i18n";
import { TweaksProvider } from "@/lib/tweaks";
import { TopBar } from "@/components/TopBar";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Doctors } from "@/components/Doctors";
import { Notices } from "@/components/Notices";
import { Visit } from "@/components/Visit";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { Tweaks } from "@/components/Tweaks";
import { ToTop } from "@/components/ToTop";

export default function App() {
  return (
    <LangProvider>
      <TweaksProvider>
        <a className="skip-link" href="#top">
          Skip to content
        </a>

        <TopBar />
        <SiteHeader />

        <main id="top">
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Stats />
          <Doctors />
          <Notices />
          <Visit />
          <Gallery />
          <Contact />
        </main>

        <SiteFooter />
        <Tweaks />
        <ToTop />
      </TweaksProvider>
    </LangProvider>
  );
}
