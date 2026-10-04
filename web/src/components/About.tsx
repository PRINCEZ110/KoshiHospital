import { hospital2 } from "@/assets/images";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { facts } from "@/lib/data";
import { Section } from "./Section";

export function About() {
  const { t } = useLang();
  return (
    <Section id="about" num="01" labelEn="About" labelNp="हाम्रोबारे" className="about">
      <Reveal as="h2" className="pull">
        <span>{t("A public promise,", "सार्वजनिक प्रतिबद्धता,")}</span>{" "}
        <em>{t("kept every day.", "प्रतिदिन पूरा।")}</em>
      </Reveal>

      <div className="about__cols">
        <Reveal as="p">
          {t(
            "Koshi Hospital has served the people of Biratnagar and the eastern region for generations. What began as a small government health post is today one of the busiest public hospitals in Koshi Province — a place where more than a thousand patients find care every week.",
            "कोशी अस्पतालले विराटनगर र पूर्वी क्षेत्रका जनताको सेवा यसअघिका पुस्तादेखि गर्दै आएको छ। सानो सरकारी स्वास्थ्य चौकीबाट सुरु भएको यो आज कोशी प्रदेशका व्यस्ततम सरकारी अस्पतालहरूमध्ये एक बनेको छ — हप्तामा सयौं बिरामीले उपचार पाउने ठाउँ।"
          )}
        </Reveal>
        <Reveal as="p" delay={80}>
          {t(
            "Every department — from the emergency ward to the pharmacy — runs on a simple belief: that quality healthcare is a right, not a privilege. Senior doctors, nurses and support staff work in shifts around the clock so that the hospital never closes its doors.",
            "आपतकालीन वार्डदेखि फार्मेसीसम्म — हरेक विभागलाई एउटै विश्वास चलाउँछ: गुणस्तरीय स्वास्थ्य सेवा अधिकार हो, विशेषाधिकार होइन। वरिष्ठ डाक्टर, नर्स र सहायक कर्मचारीहरूले दिनरात पालैपालो काम गर्छन् ताकि अस्पतालको ढोका कहिल्यै बन्द नहोस्।"
          )}
        </Reveal>
      </div>

      <Reveal as="blockquote" className="pullquote">
        <p>
          {t(
            "“Quality healthcare is a right, not a privilege.”",
            "“गुणस्तरीय स्वास्थ्य सेवा अधिकार हो, विशेषाधिकार होइन।”"
          )}
        </p>
        <cite>
          {t(
            "— Koshi Hospital, Citizen Charter",
            "— कोशी अस्पताल, नागरिक बडापत्र"
          )}
        </cite>
      </Reveal>

      <Reveal as="dl" className="facts">
        {facts.map((f) => (
          <div key={f.dtEn}>
            <dt>{t(f.dtEn, f.dtNp)}</dt>
            <dd>{t(f.ddEn, f.ddNp)}</dd>
          </div>
        ))}
      </Reveal>

      <Reveal as="figure" className="about__photo">
        <img
          src={hospital2}
          alt="Inside the Koshi Hospital campus"
          width={1200}
          height={608}
          loading="lazy"
        />
        <figcaption>
          {t("The hospital campus, Biratnagar", "अस्पताल परिसर, विराटनगर")}
        </figcaption>
      </Reveal>
    </Section>
  );
}
