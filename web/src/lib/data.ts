import { bloodBank, hospital1, hospital2 } from "@/assets/images";

export interface NavItem {
  id: string;
  num: string;
  en: string;
  np: string;
}

export const navItems: NavItem[] = [
  { id: "about", num: "01", en: "About", np: "हाम्रोबारे" },
  { id: "services", num: "02", en: "Services", np: "सेवाहरू" },
  { id: "doctors", num: "03", en: "Doctors", np: "अधिकारी र कर्मचारी" },
  { id: "notices", num: "04", en: "Notices", np: "सूचना" },
  { id: "visit", num: "05", en: "Visit", np: "भ्रमण" },
  { id: "contact", num: "06", en: "Contact", np: "सम्पर्क" },
];

export const marqueeItems = [
  "Emergency 24/7",
  "Surgical",
  "ICU / HDU",
  "Pharmacy",
  "Medical",
  "Pediatric",
  "Blood Bank",
  "Laboratory",
];

export interface ServiceItem {
  num: string;
  en: string;
  np: string;
  tagEn: string;
  tagNp: string;
  descEn: string;
  descNp: string;
  img: string;
}

export const services: ServiceItem[] = [
  {
    num: "01",
    en: "Emergency",
    np: "आपतकालीन",
    tagEn: "24 hours",
    tagNp: "२४ घण्टा",
    descEn:
      "Trauma response, ambulance support and rapid triage — the emergency ward never sleeps.",
    descNp:
      "ट्रामा प्रतिक्रिया, एम्बुलेन्स सहायता र द्रुत ट्राइज — आपतकालीन वार्ड कहिल्यै सुत्दैन।",
    img: hospital1,
  },
  {
    num: "02",
    en: "Surgical",
    np: "सर्जिकल",
    tagEn: "OT",
    tagNp: "ओटी",
    descEn:
      "Modern operating theatres with experienced surgical teams for major and minor procedures.",
    descNp:
      "प्रमुख र सामान्य सर्जरीका लागि अनुभवी टिमसहित आधुनिक अपरेटिङ थिएटर।",
    img: hospital2,
  },
  {
    num: "03",
    en: "ICU / HDU",
    np: "आइसीयु / एचडीयु",
    tagEn: "Critical",
    tagNp: "गम्भीर",
    descEn:
      "Intensive and high-dependency care with continuous monitoring for critical patients.",
    descNp: "गम्भीर बिरामीका लागि निरन्तर अनुगमनसहित सघन उपचार कक्ष।",
    img: hospital1,
  },
  {
    num: "04",
    en: "Pharmacy",
    np: "फार्मेसी",
    tagEn: "24 hours",
    tagNp: "२४ घण्टा",
    descEn:
      "In-house dispensary with quality medicines procured through transparent government tender.",
    descNp:
      "पारदर्शी सरकारी बोलपत्रबाट खरिद गुणस्तरीय औषधि उपलब्ध गराउने भित्री फार्मेसी।",
    img: bloodBank,
  },
  {
    num: "05",
    en: "Medical",
    np: "मेडिकल",
    tagEn: "OPD",
    tagNp: "ओपीडी",
    descEn:
      "General medicine outpatient care with senior physicians for adult patients.",
    descNp:
      "वयस्क बिरामीका लागि वरिष्ठ चिकित्सकहरूसहित सामान्य मेडिसिन ओपीडी।",
    img: hospital2,
  },
  {
    num: "06",
    en: "Pediatric",
    np: "पेडियाट्रिक",
    tagEn: "Child care",
    tagNp: "बाल उपचार",
    descEn: "Gentle, child-focused treatment from infancy through adolescence.",
    descNp: "शिशुकालदेखि किशोरावस्थासम्म कोमल र बाल-केन्द्रित उपचार।",
    img: hospital2,
  },
];

export interface Doctor {
  monoLines: [string, string];
  name: string;
  roleEn: string;
  roleNp: string;
  tel?: string;
}

export const doctors: Doctor[] = [
  {
    monoLines: ["डा. चन्द्र", "भाल झा"],
    name: "Dr. Chandra Bhal Jha",
    roleEn: "Chief Medical Superintendent",
    roleNp: "प्रमुख मेडिकल सुपरिटेन्डेन्ट",
  },
  {
    monoLines: ["मञ्जु", "यादव"],
    name: "Manju Yadav",
    roleEn: "Matron",
    roleNp: "मेट्रन",
    tel: "9852081034",
  },
  {
    monoLines: ["गजेन्द्र", "यादव"],
    name: "Gajendra Prasad Yadav",
    roleEn: "Information Officer",
    roleNp: "सूचना अधिकारी",
    tel: "9842139969",
  },
];

export interface Notice {
  en: string;
  np: string;
  date?: string;
  href: string;
  pdf?: boolean;
}

const GIW_BASE = "https://giwmscdnone.gov.np/media/pdf_upload/";

