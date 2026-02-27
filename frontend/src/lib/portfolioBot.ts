/**
 * Portfolio chatbot — all prompts and responses run in the browser.
 * No backend required. Data and triggers from portfolioBotData.ts.
 */

import {
  PORTFOLIO_INFO,
  BARISTA_GREETINGS,
  TRIGGERS,
} from "./portfolioBotData";

const uniqueInterests = Array.from(new Set(PORTFOLIO_INFO.interests));

function classifyIntent(question: string): string {
  const q = question.toLowerCase().trim();
  if (
    q.includes("why should") &&
    (q.includes("hire") || q.includes("we") || q.includes("you"))
  )
    return "PITCH";
  if (
    q.includes("what do you bring") ||
    q.includes("pitch yourself") ||
    q.includes("pitch mukuka") ||
    q.includes("founding engineer") ||
    q.includes("what would i get")
  )
    return "PITCH";
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("reach") ||
    q.includes("get in touch") ||
    q.includes("linkedin") ||
    q.includes("github") ||
    q.includes("social")
  )
    return "CONTACT";
  if (
    q.includes("who are you") ||
    q.includes("who is mukuka") ||
    q.includes("what do you do") ||
    q.includes("describe yourself") ||
    q.includes("tell me about yourself") ||
    q.includes("background")
  )
    return "IDENTITY";
  if (
    q.includes("skill") ||
    q.includes("tech stack") ||
    q.includes("technology") ||
    q.includes("expertise")
  )
    return "SKILLS";
  if (
    q.includes("project") ||
    q.includes("build") ||
    q.includes("work on") ||
    q.includes("what have you built")
  )
    return "PROJECTS";
  return "UNKNOWN";
}

function generateGreetingResponse(): string {
  const greeting =
    BARISTA_GREETINGS[
      Math.floor(Math.random() * BARISTA_GREETINGS.length)
    ];
  return `${greeting} Ask me anything about Mukuka!`;
}

function generatePitchResponse(): string {
  return "Full-stack engineer (React, Next.js, Node.js, Firebase, GCP, AI/RAG). Experience at Hytel, Fin360, Kuala Tech. Women in Tech advocate—clean code, collaboration, impact.";
}

function generateAboutResponse(casual = false): string {
  if (casual) {
    return "Mukuka—Full Stack Engineer & AI enthusiast. React, Next.js, Node, Firebase, GCP. Loves cooking, travel, art, house music. Women in Tech advocate.";
  }
  return "Mukuka Nkamba: Full Stack Engineer, AI/RAG enthusiast. React, Next.js, Node, Firebase, GCP; Golang, PostgreSQL, TypeScript. Content Creator & Women in Tech advocate.";
}

function generateOneSentenceDescription(): string {
  return "Full Stack Engineer & AI/RAG enthusiast; builds scalable apps; loves cooking, travel, and art.";
}

function generateSkillsResponse(single = false): string {
  if (single) {
    return "Strongest in full-stack: React, Next.js, Node, Firebase, GCP, plus Golang & PostgreSQL.";
  }
  const s = PORTFOLIO_INFO.skills;
  return `Frontend: ${s.frontend.join(", ")}. Backend: ${s.backend.join(", ")}. Cloud: ${s.cloudDevOps.join("; ")}. DB: ${s.databases.join(", ")}. AI: ${s.ai.join(", ")}.`;
}

function generateProjectsResponse(): string {
  const projects = PORTFOLIO_INFO.projects;
  return `${projects[0].name}, ${projects[1].name}. Currently: AI-powered features at Hytel.`;
}

function generateInterestsResponse(single = false): string {
  if (single) {
    const hobby =
      uniqueInterests[Math.floor(Math.random() * uniqueInterests.length)];
    return `I'm passionate about ${hobby}.`;
  }
  return "AI, cloud, clean code, mentorship. Plus cooking, travel, art, reading, walks. Women in Tech advocate, content creator. House music & afrocentric vibes.";
}

/** Precise answer when asked specifically about hobbies (not professional interests). */
function generateHobbiesResponse(): string {
  return "Cooking, traveling, art, reading, walks, blog. House music & afrocentric culture.";
}

