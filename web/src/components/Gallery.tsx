import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { gallery } from "@/lib/data";
import { Section } from "./Section";

export function Gallery() {
  const { t } = useLang();
  return (
    <Section id="gallery" num="06" labelEn="Gallery" labelNp="ग्यालेरी" className="gallery">
      <Carousel
        className="gallery-carousel"
        opts={{ align: "start", loop: false }}
      >
        <CarouselContent>
          {gallery.map((g, i) => (
            <CarouselItem className="gcard-slide" key={`${g.capEn}-${i}`}>
              <Reveal as="figure" className="gcard" delay={i * 90}>
                <div className="gcard__img">
                  <img src={g.img} alt={g.alt} width={1200} height={608} loading="lazy" />
                </div>
                <figcaption>{t(g.capEn, g.capNp)}</figcaption>
              </Reveal>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="carousel-btn carousel-btn--prev" />
        <CarouselNext className="carousel-btn carousel-btn--next" />
      </Carousel>
    </Section>
  );
}
