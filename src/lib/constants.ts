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
    lat: 23.1959194,
    lng: 79.9431354,
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
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "fracture-trauma-care",
    title: "Fracture & Trauma Care",
    tag: "Surgery",
    description:
      "Broken bones and injuries diagnosed and treated in one place — X-ray, plaster, fixation, and follow-up, without running between centres.",
    icon: "Stethoscope",
    image: "/images/services/fracture.jpg",
  },
  {
    slug: "rheumatology-arthritis",
    title: "Rheumatology & Arthritis",
    tag: "Speciality",
    description:
      "Joint pain, swelling, and morning stiffness properly diagnosed — rheumatoid arthritis, osteoarthritis, and gout each treated for what they actually are.",
    icon: "Shield",
    image: "/images/services/rheumatology.jpg",
  },
  {
    slug: "sports-medicine",
    title: "Sports Medicine",
    tag: "Active Care",
    description:
      "Knee and ligament injuries from sport or daily life — assessed precisely, treated honestly, and rehabilitated until you're back on your feet.",
    icon: "Zap",
    image: "/images/services/sports.jpg",
  },
  {
    slug: "digital-x-ray",
    title: "Digital X-Ray",
    tag: "Diagnostics",
    description:
      "X-ray done during your consultation itself. You walk out with a diagnosis and a plan — not a referral slip and a second trip.",
    icon: "ScanLine",
    image: "/images/services/xray.jpg",
  },
  {
    slug: "physiotherapy-rehabilitation",
    title: "Physiotherapy & Rehabilitation",
    tag: "Recovery",
    description:
      "A physiotherapy centre inside the clinic — recovery after fractures and injuries, guided by the same team that treats you.",
    icon: "HeartPulse",
    image: "/images/services/physio.jpg",
  },
];

export type USP = {
  title: string;
  description: string;
  icon: string;
};

export const USPS: USP[] = [
  {
    title: "Qualified — and Verifiable",
    description:
      "MP Medical Council Reg. No. 4172 — check it on the council register. We'd encourage you to.",
    icon: "GraduationCap",
  },
  {
    title: "A Surgeon Who Also Treats Arthritis",
    description:
      "Fellowship-trained in rheumatology — so arthritis gets medicines and monitoring when that works better than surgery.",
    icon: "Award",
  },
  {
    title: "Everything at One Address",
    description:
      "Consultation, X-ray, plaster, physiotherapy — no being sent across town mid-treatment.",
    icon: "Building2",
  },
  {
    title: "Straight Answers",
    description:
      "If you don't need surgery, you'll be told exactly that. If you do, you'll understand why first.",
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

// Shared token the Apps Script checks before accepting a booking.
// Not a real secret (it ships in the JS bundle) — it exists to turn away
// drive-by spam bots that POST to any URL they find. Must match
// CONFIG.SHARED_TOKEN in docs/booking-backend/Code.gs.
export const BOOKING_TOKEN =
  process.env.NEXT_PUBLIC_BOOKING_TOKEN || "phc-adhartal-4172";