const SHORT_PERSONAL: Partial<Record<keyof typeof PORTFOLIO_INFO.personal, string>> = {
  cooking: "Loves cooking—unwinds and gets creative outside of code.",
  traveling: "Loves traveling; new places and cultures feed her curiosity.",
  art: "Loves art—appreciating it and building products/interfaces.",
  reading: "Enjoys reading; keeps her sharp.",
  walks: "Likes walks—clears her head.",
  blog: "Runs a blog on tech, growth, and the journey.",
  morningRoutine: "Starts the day with a warm drink to get in a good headspace.",
  inspiration: "Inspired by meaningful work and growth.",
};
function generatePersonalResponse(
  topic: keyof typeof PORTFOLIO_INFO.personal
): string {
  const short = SHORT_PERSONAL[topic];
  if (short) return short;
  const p = PORTFOLIO_INFO.personal;
  const key = topic as keyof typeof p;
  if (p[key]) return p[key];
  return generateInterestsResponse();
}

function generateFunFactResponse(): string {
  return "Runs a blog; graduated as the only woman in her Software Engineering department.";
}

function generateMusicResponse(): string {
  return "House music, afrocentric vibes. On repeat: Ice 2 Water by Waykins.";
}

function generateMorningRoutineResponse(): string {
  return "Starts with a warm drink to wake up and get in a good headspace.";
}

function generateInspirationResponse(): string {
  return "Meaningful work and personal + professional growth.";
}

function generateHytelDayResponse(question: string): string {
  const h = PORTFOLIO_INFO.hytel;
  if (question.includes("enjoy") || question.includes("team")) return h.enjoy;
  if (question.includes("stand out")) return h.standsOut;
  return "Software Developer at Hytel. Typical day: code, collaborate, ship. Friendly team; focus on scalability.";
}

function generateContactResponse(filter?: string | null): string {
  const c = PORTFOLIO_INFO.contact;
  if (filter === "email") return c.email;
  if (filter === "phone") return c.phone;
  if (filter === "github") return c.github;
  if (filter === "linkedin") return c.linkedin;
  return `${c.email} · ${c.phone} · LinkedIn & GitHub in footer.`;
}

function generateExperienceResponse(): string {
  const exp = PORTFOLIO_INFO.experience;
  const current = exp[0];
  return `${current.role} at ${current.company} (${current.period}). Before: Fin360, Kuala Tech, Cyprus Codes. Scalable apps, Agile teams.`;
}

function generateEducationResponse(): string {
  const edu = PORTFOLIO_INFO.education;
  const uni = edu[0];
  return `${uni.degree}, ${uni.institution} (${uni.period}). ${uni.note} Chipembi Girls; Tech4Dev WomenTechsters; Hytel AI Bootcamp.`;
}

function generateCertificationsResponse(): string {
  return `Certifications: ${PORTFOLIO_INFO.certifications.join(", ")}.`;
}

function generateAvailabilityResponse(): string {
  return "Full-time at Hytel. Open to freelance, collaboration, mentorship. Email to discuss.";
}

function generateCollaborationResponse(): string {
  return "Open to projects, content, education, startups. Email to discuss.";
}

function generateMentorshipResponse(): string {
  return `As a Women in Tech Advocate, I offer mentorship in Software Engineering, Data Analysis, Career Growth, and Portfolio Guidance. I've been the only woman in my department, so I understand the challenges. Contact me at ${PORTFOLIO_INFO.contact.email}.`;
}

function generateWomenInTechResponse(): string {
  return "Women in Tech advocate. Only woman in her Software Engineering cohort at CIU; Tech4Dev WomenTechsters (A+). Content & advocacy for women in STEM.";
}

function generateContentResponse(): string {
  return "Tech content on TikTok @coffee-to-code: coding tips, career advice, Women in Tech, day-in-the-life.";
}

function generateDefaultResponse(): string {
  return "Ask about background, skills, experience, projects, contact—or hobbies, Hytel, fun facts. Email in footer for more.";
}

function generateMenuResponse(menuItem: string): string {
  const key = menuItem.toLowerCase();
  const map: Record<string, () => string> = {
    skills: () => generateSkillsResponse(),
    projects: () => generateProjectsResponse(),
    about: () => generateAboutResponse(),
    contact: () => generateContactResponse(),
    experience: () => generateExperienceResponse(),
    education: () => generateEducationResponse(),
    certifications: () => generateCertificationsResponse(),
  };
  return map[key]?.() ?? `Ask about skills, projects, experience, or contact.`;
}