export const notices: Notice[] = [
  {
    en: "Hard Copy Tender Invitation Notice",
    np: "हार्ड कापी बोलपत्र आह्वान गरिएको सूचना",
    date: "असोज १३, २०८३",
    href: "#notices",
  },
  {
    en: "Hard Copy Tender Invitation Notice",
    np: "हार्ड कापी बोलपत्र आह्वान गरिएको सूचना",
    date: "असोज ८, २०८३",
    href: "#notices",
  },
  {
    en: "Notice Inviting Bid Again Through Hard Copy",
    np: "बोलपत्र पुनः हार्ड कापी मार्फत आह्वान गरिएको सूचना",
    date: "भदौ १८, २०८३",
    href: "#notices",
  },
  {
    en: "Notice of Cancellation of Purchase Agreement",
    np: "खरिद सम्झौता रद्द गरिएको सूचना",
    date: "असार ३०, २०८३",
    href: "#notices",
  },
  {
    en: "Notice of Cancellation of VOL Letter",
    np: "वोल पत्र रद्द गरिएको सूचना",
    date: "असार २३, २०८३",
    href: "#notices",
  },
  {
    en: "Accepted Tender for Purchase & Supply of Medicine",
    np: "औषधि खरिद तथा आपुर्तिको बोलपत्र स्वीकृत",
    date: "जेठ २७, २०८३",
    href: "#notices",
  },
  {
    en: "Invitation for Bids — Materials (Haemodialysis)",
    np: "बोलपत्र आह्वान — सामग्री (हेमोडायलिसिस)",
    href: GIW_BASE + "The%20Procurement%20of%20Materials%20Used%20in%20Regular%20Haemodialysis_fyjzeix.pdf",
    pdf: true,
  },
  {
    en: "Invitation for Bids — Liquid Oxygen",
    np: "बोलपत्र आह्वान — तरल अक्सिजन",
    href: GIW_BASE + "The%20Procurement%20of%20liquid%20Oxygen_ylywqip.pdf",
    pdf: true,
  },
  {
    en: "Invitation for Bids — CT-Scan CRDR Film",
    np: "बोलपत्र आह्वान — सीटी-स्क्यान CRDR फिल्म",
    href: GIW_BASE + "The%20Procurement%20of%20CT%20Scan%20CRDR%20Film%20%28For%20Machine%29_edvhrex.pdf",
    pdf: true,
  },
];

export const facts: { dtEn: string; dtNp: string; ddEn: string; ddNp: string }[] = [
  { dtEn: "Institution", dtNp: "संस्था", ddEn: "Government of Nepal", ddNp: "नेपाल सरकार" },
  { dtEn: "Ministry", dtNp: "मन्त्रालय", ddEn: "Health & Population", ddNp: "स्वास्थ्य तथा जनसंख्या" },
  { dtEn: "Location", dtNp: "स्थान", ddEn: "Rangeli Road, Biratnagar", ddNp: "रंगेली रोड, विराटनगर" },
  { dtEn: "Emergency", dtNp: "आपतकालीन", ddEn: "Open 24 hours", ddNp: "२४ घण्टा खुला" },
];

export const hours: { dtEn: string; dtNp: string; ddEn: string; ddNp: string }[] = [
  {
    dtEn: "Winter — Mangsir 16 to Magh 15",
    dtNp: "जाडो — मंसिर १६ देखि माघ १५",
    ddEn: "9:00 AM – 5:00 PM",
    ddNp: "बिहान ९ – साँझ ५",
  },
  {
    dtEn: "Summer — Magh 16 to Mangsir 15",
    dtNp: "गर्मी — माघ १६ देखि मंसिर १५",
    ddEn: "From 9:00 AM",
    ddNp: "बिहान ९ बजे देखि",
  },
  { dtEn: "Emergency", dtNp: "आपतकालीन", ddEn: "Always open", ddNp: "सधैं खुला" },
];

export const gallery: { img: string; capEn: string; capNp: string; alt: string }[] = [
  {
    img: hospital1,
    capEn: "Koshi Hospital — main building",
    capNp: "कोशी अस्पताल — मुख्य भवन",
    alt: "Koshi Hospital building",
  },
  {
    img: bloodBank,
    capEn: "Blood Bank",
    capNp: "ब्लड बैंक",
    alt: "Blood Bank at Koshi Hospital",
  },
  {
    img: hospital2,
    capEn: "Campus view",
    capNp: "परिसर दृश्य",
    alt: "Koshi Hospital campus view",
  },
  {
    img: hospital1,
    capEn: "Hospital grounds",
    capNp: "अस्पताल परिसर",
    alt: "Hospital grounds",
  },
];

export const importantLinks: { en: string; np: string; href: string }[] = [
  { en: "Ministry of Health & Population", np: "स्वास्थ्य तथा जनसंख्या मन्त्रालय", href: "https://mohp.gov.np/" },
  { en: "Department of Health Services", np: "स्वास्थ्य सेवा विभाग", href: "https://dohs.gov.np/" },
  { en: "Public Service Commission", np: "लोक सेवा आयोग", href: "https://psc.gov.np/" },
  { en: "Medical Education Commission", np: "चिकित्सा शिक्षा आयोग", href: "https://mec.gov.np/" },
  { en: "PM & Council of Ministers", np: "प्रधानमन्त्री तथा मन्त्रिपरिषद्को कार्यालय", href: "https://opmcm.gov.np/" },
  {
    en: "National Natural Resources & Finance Commission",
    np: "राष्ट्रिय प्राकृतिक स्रोत तथा वित्त आयोग",
    href: "https://nnrfc.gov.np/",
  },
];

export const departments: { value: string; en: string; np: string }[] = [
  { value: "emergency", en: "Emergency (24h)", np: "आपतकालीन (२४ घण्टा)" },
  { value: "surgical", en: "Surgical", np: "सर्जिकल" },
  { value: "icu", en: "ICU / HDU", np: "आइसीयु / एचडीयु" },
  { value: "medical", en: "Medical", np: "मेडिकल" },
  { value: "pediatric", en: "Pediatric", np: "पेडियाट्रिक" },
  { value: "pharmacy", en: "Pharmacy", np: "फार्मेसी" },
];
