export const site = {
  name: "Terminal",
  full: "Terminal Car Wash RM",
  region: "RM",
  tagline: "Clean. Shine. Protect. Perfection.",
  phone: "07700 900142",
  phoneHref: "tel:+447700900142",
  email: "bookings@terminalcarwash.co.uk",
  hours: "Mon–Sat · 8am – 6pm",
  baseArea: "West London",
  base: "Hounslow, a few minutes from the Heathrow terminals",
  radius: "10 miles of Heathrow",
};

export type Service = {
  id: string;
  name: string;
  blurb: string;
  duration: string;
  from: number;
  features: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "express",
    name: "Express Exterior",
    blurb:
      "The fortnightly reset. A proper two-bucket hand wash, wheels and tyres cleaned and dressed, glass cleared, and a spray sealant so the rain beads off for weeks.",
    duration: "45–60 min",
    from: 45,
    features: ["Two-bucket hand wash", "Wheels, tyres & arches", "Streak-free glass", "Spray sealant top-coat"],
  },
  {
    id: "full",
    name: "The Full Detail",
    blurb:
      "Inside and out, top to bottom. A deep interior clean and steam, leather fed and conditioned, then a decontaminated and machine-polished exterior that looks lit from within.",
    duration: "3–4 hrs",
    from: 165,
    features: [
      "Everything in Express",
      "Interior deep-clean & steam",
      "Leather clean + condition",
      "Clay-bar decontamination",
      "One-step machine polish",
    ],
    featured: true,
  },
  {
    id: "ceramic",
    name: "Ceramic Protection",
    blurb:
      "Lock the gloss in. Multi-stage paint correction followed by a professional ceramic coating — years of hydrophobic, UV-stable protection against British weather and motorway grime.",
    duration: "1–2 days",
    from: 649,
    features: ["Paint correction (1–3 stage)", "9H ceramic coating", "Glass & wheel coating", "2–5 year guarantee"],
  },
];

export const steps = [
  {
    n: "01",
    title: "Book in under two minutes",
    body: "Tell us the car, your postcode and a window that suits you. Pick a slot online — no phone tag, no waiting in for a callback.",
  },
  {
    n: "02",
    title: "We arrive fully self-contained",
    body: "Our van carries its own water, power and professional kit. All we need is room to park beside the car — your drive, the kerb, or the office car park.",
  },
  {
    n: "03",
    title: "You get back a car that looks new",
    body: "Carry on with your day while we work. We message you the moment it's done and hand back a car that genuinely turns heads on the school run.",
  },
];

export const stats = [
  { value: "600+", label: "cars detailed" },
  { value: "4.9", label: "Google rating", suffix: "★" },
  { value: "10mi", label: "of Heathrow" },
  { value: "Fully", label: "insured & DBS-checked" },
];

export const testimonials = [
  {
    quote:
      "Booked the full detail on the Tuesday, van was on my drive in Richmond by Thursday morning. The interior came back better than the day I collected the car — and I've two kids and a dog.",
    name: "Marina D.",
    meta: "Audi Q5 · Richmond",
  },
  {
    quote:
      "I run six vans out of Feltham. Terminal keeps the whole fleet presentable on a standing weekly slot and I never have to chase it. One tidy invoice at the end of the month.",
    name: "Desmond R.",
    meta: "Fleet account · Feltham",
  },
  {
    quote:
      "The ceramic coating is the real deal. Motorway grime and rain just sheet straight off, and a bird-mess wipes away with a damp cloth. They did the lot on my driveway in Twickenham.",
    name: "Priya K.",
    meta: "Tesla Model 3 · Twickenham",
  },
];

export const coverage = [
  "Hounslow",
  "Richmond",
  "Twickenham",
  "Chiswick",
  "Ealing",
  "Feltham",
  "Staines",
  "Ashford",
  "Windsor",
  "Slough",
  "Uxbridge",
  "Kingston",
];

export const faqs = [
  {
    q: "What do you need from me on the day?",
    a: "Somewhere to park beside the car — roughly the length of a car and a half — and access to the vehicle. That's it. We're fully self-contained with our own water and power, so no need for an outdoor tap or socket.",
  },
  {
    q: "Do you work in the rain, or in flats without a driveway?",
    a: "Yes to both. We carry pop-up cover for British weather, and we'll happily work at the kerb, in a residents' car park, or an underground bay as long as there's room to open the doors.",
  },
  {
    q: "How far do you travel?",
    a: "We're based in Hounslow and cover everywhere within about 10 miles of Heathrow as standard — most of West London and the surrounding boroughs. A little further out for full details and ceramic work; just ask.",
  },
  {
    q: "Is there a membership?",
    a: "There is. Members get a recurring Express or Full Detail at a standing rate, priority booking, and free quick tidy-ups between visits. Business fleet accounts are billed monthly.",
  },
];