/**
 * Main entry: generate response from user input. Runs entirely in the frontend.
 */
export function generateAIResponse(
  type: "question" | "menu",
  value: string,
  short = false
): string {
  const lowerValue = value.toLowerCase().trim();

  if (type === "menu") return generateMenuResponse(value);

  const intent = classifyIntent(value);

  if (intent === "PITCH") {
    if (
      lowerValue.includes("why should") &&
      (lowerValue.includes("hire") || lowerValue.includes("we"))
    )
      return generatePitchResponse();
    if (
      lowerValue.includes("what do you bring") ||
      lowerValue.includes("what would i get")
    )
      return generatePitchResponse();
    if (
      lowerValue.includes("pitch yourself") ||
      lowerValue.includes("pitch mukuka") ||
      lowerValue.includes("founding engineer")
    )
      return generatePitchResponse();
  }

  const triggers = TRIGGERS;

  const isOnlyGreeting =
    triggers.hello.some(
      (t) =>
        lowerValue === t ||
        lowerValue.startsWith(t + " ") ||
        lowerValue === t + "!"
    ) &&
    !lowerValue.includes("?") &&
    lowerValue.length < 20;
  if (isOnlyGreeting) return generateGreetingResponse();

  if (
    lowerValue.includes("tech stack") ||
    lowerValue.includes("your stack") ||
    lowerValue.includes("technologies") ||
    lowerValue.includes("programming stack")
  )
    return generateSkillsResponse(false);
  if (triggers.skills.some((t) => lowerValue.includes(t)))
    return generateSkillsResponse(short);

  if (intent === "CONTACT") {
    if (lowerValue.includes("email")) return PORTFOLIO_INFO.contact.email;
    if (lowerValue.includes("phone") || lowerValue.includes("number"))
      return PORTFOLIO_INFO.contact.phone;
    if (lowerValue.includes("tiktok")) return PORTFOLIO_INFO.contact.tiktok;
    if (lowerValue.includes("github")) return generateContactResponse("github");
    if (lowerValue.includes("linkedin"))
      return generateContactResponse("linkedin");
  }

  if (triggers.personal.some((t) => lowerValue.includes(t))) {
    if (lowerValue.includes("cook") || lowerValue.includes("food"))
      return generatePersonalResponse("cooking");
    if (lowerValue.includes("travel") || lowerValue.includes("see the world"))
      return generatePersonalResponse("traveling");
    if (lowerValue.includes("art") && !lowerValue.includes("smart"))
      return generatePersonalResponse("art");
    if (lowerValue.includes("reading") || lowerValue.includes("read "))
      return generatePersonalResponse("reading");
    if (lowerValue.includes("walk")) return generatePersonalResponse("walks");
    if (lowerValue.includes("blog")) return generatePersonalResponse("blog");
    if (
      lowerValue.includes("fun fact") ||
      lowerValue.includes("hidden talent")
    )
      return generateFunFactResponse();
    if (
      lowerValue.includes("song") ||
      lowerValue.includes("on repeat") ||
      lowerValue.includes("waykins") ||
      lowerValue.includes("ice 2 water") ||
      lowerValue.includes("currently loving") ||
      lowerValue.includes("loving lately")
    )
      return generateMusicResponse();
    if (
      lowerValue.includes("house music") ||
      lowerValue.includes("afrocentric") ||
      lowerValue.includes("music you like")
    )
      return generateMusicResponse();
    if (
      lowerValue.includes("start your day") ||
      lowerValue.includes("morning") ||
      lowerValue.includes("routine") ||
      lowerValue.includes("good mood") ||
      lowerValue.includes("warm drink")
    )
      return generateMorningRoutineResponse();
    if (
      lowerValue.includes("inspir") ||
      lowerValue.includes("what drives") ||
      lowerValue.includes("what motivates")
    )
      return generateInspirationResponse();
    if (
      lowerValue.includes("hytel") &&
      (lowerValue.includes("day") ||
        lowerValue.includes("role") ||
        lowerValue.includes("typical") ||
        lowerValue.includes("enjoy") ||
        lowerValue.includes("stand out") ||
        lowerValue.includes("team") ||
        (lowerValue.includes("what") && lowerValue.includes("do")))
    )
      return generateHytelDayResponse(lowerValue);
    return generateInterestsResponse();
  }

  if (triggers.genZSlang.some((t) => lowerValue.includes(t))) {
    if (
      lowerValue.includes("what's the tea") ||
      lowerValue.includes("spill the tea") ||
      lowerValue.includes("what's the vibe") ||
      lowerValue.includes("vibe")
    )
      return generateAboutResponse(true);
    if (
      lowerValue.includes("no cap") ||
      lowerValue.includes("fr ") ||
      lowerValue.includes(" for real")
    )
      return "No cap—all from real experience. What do you wanna know?";
    if (
      lowerValue.includes("slay") ||
      lowerValue.includes("that's fire") ||
      lowerValue.includes("goals") ||
      lowerValue.includes("lit")
    )
      return "Thanks bestie! Building and helping in tech. What can I tell you?";
    if (lowerValue.includes("mood") || lowerValue.includes("same energy"))
      return "Same energy—meaningful work, good vibes, growth. Ask me anything.";
  }

  if (triggers.availability.some((t) => lowerValue.includes(t)))
    return generateAvailabilityResponse();
  if (triggers.rates.some((t) => lowerValue.includes(t)))
    return "Rates depend on scope. Email to discuss.";
  if (
    triggers.collaboration.some((t) => lowerValue.includes(t)) &&
    !lowerValue.includes("what do you do") &&
    !lowerValue.startsWith("what do you")
  )
    return generateCollaborationResponse();
  if (triggers.mentorship.some((t) => lowerValue.includes(t)))
    return generateMentorshipResponse();
  if (triggers.location.some((t) => lowerValue.includes(t)))
    return "Based in Lusaka, Zambia. Works remotely worldwide.";
  if (triggers.womenInTech.some((t) => lowerValue.includes(t)))
    return generateWomenInTechResponse();
  if (triggers.content.some((t) => lowerValue.includes(t)))
    return generateContentResponse();

  if (
    lowerValue.includes("hobbies") ||
    lowerValue.includes("her hobby") ||
    lowerValue.includes("your hobby")
  )
    return generateHobbiesResponse();
  if (
    lowerValue.includes("what do you do for fun") ||
    lowerValue.includes("do for fun") ||
    lowerValue.includes("outside of work") ||
    lowerValue.includes("what are you into") ||
    lowerValue.includes("what's your passion")
  )
    return generateInterestsResponse();
  if (triggers.interests.some((t) => lowerValue.includes(t)))
    return generateInterestsResponse();

  if (
    lowerValue.includes("favorite language") ||
    lowerValue.includes("favourite language") ||
    lowerValue.includes("fav language")
  )
    return "I prefer Golang for backend and React for frontend—they're clean, powerful, and well-suited for scalable applications.";

  if (
    lowerValue.includes("full story") ||
    lowerValue.includes("your story") ||
    lowerValue.includes("background story") ||
    (lowerValue.includes("tell me more") && lowerValue.includes("about"))
  )
    return PORTFOLIO_INFO.narrative;

  if (
    (lowerValue.includes("who are you") ||
      lowerValue.includes("what do you do") ||
      lowerValue.includes("tell me about yourself") ||
      lowerValue.includes("who is mukuka") ||
      lowerValue.includes("describe yourself") ||
      lowerValue.includes("one sentence") ||
      lowerValue.includes("one-sentence")) &&
    !lowerValue.includes("fun") &&
    !lowerValue.includes("hobby") &&
    !lowerValue.includes("interest") &&
    !lowerValue.includes("collaborate") &&
    !lowerValue.includes("work together")
  ) {
    if (
      lowerValue.includes("one sentence") ||
      lowerValue.includes("one-sentence") ||
      lowerValue.includes("in one sentence")
    )
      return generateOneSentenceDescription();
    return generateAboutResponse();
  }

  if (
    lowerValue.includes("professional background") ||
    lowerValue.includes("what's your professional background")
  )
    return generateExperienceResponse();

  if (triggers.projects.some((t) => lowerValue.includes(t)))
    return generateProjectsResponse();
  if (triggers.about.some((t) => lowerValue.includes(t)))
    return generateAboutResponse();
  if (triggers.contact.some((t) => lowerValue.includes(t)))
    return generateContactResponse();
  if (triggers.experience.some((t) => lowerValue.includes(t)))
    return generateExperienceResponse();
  if (triggers.education.some((t) => lowerValue.includes(t)))
    return generateEducationResponse();
  if (triggers.certification.some((t) => lowerValue.includes(t)))
    return generateCertificationsResponse();

  if (
    lowerValue.includes("where are you based") ||
    lowerValue.includes("where are you located") ||
    lowerValue.includes("where do you live") ||
    lowerValue.includes("where you at")
  )
    return "Lusaka, Zambia. Works remotely worldwide.";

  if (
    lowerValue.includes("strongest technical skills") ||
    lowerValue.includes("strongest skills") ||
    lowerValue.includes("best at") ||
    lowerValue.includes("expertise") ||
    lowerValue.includes("specialize")
  )
    return generateSkillsResponse(false);

  if (
    lowerValue.includes("frontend or backend") ||
    lowerValue.includes("frontend vs backend") ||
    lowerValue.includes("more frontend") ||
    lowerValue.includes("more backend")
  )
    return "More backend (Golang, PostgreSQL); also strong in React/Next.js. Full-stack.";

  if (
    lowerValue.includes("firebase") &&
    (lowerValue.includes("experience") ||
      lowerValue.includes("best at") ||
      lowerValue.includes("expert"))
  )
    return "Firebase: Auth, Firestore, Cloud Functions. Real-time DBs, full-stack integration.";

  if (
    (lowerValue.includes("ai") || lowerValue.includes("rag")) &&
    (lowerValue.includes("experience") ||
      lowerValue.includes("work") ||
      lowerValue.includes("build"))
  )
    return "GenAI & RAG. Building AI-powered features at Hytel.";

  if (
    lowerValue.includes("currently building") ||
    lowerValue.includes("working on now") ||
    lowerValue.includes("current project")
  )
    return "Peak Software Developer at Hytel—AI-powered features, scalable web apps.";

  if (
    lowerValue.includes("best represents") ||
    lowerValue.includes("best project") ||
    lowerValue.includes("favorite project") ||
    lowerValue.includes("favourite project")
  )
    return "Hytel Elixir—AI, project management, scalable architecture.";

  if (
    lowerValue.includes("summarize") &&
    (lowerValue.includes("experience") ||
      lowerValue.includes("3 bullet") ||
      lowerValue.includes("bullet points"))
  )
    return "• Full-stack (React, Next.js, Node, Firebase, GCP, AI/RAG)\n• Hytel: AI features, RAG, project mgmt\n• Women in Tech advocate; cooking, travel, art";

  if (
    lowerValue.includes("what makes mukuka different") ||
    lowerValue.includes("what makes you different") ||
    lowerValue.includes("what sets you apart")
  )
    return "Tech + advocacy & content. Only woman in her cohort; uses that to help others. Always learning.";

  if (
    lowerValue.includes("if i hired mukuka") ||
    lowerValue.includes("if i hired you") ||
    lowerValue.includes("what would i get")
  )
    return "Full-stack engineer, problem-solver, team player. Scalable solutions, clear communication, always learning.";

  if (
    lowerValue.includes("one-line summary") ||
    lowerValue.includes("one line summary") ||
    lowerValue.includes("one sentence summary")
  )
    return generateOneSentenceDescription();

  if (
    lowerValue.includes("top 3 skills") ||
    lowerValue.includes("3 skills only")
  )
    return "1. Full-stack & cloud (React, Next.js, Node.js, Firebase, GCP)\n2. Backend & APIs (Golang, PostgreSQL, REST)\n3. AI/RAG integration & problem-solving";

  if (
    lowerValue.includes("why should i talk to mukuka") ||
    lowerValue.includes("why should i talk to you")
  )
    return "Technical expertise, fresh perspectives, problem-solver. Communicates well, delivers quality.";

  if (
    lowerValue.includes("problem does mukuka solve") ||
    lowerValue.includes("problems do you solve") ||
    lowerValue.includes("what problems")
  )
    return "Scalable web apps, business→tech translation, efficient backends. Helps teams ship quality software.";

  if (
    lowerValue.includes("design an ai system") ||
    lowerValue.includes("design ai") ||
    lowerValue.includes("ai system for")
  )
    return "Understand the problem → pick approach (RAG or GenAI). Focus: scalability, data quality, UX.";

  if (
    lowerValue.includes("approach building scalable") ||
    lowerValue.includes("build scalable systems") ||
    lowerValue.includes("scalable systems")
  )
    return "Clean code, solid DB design (PostgreSQL), microservices when needed, caching, monitoring. Performance from day one.";

  if (
    lowerValue.includes("trade-offs") ||
    lowerValue.includes("tradeoffs") ||
    lowerValue.includes("consider when designing")
  )
    return "Performance vs. speed, scale vs. complexity, cost vs. features, UX vs. tech debt. Balance business + code.";

  if (
    lowerValue.includes("explain that in simpler terms") ||
    lowerValue.includes("simpler terms") ||
    lowerValue.includes("explain like i'm") ||
    lowerValue.includes("eli5") ||
    lowerValue.includes("not technical")
  )
    return "Builds websites and apps that work well and scale. Does both backend and frontend. Solves problems with code.";

  if (
    lowerValue.includes("handle challenges") ||
    lowerValue.includes("handle blockers") ||
    lowerValue.includes("deal with problems")
  )
    return "Break it down, research, ask for help when stuck, stay calm. Find creative solutions.";

  if (
    lowerValue.includes("approach collaboration") ||
    lowerValue.includes("how do you collaborate")
  )
    return "Open communication, listen, share knowledge, help teammates. Best solutions come from working together.";

  if (
    lowerValue.includes("short intro") &&
    (lowerValue.includes("landing page") || lowerValue.includes("intro"))
  )
    return "Mukuka Nkamba — Full Stack Engineer & AI enthusiast. Scalable web apps, problem-solving, Women in Tech.";

  if (
    lowerValue.includes("doesn't mukuka know") ||
    lowerValue.includes("don't know") ||
    lowerValue.includes("still learning")
  )
    return "Always learning. Exploring advanced AI/ML, system design, new frameworks. Honest about gaps—that's how she grows.";

  if (
    lowerValue.includes("not a good fit for") ||
    lowerValue.includes("not good fit") ||
    lowerValue.includes("wouldn't be good")
  )
    return "Less fit: deep mobile-native, low-level systems. More web/full-stack. Open to learning.";

  if (
    lowerValue.includes("need support") ||
    lowerValue.includes("would need help") ||
    lowerValue.includes("where would need support")
  )
    return "Would lean on team for: DevOps at scale, advanced AI/ML training, design systems. Strong in backend/full-stack.";

  if (lowerValue.includes("vintusure") || lowerValue.includes("vintu sure"))
    return "No VintuSure in portfolio. Recent: Hytel Elixir, Klapton Insurance Zambia. Now: AI features at Hytel.";

  if (
    lowerValue.includes("firebase vs") ||
    lowerValue.includes("firebase or traditional") ||
    lowerValue.includes("decide between firebase")
  )
    return "Firebase: fast prototyping, real-time, serverless. Golang/PostgreSQL: complex logic, more control. Depends on the project.";

  if (
    lowerValue.includes("specialize in") &&
    (lowerValue.includes("max") ||
      lowerValue.includes("10 words") ||
      lowerValue.includes("words"))
  )
    return "Full-stack engineering, backend systems, AI integration, scalable web apps.";

  if (
    lowerValue.includes("what's it like working with mukuka") ||
    lowerValue.includes("like working with you") ||
    lowerValue.includes("what are you like to work with")
  )
    return "Collaborative, clear communication, on time. Creative solutions, always learning. Values team input, asks questions.";

  const isShortGreeting =
    lowerValue.length < 15 &&
    triggers.hello.some(
      (t) =>
        lowerValue === t ||
        lowerValue.startsWith(t + " ") ||
        lowerValue.startsWith(t + "!")
    );
  if (isShortGreeting) return generateGreetingResponse();

  return generateDefaultResponse();
}
