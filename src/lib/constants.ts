export const DOCTOR = {
  name: "Dr. Sushil Kumar Patle",
  degree: "M.B.B.S., D.Ortho, M.Ch. Ortho (USAIM)",
  qualifications: [
    "M.B.B.S.",
    "D.Ortho",
    "M.Ch. Ortho (USAIM)",
    "Fellowship in Rheumatology",
  ],
  fellowship: "Fellowship in Rheumatology",
  title: "Consultant Orthopaedic Surgeon",
  tagline: "Expert Bone & Joint Care",
  photo: "/images/doctor.png",
  bio: "Dr. Sushil Kumar Patle is a Consultant Orthopaedic Surgeon at Patle Health Care Center, Adhartal, Jabalpur. Trained with an M.B.B.S., D.Ortho, and M.Ch. Ortho (USAIM), he also holds a Fellowship in Rheumatology — an uncommon combination that lets him treat both the injuries that need a surgeon and the arthritis that needs a physician. The clinic runs its own digital X-ray and physiotherapy centre, so most patients are diagnosed, treated, and rehabilitated at one address.",
  clinicName: "Patle Health Care Center",
  clinicAddress: "Main Road, Adhartal, Jabalpur, M.P. 482004",
  landline: "0761-4018137",
  landlineRaw: "07614018137",
  phone: "+91 93039 44402",
  phoneRaw: "+919303944402",
  whatsappNumber: "919303944402",
  registration: "MP Medical Council — Reg. No. 4172",
  registrationShort: "MPMC Reg. No. 4172",
  hprId: "71-4611-1664-8583",
  opd: {
    afternoon: "12:00 Noon – 4:00 PM",
    evening: "7:00 PM – 9:00 PM",
    days: "Monday – Saturday",
    closed: "Sunday Closed",
  },
  facilities: ["Digital X-Ray", "Physiotherapy Centre"],
  rating: 4.8,
  reviewCount: 9,
  coordinates: {
    lat: 23.198766,
    lng: 79.9466939,
  },
};

export const WEEK_DAYS = [
  { label: "Sun", open: false },
  { label: "Mon", open: true },
  { label: "Tue", open: true },
  { label: "Wed", open: true },
  { label: "Thu", open: true },
  { label: "Fri", open: true },
  { label: "Sat", open: true },
];

export const STATS = [
  { label: "Google Rating", value: 4.8, suffix: "/5", decimals: 1 },
  { label: "OPD Days a Week", value: 6, suffix: "" },
  { label: "Specialised Services", value: 5, suffix: "" },
  { label: "In-house Facilities", value: 2, suffix: "" },
];

export type Service = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    slug: "fracture-trauma-care",
    title: "Fracture & Trauma Care",
    tag: "Emergency & Elective",
    description:
      "Broken bones and injuries diagnosed and treated in one place — X-ray, plaster, fixation, and follow-up, without running between centres.",
    icon: "Stethoscope",
  },
  {
    slug: "rheumatology-arthritis",
    title: "Rheumatology & Arthritis",
    tag: "Fellowship-Trained",
    description:
      "Joint pain, swelling, and morning stiffness properly diagnosed — rheumatoid arthritis, osteoarthritis, and gout each treated for what they actually are.",
    icon: "Shield",
  },
  {
    slug: "sports-medicine",
    title: "Sports Medicine",
    tag: "ACL / Ligament / Meniscus",
    description:
      "Knee and ligament injuries from sport or daily life — assessed precisely, treated honestly, and rehabilitated until you're back on your feet.",
    icon: "Zap",
  },
  {
    slug: "digital-x-ray",
    title: "Digital X-Ray",
    tag: "In-House Facility",
    description:
      "X-ray done during your consultation itself. You walk out with a diagnosis and a plan — not a referral slip and a second trip.",
    icon: "ScanLine",
  },
  {
    slug: "physiotherapy-rehabilitation",
    title: "Physiotherapy & Rehabilitation",
    tag: "Dedicated Centre",
    description:
      "A physiotherapy centre inside the clinic — recovery after fractures and injuries, guided by the same team that treats you.",
    icon: "HeartPulse",
  },
];

export type USP = {
  title: string;
  description: string;
  icon: string;
};

export const USPS: USP[] = [
  {
    title: "Qualified Expertise",
    description:
      "M.B.B.S., D.Ortho, and M.Ch. Ortho (USAIM) — registered with the MP Medical Council (Reg. No. 4172).",
    icon: "GraduationCap",
  },
  {
    title: "Fellowship in Rheumatology",
    description:
      "Advanced fellowship training in rheumatology enables specialised care for arthritis and complex joint conditions, beyond standard orthopaedic practice.",
    icon: "Award",
  },
  {
    title: "Complete Care Under One Roof",
    description:
      "Digital X-Ray and a dedicated Physiotherapy Centre at the clinic — diagnosis, treatment, and rehabilitation without running between facilities.",
    icon: "Building2",
  },
  {
    title: "Patient-First Approach",
    description:
      "Every treatment plan is explained clearly to patients and families, with a focus on informed decisions and realistic recovery timelines.",
    icon: "Users",
  },
];

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rakesh Sahu",
    text: "Very attentive and explained my fracture treatment in detail before proceeding. The clinic staff were courteous and the OPD wait time was reasonable.",
    rating: 5,
  },
  {
    name: "Meena Tiwari",
    text: "Consulted for persistent knee pain. Dr. Patle took time to explain the condition and the available options clearly. Felt heard throughout.",
    rating: 5,
  },
  {
    name: "Vikram Chourasia",
    text: "Good experience overall. The clinic is well organized and appointment timings are followed properly, which I appreciated.",
    rating: 4,
  },
  {
    name: "Anita Dubey",
    text: "Consulted regarding a sports injury. The explanation of the rehabilitation process was clear and easy to follow.",
    rating: 5,
  },
  {
    name: "Sanjay Verma",
    text: "Getting the X-ray done at the same clinic saved a lot of time. Professional and approachable throughout the consultation.",
    rating: 5,
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: "Testimonials", href: "/testimonials" },
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "";
