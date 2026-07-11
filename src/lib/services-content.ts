export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  overview: string[];
  whenToConsultTitle: string;
  whenToConsult: string[];
  whatWeOfferTitle: string;
  whatWeOffer: { title: string; description: string }[];
  recoveryNote?: string;
  faqs: ServiceFAQ[];
};

export const SERVICES_CONTENT: ServiceContent[] = [
  {
    slug: "joint-replacement-surgery",
    title: "Joint Replacement Surgery",
    metaTitle: "Knee & Hip Replacement Surgery in Jabalpur",
    metaDescription:
      "Total knee and hip replacement surgery in Jabalpur by Dr. Sushil Kumar Patle, Consultant Orthopaedic Surgeon at Patle Health Care Center, Adhartal. Evaluation, surgery planning, and in-house physiotherapy under one roof.",
    heroTagline:
      "Total knee and hip replacement, planned around your anatomy, lifestyle, and recovery goals.",
    overview: [
      "When a knee or hip joint is severely damaged by arthritis, injury, or age-related wear, everyday movements — walking, climbing stairs, even standing up from a chair — can become painful. Joint replacement surgery replaces the damaged joint surfaces with carefully sized implants, aiming to relieve pain and restore movement.",
      "At Patle Health Care Center, Dr. Sushil Kumar Patle evaluates every patient individually. Surgery is never the first suggestion — many patients are first managed with medication review, physiotherapy, and lifestyle changes. When replacement is the right option, the procedure is planned in detail, and rehabilitation begins at our in-house physiotherapy centre.",
    ],
    whenToConsultTitle: "When to Consider a Joint Replacement Consultation",
    whenToConsult: [
      "Knee or hip pain that persists despite medicines and physiotherapy",
      "Pain that disturbs your sleep or limits walking distance",
      "Stiffness that makes stairs, sitting cross-legged, or squatting difficult",
      "Visible deformity or progressive bowing of the leg",
      "X-ray findings of advanced arthritis with day-to-day limitation",
    ],
    whatWeOfferTitle: "Our Joint Replacement Care Includes",
    whatWeOffer: [
      {
        title: "Detailed Pre-Surgical Evaluation",
        description:
          "Clinical examination, in-house digital X-ray, and a frank discussion about whether surgery is truly needed — and what results you can realistically expect.",
      },
      {
        title: "Total Knee Replacement",
        description:
          "Replacement of damaged knee joint surfaces with implants sized and aligned to your anatomy, addressing pain from advanced osteoarthritis and inflammatory arthritis.",
      },
      {
        title: "Total Hip Replacement",
        description:
          "Replacement of the hip's ball-and-socket joint for advanced arthritis, avascular necrosis, and select fracture cases in suitable patients.",
      },
      {
        title: "Structured Rehabilitation",
        description:
          "A staged physiotherapy program at our dedicated in-house centre — from first steps after surgery to regaining independent daily activity.",
      },
    ],
    recoveryNote:
      "Most patients begin walking with support within a day or two of surgery, progressing through a guided physiotherapy program over the following weeks. Recovery timelines vary from patient to patient depending on age, general health, and the joint involved — Dr. Patle discusses a realistic, personalised plan before surgery.",
    faqs: [
      {
        question: "Is joint replacement the only option for knee or hip arthritis?",
        answer:
          "No. Many patients with early or moderate arthritis are managed without surgery — through physiotherapy, activity modification, and medication prescribed after evaluation. Replacement is considered when pain and limitation persist despite these measures and imaging shows advanced joint damage.",
      },
      {
        question: "How long do joint implants last?",
        answer:
          "Modern implants generally function well for many years, though longevity varies with age, activity level, bone quality, and adherence to follow-up care. Dr. Patle discusses implant options and what is reasonable to expect in your specific case during consultation.",
      },
      {
        question: "How soon can I walk after knee or hip replacement?",
        answer:
          "Most patients stand and take assisted steps within 24–48 hours of surgery as part of a supervised protocol. Independent walking typically returns progressively over the following weeks with physiotherapy.",
      },
      {
        question: "Do I need to travel elsewhere for physiotherapy after surgery?",
        answer:
          "No. Patle Health Care Center has a dedicated in-house physiotherapy and rehabilitation centre, so your post-operative program continues at the same clinic where you consult.",
      },
    ],
  },
  {
    slug: "fracture-trauma-care",
    title: "Fracture & Trauma Care",
    metaTitle: "Fracture & Trauma Treatment in Jabalpur",
    metaDescription:
      "Fracture and trauma care in Jabalpur by Dr. Sushil Kumar Patle at Patle Health Care Center, Adhartal — immediate assessment with in-house digital X-ray, plaster and surgical fixation, and guided recovery.",
    heroTagline:
      "From immediate assessment to full recovery — complete fracture care with in-house digital X-ray.",
    overview: [
      "A fracture needs two things quickly: an accurate diagnosis and the right treatment decision. At Patle Health Care Center, both happen under one roof — in-house digital X-ray means your injury is imaged and assessed in the same visit, without running between centres.",
      "Dr. Sushil Kumar Patle manages the full range of bone and joint injuries — from simple fractures treated with casting to complex injuries requiring surgical fixation. Every treatment plan considers the patient's age, bone quality, occupation, and activity needs, followed by structured rehabilitation to restore strength and function.",
    ],
    whenToConsultTitle: "Seek Prompt Orthopaedic Care If You Have",
    whenToConsult: [
      "Severe pain, swelling, or deformity after a fall or accident",
      "Inability to bear weight or move a limb normally",
      "A wound over a suspected fracture site",
      "Persistent pain weeks after an injury that 'should have healed'",
      "An old fracture that seems to have healed in a wrong position",
    ],
    whatWeOfferTitle: "Our Fracture & Trauma Services",
    whatWeOffer: [
      {
        title: "Immediate Assessment & Digital X-Ray",
        description:
          "Same-visit imaging and diagnosis at the clinic, so treatment decisions are made without delay.",
      },
      {
        title: "Conservative Fracture Management",
        description:
          "Closed reduction, casting, and splinting for fractures that can heal well without surgery — with scheduled X-ray follow-up to confirm healing.",
      },
      {
        title: "Surgical Fracture Fixation",
        description:
          "Operative stabilisation using plates, screws, nails, or wires for displaced and unstable fractures, performed with modern fixation techniques.",
      },
      {
        title: "Post-Fracture Rehabilitation",
        description:
          "Guided physiotherapy at our in-house centre to restore joint movement, muscle strength, and confidence after immobilisation.",
      },
    ],
    recoveryNote:
      "Bone healing typically takes 6–12 weeks depending on the bone involved, the type of fracture, and individual factors like age and bone health. Regular follow-up X-rays at the clinic track healing progress, and physiotherapy begins at the right stage to prevent stiffness.",
    faqs: [
      {
        question: "Do all fractures need surgery?",
        answer:
          "No. Many fractures heal well with casting or splinting alone. Surgery is recommended when a fracture is displaced, unstable, involves a joint surface, or would heal poorly without fixation. The decision is made after clinical examination and X-ray assessment.",
      },
      {
        question: "Can I get an X-ray at the clinic itself?",
        answer:
          "Yes. Patle Health Care Center has an in-house digital X-ray facility, so imaging, diagnosis, and the treatment plan happen in the same visit.",
      },
      {
        question: "How long does a fracture take to heal?",
        answer:
          "Most fractures heal in 6–12 weeks, but the timeline varies with the bone involved, fracture pattern, age, and overall health. Follow-up X-rays confirm that healing is progressing as expected.",
      },
      {
        question: "What should I do immediately after an injury?",
        answer:
          "Avoid putting weight on the injured limb, apply ice wrapped in cloth, keep the limb elevated and supported, and seek orthopaedic assessment promptly. If there is a wound, severe deformity, or the patient cannot be moved safely, go to the nearest emergency facility first.",
      },
    ],
  },
  {
    slug: "rheumatology-arthritis",
    title: "Rheumatology & Arthritis Care",
    metaTitle: "Arthritis & Rheumatology Treatment in Jabalpur",
    metaDescription:
      "Fellowship-trained rheumatology and arthritis care in Jabalpur. Dr. Sushil Kumar Patle at Patle Health Care Center, Adhartal treats rheumatoid arthritis, osteoarthritis, and joint pain with structured, evidence-based plans.",
    heroTagline:
      "Fellowship-trained care for rheumatoid arthritis, osteoarthritis, and complex joint conditions.",
    overview: [
      "Arthritis is not one disease — it is a family of conditions with very different causes and treatments. Osteoarthritis from joint wear, rheumatoid arthritis from immune-system activity, gout from crystal deposits — each needs a different approach, and treating the wrong one wastes precious time.",
      "Dr. Sushil Kumar Patle holds a Fellowship in Rheumatology in addition to his orthopaedic surgical training — a combination that allows both accurate diagnosis of the type of arthritis and access to the full range of treatment, from medical management to joint replacement when a joint is beyond preservation.",
    ],
    whenToConsultTitle: "Consult for Arthritis Evaluation If You Notice",
    whenToConsult: [
      "Joint pain or swelling lasting more than a few weeks",
      "Morning stiffness that takes more than 30 minutes to ease",
      "Pain or swelling in multiple joints, especially both hands or feet",
      "Joint pain with fatigue, low-grade fever, or unexplained weight loss",
      "Repeated sudden, severe attacks of pain in the big toe or other joints",
    ],
    whatWeOfferTitle: "Our Rheumatology & Arthritis Services",
    whatWeOffer: [
      {
        title: "Accurate Diagnosis",
        description:
          "Clinical evaluation supported by in-house X-ray and appropriate laboratory testing to identify which type of arthritis is causing your symptoms.",
      },
      {
        title: "Structured Medical Management",
        description:
          "Evidence-based, individually prescribed treatment plans with scheduled monitoring and dose review — aimed at controlling disease activity and protecting joints.",
      },
      {
        title: "Joint Care & Injection Procedures",
        description:
          "Selected joint procedures where clinically appropriate, performed after discussion of benefits and alternatives.",
      },
      {
        title: "Continuity Into Surgical Care",
        description:
          "If a joint is damaged beyond preservation, the same doctor who manages your arthritis can plan and perform joint replacement — no fragmented care.",
      },
    ],
    recoveryNote:
      "Arthritis care is a partnership over time, not a single visit. Most inflammatory arthritis patients need periodic reviews to fine-tune treatment and monitor for side effects — our OPD structure makes regular follow-up simple.",
    faqs: [
      {
        question: "What is the difference between osteoarthritis and rheumatoid arthritis?",
        answer:
          "Osteoarthritis is age- and wear-related damage to joint cartilage, usually affecting knees, hips, and spine. Rheumatoid arthritis is an autoimmune condition where the body's immune system attacks joint linings, often affecting hands and feet on both sides. They require very different treatments, which is why accurate diagnosis matters.",
      },
      {
        question: "Why see a fellowship-trained doctor for arthritis?",
        answer:
          "Fellowship training in rheumatology adds focused expertise in diagnosing and medically managing inflammatory joint diseases — beyond standard orthopaedic training. Combined with surgical capability, it means your care doesn't need to be split between multiple specialists.",
      },
      {
        question: "Can arthritis be cured?",
        answer:
          "Most forms of arthritis are managed rather than cured. With accurate diagnosis and a structured treatment plan, the majority of patients achieve good control of pain and disease activity, protecting their joints and quality of life. Early evaluation improves the outlook considerably.",
      },
      {
        question: "Do I need to stop all activity if I have arthritis?",
        answer:
          "Usually the opposite — appropriate, guided activity protects joints and maintains muscle strength. Our in-house physiotherapy centre designs exercise programs suited to your condition and stage.",
      },
    ],
  },
  {
    slug: "sports-medicine",
    title: "Sports Medicine",
    metaTitle: "Sports Injury & ACL Treatment in Jabalpur",
    metaDescription:
      "Sports injury care in Jabalpur — ACL tears, ligament injuries, and meniscus damage treated by Dr. Sushil Kumar Patle at Patle Health Care Center, Adhartal, with structured rehabilitation for return to sport.",
    heroTagline:
      "ACL, ligament, and meniscus injury care — helping active people return to what they love.",
    overview: [
      "Sports injuries don't only happen to professional athletes. A twisted knee on the badminton court, a ligament tear during football, a shoulder injury at the gym — these are everyday injuries for active people in Jabalpur, and they deserve treatment that aims for full return to activity, not just pain relief.",
      "Dr. Sushil Kumar Patle evaluates sports injuries with a focus on precise diagnosis: which structure is injured, how severely, and what treatment gives you the best chance of returning to your sport or activity. Treatment ranges from structured rehabilitation for partial injuries to surgical reconstruction for complete ligament tears.",
    ],
    whenToConsultTitle: "Common Injuries We Evaluate and Treat",
    whenToConsult: [
      "A 'pop' felt in the knee during twisting, followed by swelling — a classic ACL injury pattern",
      "Knee locking, catching, or giving way — often meniscus-related",
      "Ligament sprains of the knee and ankle that keep recurring",
      "Shoulder pain or instability after a fall or overhead activity",
      "Muscle and tendon injuries that fail to settle with rest",
    ],
    whatWeOfferTitle: "Our Sports Medicine Services",
    whatWeOffer: [
      {
        title: "Precise Injury Assessment",
        description:
          "Focused clinical testing supported by imaging to identify exactly which ligament, meniscus, or tendon is injured and how severely.",
      },
      {
        title: "ACL & Ligament Injury Management",
        description:
          "Treatment matched to your injury and activity goals — structured rehabilitation for suitable partial injuries, surgical reconstruction for complete tears in active patients.",
      },
      {
        title: "Meniscus Injury Care",
        description:
          "Management of meniscus tears based on tear pattern, symptoms, and age — preserving healthy meniscus tissue wherever possible.",
      },
      {
        title: "Return-to-Sport Rehabilitation",
        description:
          "Progressive, criteria-based physiotherapy at our in-house centre — rebuilding strength, balance, and confidence before you return to the field.",
      },
    ],
    recoveryNote:
      "Return-to-sport timelines depend on the injury and treatment — recurring sprains may need weeks of focused rehabilitation, while ACL reconstruction typically involves a progressive program over several months. The goal is returning safely, with the strength and control to avoid re-injury.",
    faqs: [
      {
        question: "Does every ACL tear need surgery?",
        answer:
          "No. The decision depends on the completeness of the tear, your age, activity level, and whether the knee remains unstable. Recreationally active patients with partial injuries may do well with structured rehabilitation; complete tears in patients who play pivoting sports usually benefit from reconstruction. Dr. Patle discusses both paths honestly.",
      },
      {
        question: "How do I know if my knee injury is serious?",
        answer:
          "Warning signs include a popping sensation at injury, rapid swelling within hours, inability to bear weight, locking, or a feeling that the knee will give way. Any of these deserves orthopaedic evaluation rather than waiting it out.",
      },
      {
        question: "How long after an ACL reconstruction can I play sports again?",
        answer:
          "Most athletes progress through a staged rehabilitation program lasting several months, with return to pivoting sports decided by strength and stability criteria rather than the calendar alone. Rushing back early is the most common cause of re-injury.",
      },
      {
        question: "Can older or non-athletic patients benefit from sports medicine care?",
        answer:
          "Absolutely. The same structured approach — precise diagnosis, targeted rehabilitation, surgery only when needed — applies to anyone with a ligament, meniscus, or tendon injury, whether it happened on a sports field or a staircase.",
      },
    ],
  },
  {
    slug: "digital-x-ray",
    title: "Digital X-Ray",
    metaTitle: "Digital X-Ray Facility in Adhartal, Jabalpur",
    metaDescription:
      "In-house digital X-ray at Patle Health Care Center, Adhartal, Jabalpur — same-visit imaging and orthopaedic consultation with Dr. Sushil Kumar Patle. No referrals or extra trips needed.",
    heroTagline:
      "Same-visit imaging and diagnosis — no referrals, no second trips, no waiting for reports.",
    overview: [
      "For most bone and joint problems, an X-ray is the first and most important investigation. At many clinics, that means a referral slip, a trip to a separate imaging centre, and a return visit with the films — often stretching a simple diagnosis across several days.",
      "Patle Health Care Center eliminates that entirely. Our in-house digital X-ray facility means your consultation, imaging, and diagnosis happen in a single visit. Dr. Patle reviews your images immediately, explains the findings, and starts your treatment plan the same day — particularly valuable for fractures and injuries where time matters.",
    ],
    whenToConsultTitle: "Digital X-Ray Supports Diagnosis Of",
    whenToConsult: [
      "Fractures and suspected bone injuries after falls or accidents",
      "Arthritis assessment — joint space, alignment, and bone changes",
      "Follow-up imaging to confirm fracture healing",
      "Joint pain, deformity, and alignment evaluation",
      "Pre-operative planning for joint replacement surgery",
    ],
    whatWeOfferTitle: "Why In-House Digital X-Ray Matters",
    whatWeOffer: [
      {
        title: "Single-Visit Diagnosis",
        description:
          "Consultation, imaging, and treatment plan in one appointment — especially important for painful injuries where travel is difficult.",
      },
      {
        title: "Digital Image Quality",
        description:
          "Digital radiography produces clear images available immediately, with the ability to enhance and magnify views for accurate assessment.",
      },
      {
        title: "Reviewed by Your Treating Doctor",
        description:
          "Images are reviewed directly by Dr. Patle in the context of your examination — not read remotely by someone who hasn't examined you.",
      },
      {
        title: "Easy Follow-Up Imaging",
        description:
          "Healing checks for fractures and post-surgical reviews happen at the same clinic visit, keeping your care on track without extra trips.",
      },
    ],
    faqs: [
      {
        question: "Do I need a prior appointment for an X-ray?",
        answer:
          "X-rays at the clinic are done as part of your orthopaedic consultation during OPD hours (12 Noon – 4 PM and 7 – 9 PM, Monday to Saturday). Walk-in patients are imaged as part of their evaluation when clinically indicated.",
      },
      {
        question: "Is a digital X-ray safe?",
        answer:
          "X-ray examinations use low radiation doses, and digital systems are designed to keep exposure to the minimum needed for a diagnostic image. X-rays are only advised when clinically indicated. Inform the doctor if you are or may be pregnant.",
      },
      {
        question: "Will I get my X-ray report the same day?",
        answer:
          "Yes. Digital images are available immediately and are reviewed by Dr. Patle during your consultation itself, so you leave with a diagnosis and plan — not a 'collect report tomorrow' slip.",
      },
      {
        question: "Can I bring X-rays taken elsewhere?",
        answer:
          "Certainly. Previous films and reports are helpful for comparison, especially for healing fractures and progressing arthritis. Bring any prior imaging to your consultation.",
      },
    ],
  },
  {
    slug: "physiotherapy-rehabilitation",
    title: "Physiotherapy & Rehabilitation",
    metaTitle: "Physiotherapy Centre in Adhartal, Jabalpur",
    metaDescription:
      "Dedicated physiotherapy and rehabilitation centre at Patle Health Care Center, Adhartal, Jabalpur — post-surgical recovery, fracture rehab, arthritis exercise programs, and sports injury rehabilitation.",
    heroTagline:
      "A dedicated in-house centre for post-surgical recovery, injury rehab, and long-term joint health.",
    overview: [
      "Surgery and medicines are only half of orthopaedic care. Whether it's regaining knee movement after a replacement, rebuilding strength after a fracture heals, or keeping arthritic joints mobile — structured physiotherapy is what converts treatment into real-world recovery.",
      "Patle Health Care Center houses a dedicated physiotherapy and rehabilitation centre within the clinic. Programs are designed in coordination with Dr. Patle's treatment plan, so your rehabilitation matches your surgery, injury stage, and personal goals — with progress reviewed by the same team that treats you.",
    ],
    whenToConsultTitle: "Rehabilitation Programs We Provide",
    whenToConsult: [
      "Post-operative rehabilitation after joint replacement and fracture surgery",
      "Stiffness and weakness after cast removal",
      "Exercise programs for knee, hip, and spine arthritis",
      "Sports injury rehabilitation and return-to-activity training",
      "Posture, balance, and mobility programs for older adults",
    ],
    whatWeOfferTitle: "What Makes Our Rehabilitation Different",
    whatWeOffer: [
      {
        title: "Doctor-Coordinated Programs",
        description:
          "Your physiotherapy plan is designed around your diagnosis and surgical details, with direct communication between the physiotherapy team and Dr. Patle.",
      },
      {
        title: "Staged, Goal-Based Progression",
        description:
          "Rehabilitation advances through defined stages — pain control, range of movement, strength, function — rather than a one-size-fits-all routine.",
      },
      {
        title: "Same-Roof Convenience",
        description:
          "Consultation, X-ray review, and physiotherapy at one location — progress issues are addressed in real time, not lost between separate providers.",
      },
      {
        title: "Home Program Training",
        description:
          "Every patient learns a safe home exercise routine, because the sessions between clinic visits are where much of the recovery happens.",
      },
    ],
    recoveryNote:
      "Consistency matters more than intensity in rehabilitation. Short, correct, regular sessions — at the centre and at home — deliver better outcomes than occasional intensive effort. Our team keeps your program realistic for your routine.",
    faqs: [
      {
        question: "Do I need a doctor's referral for physiotherapy?",
        answer:
          "Patients under Dr. Patle's care move seamlessly into rehabilitation as part of their treatment plan. New patients are first evaluated in the OPD so the physiotherapy program addresses the right diagnosis.",
      },
      {
        question: "How many physiotherapy sessions will I need?",
        answer:
          "It depends on the condition — post-fracture stiffness may need a few weeks, while joint replacement rehabilitation runs in stages over a longer period. Your program and expected duration are explained at the start and adjusted based on progress.",
      },
      {
        question: "Is physiotherapy painful?",
        answer:
          "Some stretching discomfort is normal, particularly when regaining movement after surgery or immobilisation, but therapy should not cause lasting pain. Programs are progressed at a pace your tissue healing allows.",
      },
      {
        question: "Can physiotherapy help me avoid surgery?",
        answer:
          "In many conditions — early arthritis, partial ligament injuries, back pain — structured physiotherapy is the primary treatment and surgery is never needed. Where surgery is eventually required, better pre-operative strength usually means smoother recovery.",
      },
    ],
  },
];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}
