import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLang } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { departments, hours } from "@/lib/data";
import { Section } from "./Section";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m8 12.5 2.6 2.6L16 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Visit() {
  const { t } = useLang();
  const [showSuccess, setShowSuccess] = useState(false);

  const schema = useMemo(
    () =>
      z.object({
        name: z
          .string()
          .min(1, t("Please enter your full name", "पूरा नाम लेख्नुहोस्")),
        phone: z
          .string()
          .min(1, t("Please enter your phone number", "फोन नम्बर लेख्नुहोस्"))
          .regex(
            /^[0-9+\-\s]{7,15}$/,
            t(
              "Enter a valid phone number (7–15 digits)",
              "मान्य फोन नम्बर लेख्नुहोस् (७–१५ अंक)"
            )
          ),
        department: z
          .string()
          .min(1, t("Please choose a department", "विभाग छान्नुहोस्")),
        date: z
          .string()
          .min(1, t("Please pick a preferred date", "मनपर्ने मिति छान्नुहोस्")),
        message: z.string().optional(),
      }),
    [t]
  );

  type FormValues = z.infer<typeof schema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      department: "",
      date: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (_values: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setShowSuccess(true);
    form.reset();
    setTimeout(() => setShowSuccess(false), 4500);
  };

  return (
    <Section
      id="visit"
      num="05"
      labelEn="Plan a visit"
      labelNp="भ्रमण योजना"
      className="visit"
    >
      <Reveal as="h2" className="pull pull--sm">
        <span>{t("Walk in,", "सिधै आउनुहोस्,")}</span>{" "}
        <em>{t("or book ahead.", "वा अगाडि बुक गर्नुहोस्।")}</em>
      </Reveal>

      <div className="visit__grid">
        <div className="visit__info">
          <Reveal as="dl" className="hours">
            {hours.map((h) => (
              <div key={h.dtEn}>
                <dt>{t(h.dtEn, h.dtNp)}</dt>
                <dd>{t(h.ddEn, h.ddNp)}</dd>
              </div>
            ))}
          </Reveal>
          <Reveal as="ul" className="contact-list">
            <li>
              <span className="contact-list__k">{t("Address", "ठेगाना")}</span>
              <span>{t("Rangeli Road, Biratnagar", "रंगेली रोड, विराटनगर")}</span>
            </li>
            <li>
              <span className="contact-list__k">{t("Phone", "फोन")}</span>
              <a href="tel:+977021570103">021-570103</a>
            </li>
            <li>
              <span className="contact-list__k">{t("Email", "इमेल")}</span>
              <a href="mailto:info@koshihospital.gov.np">
                info@koshihospital.gov.np
              </a>
            </li>
            <li>
              <span className="contact-list__k">
                {t("Lab reports", "ल्याब रिपोर्ट")}
              </span>
              <a
                href="https://labreport.merodoctor.com/616"
                target="_blank"
                rel="noopener"
              >
                {t("View online", "अनलाइन हेर्नुहोस्")}
              </a>
            </li>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <Form {...form}>
            <form
              className="appt"
              noValidate
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <h3 className="appt__title">
                {t("Request an appointment", "अपोइन्टमेन्ट अनुरोध")}
              </h3>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel>{t("Full name", "पूरा नाम")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Ram Sharma"
                        autoComplete="name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="appt__error" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel>{t("Phone", "फोन")}</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="e.g. 98XXXXXXXX"
                        autoComplete="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="appt__error" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel>{t("Department", "विभाग")}</FormLabel>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="select-underline">
                          <SelectValue
                            placeholder={t(
                              "Choose a department",
                              "विभाग छान्नुहोस्"
                            )}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="select-content-editorial">
                        {departments.map((d) => (
                          <SelectItem
                            key={d.value}
                            value={d.value}
                            className="select-item"
                          >
                            {t(d.en, d.np)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="appt__error" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel>{t("Preferred date", "मनपर्ने मिति")}</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage className="appt__error" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="field">
                    <FormLabel>
                      {t("Message (optional)", "सन्देश (ऐच्छिक)")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder="Briefly describe your concern..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="appt__error" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className={`btn-solid btn-block h-auto${
                  form.formState.isSubmitting ? " is-loading" : ""
                }`}
                disabled={form.formState.isSubmitting}
                aria-busy={form.formState.isSubmitting}
              >
                {t("Request appointment", "अपोइन्टमेन्ट अनुरोध गर्नुहोस्")}
              </Button>

              <p className="appt__note">
                {t(
                  "The hospital will confirm your slot by phone.",
                  "अस्पतालले फोनमा पुष्टि गर्नेछ।"
                )}
              </p>

              <p
                className={`appt__success${showSuccess ? " is-show" : ""}`}
                role="status"
              >
                <CheckIcon />
                <span>
                  {t(
                    "Request received — we will call you shortly.",
                    "अनुरोध प्राप्त भयो — हामी छिट्टै कल गर्नेछौं।"
                  )}
                </span>
              </p>
            </form>
          </Form>
        </Reveal>
      </div>
    </Section>
  );
}
