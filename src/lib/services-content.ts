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
    slug: "fracture-trauma-care",
    title: "Fracture & Trauma Care",
    metaTitle: "Fracture Treatment in Jabalpur — Bone Injury & Trauma Care",
    metaDescription:
      "Broken bone? Get fracture treatment in Jabalpur at Patle Health Care Center, Adhartal. Dr. Sushil Kumar Patle — X-ray, diagnosis, plaster or surgery, and follow-up at one clinic. OPD Mon–Sat.",
    heroTagline:
      "X-ray, diagnosis, and treatment in the same visit — because a broken bone shouldn't mean three trips to three places.",
    overview: [
      "A fall from a two-wheeler on Narmada Road. A child who landed badly on the playground. An elderly parent who slipped in the bathroom. Most fractures we see at the clinic start as ordinary moments — and the first few hours after them are full of confusion. Is it broken or just sprained? Do we need a plaster? Where do we even get an X-ray at this hour?",
      "This is exactly why fracture care at Patle Health Care Center works the way it does. The X-ray machine is inside the clinic, not across town. Dr. Patle examines the injury, images it on the spot, shows you the film, and explains what he sees — in plain words, not radiology jargon. If it's a crack that will heal in plaster, you leave with the plaster on. If the bone is displaced and needs fixing, you leave knowing exactly what the operation involves, why it's needed, and what the alternative would mean.",
      "Over years of orthopaedic practice in Jabalpur, one lesson repeats itself: fractures treated correctly in the first week heal predictably; fractures neglected or treated casually become the stiff wrists, crooked forearms, and painful ankles we see months later. Getting it right early is most of the battle.",
    ],
    whenToConsultTitle: "Come In Promptly If You Notice",
    whenToConsult: [
      "Swelling and pain after a fall that doesn't ease within a few hours",
      "A limb that looks bent, shortened, or simply 'not right'",
      "Inability to put weight on a leg, or to grip and lift with an arm",
      "A snap or crack you heard or felt at the moment of injury",
      "Pain from an old injury that never fully settled — bones do sometimes heal in the wrong position, and this can often still be addressed",
      "Any injury in an elderly person after a fall, even a seemingly minor one — hip and wrist fractures in older adults are easy to miss and costly to ignore",
    ],
    whatWeOfferTitle: "How We Treat Fractures Here",
    whatWeOffer: [
      {
        title: "Same-Visit X-Ray & Diagnosis",
        description:
          "The digital X-ray is taken during your consultation and read by Dr. Patle with the injury in front of him — not reported remotely by someone who never examined you.",
      },
      {
        title: "Plaster & Non-Surgical Treatment",
        description:
          "Many fractures heal well in a properly applied cast. We reduce the bone if needed, apply the plaster, and schedule X-ray checks to confirm the bone is staying where it should.",
      },
      {
        title: "Surgery When It's Genuinely Needed",
        description:
          "Displaced and unstable fractures are fixed with plates, screws, nails, or wires. You'll always hear why surgery is being advised — and what happens if you choose to wait.",
      },
      {
        title: "Rehabilitation After the Bone Heals",
        description:
          "A healed bone with a stiff joint is only half a recovery. Once the fracture unites, our in-house physiotherapy centre works on the movement and strength the plaster took away.",
      },
    ],
    recoveryNote:
      "Most fractures take 6 to 12 weeks to unite — faster in children, slower in older adults and in bones with poor blood supply. What you do during those weeks matters: keeping follow-up appointments, not removing the plaster early, and starting physiotherapy at the right time all decide whether the X-ray at three months shows a success story. We schedule these checkpoints for you rather than leaving you to guess.",
    faqs: [
      {
        question: "How do I know if it's a fracture or just a sprain?",
        answer:
          "Honestly — you often can't tell from outside, and neither can we without an X-ray. Severe sprains can hurt more than small fractures. The reliable signs pointing toward a fracture are deformity, inability to bear weight, and bony tenderness at one specific spot. Since the X-ray happens during your consultation here, the question gets answered in minutes rather than days.",
      },
      {
        question: "Does every broken bone need an operation?",
        answer:
          "No — and a good orthopaedic surgeon operates on the fracture, not on the X-ray. Undisplaced and stable fractures usually heal in plaster. Surgery earns its place when the bone is displaced, the fracture involves a joint surface, or the pattern is one we know behaves badly in a cast. In OPD, you'll see your own X-ray and understand which category your injury falls in.",
      },
      {
        question: "My fracture was treated months ago but still hurts. Is that normal?",
        answer:
          "Some aching during the first months is common, but pain that persists, worsens, or comes with deformity deserves a fresh look. Possible causes include delayed healing, a bone that united in poor alignment, or joint stiffness from the immobilisation itself. Bring your old X-rays and reports — comparing them with a current film usually explains the story quickly.",
      },
      {
        question: "What should we do at home right after an injury, before reaching the clinic?",
        answer:
          "Keep the limb still — a folded newspaper or a piece of cardboard tied gently alongside works as a temporary splint. Apply ice wrapped in cloth, keep the limb raised, and avoid letting the person walk on a painful leg. Don't massage the area or pull on the limb to 'set' it. If there's a wound over the injury, heavy bleeding, or the person can't be moved safely, go straight to an emergency hospital first.",
      },
      {
        question: "Do you treat children's fractures?",
        answer:
          "Yes. Children's bones are growing and behave differently from adult bones — they bend, buckle, and heal fast, but injuries near growth plates need careful handling because they can affect how the bone grows. Children's fractures are a regular part of practice at the clinic.",
      },
    ],
  },
  {
    slug: "rheumatology-arthritis",
    title: "Rheumatology & Arthritis Care",
    metaTitle: "Arthritis Doctor in Jabalpur — Joint Pain & Rheumatology Clinic",
    metaDescription:
      "Joint pain, swelling, or morning stiffness? Consult Dr. Sushil Kumar Patle in Jabalpur — orthopaedic surgeon with Fellowship in Rheumatology. Diagnosis and treatment of rheumatoid arthritis, osteoarthritis & gout at Adhartal.",
    heroTagline:
      "Not all joint pain is the same disease. Getting the diagnosis right is the treatment.",
    overview: [
      "A forty-year-old woman whose fingers are swollen and stiff every morning. A sixty-five-year-old farmer whose knees grind when he climbs stairs. A young man who wakes at 3 a.m. with a big toe so painful he can't bear the bedsheet touching it. All three will tell you the same thing — \"mujhe arthritis hai\" — and all three have completely different diseases needing completely different treatment.",
      "That first patient likely has rheumatoid arthritis, an immune-system disease that will quietly damage her joints for years if she's only given painkillers. The farmer has osteoarthritis — mechanical wear that needs strengthening, weight management, and sensible activity far more than tablets. The young man has gout, which is controllable to the point of being a non-issue, but only if treated as gout. Give all three the same pain medicine and one improves, one stays the same, and one gets steadily worse.",
      "This is why Dr. Patle's Fellowship in Rheumatology matters to you as a patient. At Patle Health Care Center in Adhartal, joint pain is not waved off with a strip of painkillers. It's examined, imaged on the in-house X-ray when needed, investigated with the right blood tests, and named. Once the disease has a name, it has a plan — and most arthritis, treated early and correctly, allows a normal working life.",
    ],
    whenToConsultTitle: "Joint Symptoms That Deserve a Proper Diagnosis",
    whenToConsult: [
      "Morning stiffness in the hands or feet that takes more than half an hour to loosen",
      "Swelling in the same joints on both sides of the body — both wrists, both knees, knuckles of both hands",
      "Knee pain that's worse on stairs, after sitting cross-legged, or at the end of a working day",
      "Sudden, severe attacks of pain in the big toe, ankle, or knee that come and go",
      "Joint pain alongside tiredness, low-grade fever, skin rashes, or unexplained weight loss",
      "A family history of rheumatoid arthritis or other autoimmune disease with your own joints now hurting",
    ],
    whatWeOfferTitle: "What Arthritis Care at This Clinic Involves",
    whatWeOffer: [
      {
        title: "Naming the Disease First",
        description:
          "History, joint examination, in-house X-ray, and targeted blood work — arranged in one systematic pass, so treatment starts from a diagnosis rather than a guess.",
      },
      {
        title: "Treatment That Matches the Diagnosis",
        description:
          "Rheumatoid arthritis needs disease-controlling medication with monitoring. Osteoarthritis needs load management and muscle strengthening. Gout needs urate control. Each is a different plan, prescribed and reviewed personally.",
      },
      {
        title: "Regular Monitoring, Not One-Time Prescriptions",
        description:
          "Inflammatory arthritis medicines work well but must be watched — doses adjusted, blood tests repeated, side effects caught early. Follow-up is built into the plan, with OPD six days a week making it practical.",
      },
      {
        title: "Physiotherapy That Protects Joints",
        description:
          "Our in-house physiotherapy centre teaches joint-protection techniques and builds the muscle support that takes daily load off painful joints — often the difference between managing well and declining.",
      },
    ],
    recoveryNote:
      "Arthritis care is a relationship, not a transaction. The patients who do best are the ones whose treatment is reviewed and adjusted over months — medication fine-tuned, exercises progressed, flare-ups caught early. What we can honestly promise is a correct diagnosis, a treatment plan with reasons behind it, and a doctor who tracks your progress rather than restarting from zero each visit.",
    faqs: [
      {
        question: "How is rheumatoid arthritis different from ordinary joint wear?",
        answer:
          "Osteoarthritis is mechanical — cartilage wearing down with age and load, usually in knees, hips, and spine, worse with activity. Rheumatoid arthritis is your immune system attacking the joint lining — it prefers the small joints of hands and feet, strikes both sides symmetrically, and is worst in the morning. The distinction isn't academic: rheumatoid arthritis untreated causes permanent joint destruction, and its medicines are completely different from pain relief.",
      },
      {
        question: "Why should I see a doctor with rheumatology training instead of taking painkillers from the chemist?",
        answer:
          "Painkillers hide the pain while inflammatory arthritis continues damaging the joint underneath — patients often arrive years into the disease with deformities that could have been prevented. A rheumatology-trained doctor identifies which arthritis you have and treats the disease itself, not just its loudest symptom. Early diagnosis is genuinely the single biggest factor in long-term outcome.",
      },
      {
        question: "Which blood tests are needed for arthritis?",
        answer:
          "It depends on what the examination suggests — commonly ESR and CRP for inflammation, RA factor and anti-CCP when rheumatoid arthritis is suspected, and uric acid for gout. Tests are ordered to answer specific questions, not as a fixed panel, and Dr. Patle explains what each result means for your treatment.",
      },
      {
        question: "Is lifelong medicine unavoidable?",
        answer:
          "Not always, but honesty matters here: rheumatoid arthritis usually needs long-term medication to stay in remission, the way blood pressure or diabetes does. Doses are often reduced once the disease is quiet. Gout can frequently be controlled to the point where attacks simply stop. Osteoarthritis may need little or no regular medicine at all if strengthening and weight management go well.",
      },
      {
        question: "Can diet really affect my joint pain?",
        answer:
          "For gout, yes directly — alcohol, red meat, and certain foods provoke attacks in many patients. For other arthritis, diet's biggest role is body weight: every extra kilogram adds roughly four kilograms of load across the knee with each step. No specific food cures arthritis, and we'd encourage skepticism toward anyone who claims otherwise.",
      },
    ],
  },
  {
    slug: "sports-medicine",
    title: "Sports Medicine",
    metaTitle: "ACL & Sports Injury Treatment in Jabalpur — Knee Ligament Clinic",
    metaDescription:
      "ACL tear, meniscus injury, or recurring ankle sprain? Sports injury treatment in Jabalpur by Dr. Sushil Kumar Patle at Patle Health Care Center, Adhartal — precise diagnosis, honest advice on surgery, structured rehab.",
    heroTagline:
      "The knee that 'gave way' on the field deserves more than rest and a crepe bandage.",
    overview: [
      "It usually happens in a split second. A footballer plants his foot and turns, feels a pop inside the knee, and is helped off the ground. A badminton player lunges and her ankle rolls. A gym-goer feels something tear in his shoulder mid-lift. What happens in the following two weeks — not the injury itself — often decides whether they return to sport or join the crowd of people whose knee 'has never been the same since'.",
      "The most common mistake we see in Jabalpur is the injury that was never diagnosed. The swelling went down with rest and a bandage, so everyone assumed it healed. But an ACL doesn't reattach itself, and a torn meniscus doesn't fill back in — the knee works fine on straight-line walking and then betrays you on the first twist. Six months later the patient arrives with a knee that buckles unpredictably, and sometimes with new cartilage damage caused by all those small givings-way.",
      "Sports injury care at Patle Health Care Center starts with a precise answer to one question: exactly which structure is damaged, and how badly? From there the advice is honest. Not every ACL tear needs reconstruction. Not every meniscus tear needs an operation. But every significant injury needs a decision made with full information — and a rehabilitation plan that ends with your knee trusted again, not just quiet.",
    ],
    whenToConsultTitle: "Injury Patterns Worth Taking Seriously",
    whenToConsult: [
      "A 'pop' felt or heard in the knee during a twist, with swelling within a few hours — the classic ACL story",
      "A knee that locks, catches, or clicks painfully — often a meniscus tear mechanically blocking the joint",
      "A knee or ankle that keeps 'giving way' months after an old injury",
      "An ankle that has been sprained three, four, five times — recurrent sprains mean the ligaments never regained stability",
      "Shoulder pain with overhead activity, or a shoulder that has dislocated even once",
      "Any sporting injury where you're unsure whether to play again — checking costs one OPD visit; playing on a damaged joint can cost a season or a career",
    ],
    whatWeOfferTitle: "How We Approach Sports Injuries",
    whatWeOffer: [
      {
        title: "Structure-by-Structure Diagnosis",
        description:
          "Specific clinical tests for each ligament and meniscus, X-ray in-house to rule out bony injury, and MRI advised when it will genuinely change the decision — not as a reflex.",
      },
      {
        title: "Honest Surgery Advice",
        description:
          "A desk worker with a partial tear and a stable knee gets a different recommendation than a 22-year-old district-level footballer with a complete ACL rupture. The advice fits your injury and your life, and both options are explained with their real trade-offs.",
      },
      {
        title: "Meniscus-Preserving Philosophy",
        description:
          "The meniscus is the knee's shock absorber, and removing it carelessly buys arthritis a decade early. Where the tear pattern allows, treatment aims to preserve or respect it rather than sacrifice it.",
      },
      {
        title: "Rehab That Ends at 'Match-Fit', Not 'Pain-Free'",
        description:
          "At our in-house physiotherapy centre, return to sport is earned through stages — range, strength, balance, sport-specific movement — with progression decided by what your leg can do, not by dates on a calendar.",
      },
    ],
    recoveryNote:
      "Recovery time depends entirely on the injury: a first ankle sprain may need three focused weeks; an ACL reconstruction is a several-month project where the surgery is honestly the easy part. The number that matters more than weeks is strength symmetry — how close the injured leg is to the healthy one. Returning before roughly nine-tenths symmetry is how re-injuries happen, and we'll tell you plainly when you're there and when you're not.",
    faqs: [
      {
        question: "I heard a pop in my knee but I can walk fine now. Do I still need to get it checked?",
        answer:
          "Yes — and this exact situation is why. A completely torn ACL often allows comfortable straight-line walking once swelling settles; the instability only shows up on turning, pivoting, or uneven ground. Walking normally tells you very little about ligament status. A clinical examination settles the question quickly, and catching it now prevents the cartilage damage that repeated giving-way causes later.",
      },
      {
        question: "Can an ACL tear heal with rest and exercise alone?",
        answer:
          "A fully torn ACL does not grow back together — that's biology, not opinion. What rehabilitation can do is train the muscles around the knee to compensate, which works well for people with partial tears or less rotationally demanding lives. For those who play pivoting sports or have knees that give way despite good rehab, reconstruction is the reliable option. Which camp you fall into is exactly what the consultation determines.",
      },
      {
        question: "How soon after injury should I come in?",
        answer:
          "Ideally within the first few days. Early on we can settle swelling correctly, splint if needed, and plan examination when the knee allows it. But late is genuinely better than never — even injuries from years ago can be assessed and usually improved, whether by rehabilitation or surgery.",
      },
      {
        question: "Do you only treat athletes?",
        answer:
          "Not at all. The same ligaments tear on a wet bathroom floor as on a football field, and the same careful diagnosis applies. Homemakers, students, farmers, office workers — anyone with a joint injury gets the same structure-by-structure assessment. 'Sports medicine' describes the method, not a membership requirement.",
      },
      {
        question: "Will I definitely need an MRI?",
        answer:
          "Not necessarily. Clinical examination diagnoses most significant ligament and meniscus injuries reliably, and the in-house X-ray rules out fractures immediately. MRI is advised when surgery is being considered or when the examination leaves a genuine question — in other words, when its result would change what we do, not as a default expense.",
      },
    ],
  },
  {
    slug: "digital-x-ray",
    title: "Digital X-Ray",
    metaTitle: "Digital X-Ray in Adhartal Jabalpur — Same-Visit Bone Imaging",
    metaDescription:
      "In-house digital X-ray at Patle Health Care Center, Adhartal, Jabalpur. X-ray during your orthopaedic consultation with Dr. Sushil Kumar Patle — immediate images, same-day diagnosis, no separate imaging centre trips.",
    heroTagline:
      "The X-ray happens where the doctor is. That one detail changes your whole visit.",
    overview: [
      "Think about what a fracture consultation usually looks like in most places: you see a doctor, who writes an X-ray referral. You travel — with a painful, possibly broken limb — to an imaging centre across town. You wait. You collect films or a report, sometimes the next day. Then you return to the doctor for the actual diagnosis. Three trips, two waiting rooms, and a day or more of not knowing whether the bone is broken.",
      "At Patle Health Care Center, that entire loop collapses into one room and one visit. The digital X-ray unit is inside the clinic on Main Road, Adhartal. Dr. Patle examines you, takes the views he actually needs, and reads them on screen with you sitting there — pointing at the fracture line or the narrowed joint space and explaining what it means. You leave with a diagnosis and a treatment underway, not a referral slip.",
      "There's a quality argument here too, not just convenience. The doctor treating you chooses the exact views based on his examination, can magnify and adjust the digital image, and interprets it against what your limb actually looks and feels like. Imaging separated from examination loses that context; imaging beside it keeps it.",
    ],
    whenToConsultTitle: "What We Commonly X-Ray at the Clinic",
    whenToConsult: [
      "Suspected fractures after falls, road accidents, and sports injuries",
      "Knee, hip, and spine views for arthritis grading and treatment planning",
      "Follow-up films to confirm a fracture is healing straight and on schedule",
      "Long-standing joint pain or deformity that has never been properly imaged",
      "Post-treatment checks after plaster removal or surgical fixation",
    ],
    whatWeOfferTitle: "What Makes In-House Imaging Better",
    whatWeOffer: [
      {
        title: "One Visit, Complete Answer",
        description:
          "Consultation, X-ray, diagnosis, and the start of treatment in a single appointment — which matters most exactly when moving around is hardest.",
      },
      {
        title: "Read by the Doctor Who Examined You",
        description:
          "Your images are interpreted by Dr. Patle in the context of your history and physical findings — the way imaging is meant to be used.",
      },
      {
        title: "Digital Clarity, Instant Availability",
        description:
          "Digital radiography produces sharp images available on screen immediately, with magnification of suspicious areas — no films to develop, lose, or fade.",
      },
      {
        title: "Painless Follow-Up Checks",
        description:
          "Healing checks become a normal part of your OPD visit instead of a separate errand — so they actually happen on schedule.",
      },
    ],
    faqs: [
      {
        question: "Can I walk in just for an X-ray?",
        answer:
          "X-rays here are done as part of an orthopaedic consultation — Dr. Patle examines you first and images what the examination indicates. That's deliberate: an X-ray without clinical context often answers the wrong question. Come during OPD hours (12 Noon–4 PM or 7–9 PM, Monday to Saturday) and both happen together.",
      },
      {
        question: "Is the radiation from an X-ray something to worry about?",
        answer:
          "A limb X-ray involves a very small radiation dose, and digital systems keep exposure to the minimum needed for a clear image. X-rays are advised only when the finding would affect your treatment. Do tell the doctor if you are or might be pregnant, so imaging can be deferred or shielded appropriately.",
      },
      {
        question: "Will an X-ray show everything wrong with my joint?",
        answer:
          "No, and it's worth being upfront about this: X-rays show bone excellently — fractures, alignment, arthritis changes — but not soft tissue like ligaments, menisci, or muscle. If the examination points to a soft-tissue injury, Dr. Patle will say so and advise MRI only if its answer would change the plan.",
      },
      {
        question: "Should I bring X-rays taken at other centres?",
        answer:
          "Please do — old films are genuinely valuable. Comparing today's image with one from six months ago shows whether arthritis is progressing or a fracture line is filling in, which a single snapshot can't. Bring reports too, even for scans done years ago.",
      },
    ],
  },
  {
    slug: "physiotherapy-rehabilitation",
    title: "Physiotherapy & Rehabilitation",
    metaTitle: "Physiotherapy Centre in Adhartal Jabalpur — Injury & Post-Op Rehab",
    metaDescription:
      "Physiotherapy centre inside Patle Health Care Center, Adhartal, Jabalpur — rehabilitation after fractures and surgery, arthritis exercise programs, and sports injury rehab, coordinated directly with Dr. Sushil Kumar Patle.",
    heroTagline:
      "The plaster comes off, and the real work begins. We're built for that part too.",
    overview: [
      "There's a moment every fracture patient knows: the plaster comes off after six weeks, and the arm underneath looks thinner, feels stiff, and refuses to straighten. The bone has healed — the X-ray proves it — but the limb doesn't work yet. This is the gap where recoveries quietly fail, because in most setups the doctor's job ends where the physiotherapist's begins, and the two never speak.",
      "At Patle Health Care Center, the physiotherapy centre is inside the clinic, and that changes the everyday mechanics of getting better. Dr. Patle writes the rehabilitation plan knowing exactly what he fixed and how solid it is. The physiotherapy team progresses you through it, and when something isn't going right — a knee that stays swollen, a shoulder that stalls at half its movement — the surgeon is a corridor away, not a phone number that never picks up.",
      "The centre runs programs well beyond post-fracture recovery: strengthening for arthritic knees that keeps people out of trouble for years, guided rehab for ligament injuries, balance and mobility work for older adults after falls. In each case the philosophy is identical — exercise prescribed like medicine, with a purpose, a dose, and a progression.",
    ],
    whenToConsultTitle: "Programs We Run at the Centre",
    whenToConsult: [
      "Post-plaster rehabilitation — restoring motion and strength after cast removal",
      "Post-surgical recovery after fracture fixation and other orthopaedic procedures",
      "Knee arthritis programs — quadriceps strengthening that measurably reduces daily pain",
      "Ligament and sports injury rehab, through to return-to-sport testing",
      "Back and neck pain programs built on movement, posture, and strengthening",
      "Fall-prevention, balance, and mobility training for older adults",
    ],
    whatWeOfferTitle: "Why Rehab Works Better Under One Roof",
    whatWeOffer: [
      {
        title: "The Surgeon Writes the Brief",
        description:
          "Rehabilitation starts from precise knowledge of your injury or operation — which movements to push, which to protect, and when the next stage is safe.",
      },
      {
        title: "Progress Reviewed, Not Assumed",
        description:
          "Your program is adjusted based on what your joint actually does each week. Plateaus get investigated — sometimes with a same-day X-ray — instead of being exercised through blindly.",
      },
      {
        title: "A Program, Not Just Sessions",
        description:
          "Every stage has a goal: this range by week three, this strength by week six. You always know what you're working toward and how you're tracking against it.",
      },
      {
        title: "Home Exercises You'll Actually Do",
        description:
          "The sessions between clinic visits are where recovery mostly happens, so you learn a short, correct home routine — demonstrated, corrected, and kept realistic for your day.",
      },
    ],
    recoveryNote:
      "In rehabilitation, consistency beats intensity — every time. Fifteen correct minutes daily outperforms a heroic hour once a week. Programs here are deliberately kept small enough to live inside a normal working day, because a perfect program nobody follows is worth less than a modest one done every morning.",
    faqs: [
      {
        question: "Do I need to be Dr. Patle's patient to use the physiotherapy centre?",
        answer:
          "New patients are first seen in the OPD so that rehabilitation targets the correct diagnosis — treating 'knee pain' with exercises meant for the wrong condition wastes weeks. After that evaluation, your program runs at the centre with periodic reviews. Existing patients move into rehab as a built-in part of their treatment.",
      },
      {
        question: "How many sessions will I need, honestly?",
        answer:
          "It genuinely varies: post-plaster stiffness often improves substantially inside three to four weeks; ligament and post-surgical programs run longer, in stages. What we commit to is telling you the expected duration at the start, showing you the milestones, and not stretching a program that has met its goals.",
      },
      {
        question: "Physiotherapy hurt when I tried it before. Is that normal?",
        answer:
          "A stretching, working discomfort during sessions is normal — especially when winning back movement a joint has lost. Sharp pain, or pain that leaves the joint worse for days afterward, is not, and it usually means the program needs adjusting rather than enduring. Because the surgeon is on-site, 'this doesn't feel right' gets investigated quickly here.",
      },
      {
        question: "Can exercises really help knee arthritis, or is that just something doctors say?",
        answer:
          "The evidence is solid and the mechanism is simple: the quadriceps muscle is the knee's shock absorber, and strengthening it measurably reduces pain and improves walking in arthritic knees. It requires weeks of consistency before it pays off, which is where most people give up — and where a structured, supervised program earns its keep.",
      },
    ],
  },
];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}
