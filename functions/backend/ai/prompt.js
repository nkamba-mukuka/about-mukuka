// Portfolio chatbot: wide prompt base for professional, casual, Gen Z, and millennial tones
// No AI model calls - cost-effective approach

const PORTFOLIO_INFO = {
  name: "Mukuka Nkamba",
  title: "Full Stack Software Engineer | AI & GenAI (RAG) Enthusiast | Data Analyst | Content Creator",
  contact: {
    phone: "+260 962 398 849",
    email: "mukukankambaa@gmail.com",
    linkedin: "https://www.linkedin.com/in/mukuka-nkamba-4a9b16290/",
    github: "https://github.com/nkamba-mukuka",
    tiktok: "tiktok.com/@coffee-to-code",
  },
  bio: "Results-driven Full Stack Software Engineer with a strong track record of building scalable, cloud-native, and data-driven applications. Experienced across the full software development lifecycle, with expertise in React, Next.js, Node.js, Firebase, and GCP, and hands-on proficiency in Golang, PHP, PostgreSQL, TypeScript, and Python. Passionate about AI-powered systems (RAG), clean architecture, and collaborating with cross-functional Agile teams to deliver high-quality, user-centric products.",
  skills: {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
    backend: ["Node.js", "Golang", "PHP", "Python"],
    cloudDevOps: ["Firebase (Auth, Firestore, Cloud Functions)", "Google Cloud Platform", "CI/CD Pipelines"],
    databases: ["PostgreSQL", "SQL"],
    tools: ["Git", "Postman", "Tableau", "Power BI", "Excel", "Google Sheets"],
    ai: ["Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "Data Visualization", "Basic Machine Learning"],
  },
  experience: [
    {
      role: "Peak Software Developer (Full Stack)",
      company: "Hytel",
      location: "Lusaka, Zambia",
      period: "Aug 2025 – Present",
      description: "Lead development of production-grade, cloud-based web apps (React, Next.js, Node.js, Firebase, GCP). Architect scalable frontends; build backend services with Firestore, Firebase Auth, Cloud Functions. Design CI/CD pipelines. Integrate GenAI and RAG into business workflows. Collaborate with international, cross-functional Agile teams.",
      tech: ["React", "Next.js", "Node.js", "Firebase", "GCP", "RAG", "CI/CD"],
    },
    {
      role: "Full Stack Developer",
      company: "Fin360",
      location: "Lusaka, Zambia",
      period: "May 2024 – Aug 2025",
      description: "Enterprise web apps with PHP (Yii2), JavaScript, HTML, CSS. Auth, RBAC, data reporting. RESTful APIs. SQL optimization.",
      tech: ["PHP", "Yii2", "JavaScript", "RESTful APIs"],
    },
    {
      role: "Junior Software Engineer",
      company: "Kuala Tech",
      location: "Lusaka, Zambia",
      period: "May 2024 – Feb 2025",
      description: "Backend APIs (Golang, PostgreSQL). Frontend components (React, Next.js, TypeScript). Performance tuning, testing, debugging. Sprint planning, code reviews, Postman API integration.",
      tech: ["Golang", "PostgreSQL", "React", "Next.js", "TypeScript"],
    },
    {
      role: "Junior Software Engineer Intern",
      company: "Cyprus Codes (Ata Bilişim)",
      location: "Cyprus",
      period: "Sept 2021 – Aug 2022",
      description: "Web interfaces with HTML, CSS, React, Angular. Frontend optimization, bug fixing, UI improvements. Daily stand-ups, sprint reviews, version control and deployment.",
      tech: ["HTML", "CSS", "React", "Angular"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Cyprus International University",
      period: "2019 – 2024",
      note: "Graduated Spring 2023 as the only female in my department.",
    },
    {
      degree: "High School Certificate",
      institution: "Chipembi Girls Secondary School",
      period: "2014 – 2018",
    },
  ],
  certifications: [
    "HTML5 Certification — Enduonix Learning Solutions",
    "Backend Master Class (Golang, PostgreSQL, gRPC) — Udemy",
    "Tech4Dev WomenTechsters Data Analyst Program (Cohort 4)",
    "Hytel Software Development Bootcamp — 2025",
  ],
  projects: [
    {
      name: "Hytel Elixir",
      description: "Agile methodology system with intelligent project management, collaboration, and data-driven insights.",
      link: "https://elixir-98f15.web.app/",
      tech: ["Project Management", "AI", "Collaboration"],
    },
    {
      name: "Klapton Insurance Zambia (KIZ)",
      description: "Digital insurance for your home. Superior products and services for economic growth.",
      link: "https://kiz.co.zm/",
      tech: ["FinTech", "Zambia", "Digital Insurance"],
    },
  ],
  interests: [
    "AI Agents & Generative AI",
    "Cloud Architecture",
    "Clean Code & Software Design",
    "Technical Writing",
    "Community Tech Education",
    "Open-Source",
    "Product Design",
    "Women in Tech Advocacy",
    "Content Creation",
    "Mentorship",
    "Cooking",
    "Traveling",
    "Art",
    "Interior Design",
  ],
  // Personal / lifestyle — for casual, Gen Z, millennial questions
  personal: {
    cooking: "I love cooking. It's one of my favorite ways to unwind and get creative outside of code.",
    traveling: "I love traveling and hope to see the world one day. New places and cultures feed my curiosity.",
    art: "I love art—both appreciating it and the creative side of building products and interfaces.",
    reading: "I enjoy reading. It keeps me sharp and helps me think differently.",
    walks: "I like taking walks. Good for clearing my head and getting into a good headspace.",
    blog: "I run a blog where I share my thoughts and experiences—mostly around tech, growth, and the journey.",
    songOnRepeat: "Ice 2 Water by Waykins. I've had it on repeat lately.",
    morningRoutine: "I like to start my day with a warm drink—it helps me wake up and get into a positive mindset before work.",
    inspiration: "I'm inspired by fulfillment—doing meaningful work and growing personally and professionally.",
    funFact: "I run a blog where I share my thoughts and experiences. Also graduated as the only woman in my Software Engineering department at uni.",
  },
  music: {
    house: "I love house music in general.",
    afrocentric: "I love the afrocentric aspect of things—music, culture, design, and how it shows up in what I build and consume.",
  },
  hytel: {
    role: "I'm a Software Developer at Hytel.",
    typicalDay: "My typical day involves writing code, collaborating with my team, and working on projects that improve our products and processes.",
    enjoy: "I enjoy the friendliness and supportive culture of the team.",
    standsOut: "Hytel stands out for its focus on scalability and building solutions that can grow effectively over time.",
    bootcamp: "I did the Hytel AI Bootcamp (Africa Prime)—explored AI fundamentals, Generative AI, and RAG—then was hired. I contribute to meaningful, scalable projects in a dynamic, fast-paced environment.",
  },
  narrative: "I graduated from Cyprus International University (Spring 2023) as the only female in my department. Through internships at Cyprus Codes and Ata Bilişim I gained hands-on front-end experience in Agile teams. After the Hytel AI Bootcamp I was hired by Hytel; I also did the Tech4Dev WomenTechsters Data Analyst program to bridge software engineering with data insights. Beyond tech I'm a Content Creator and Women in Tech Advocate—sharing my journey, mentoring, and creating resources to empower women in STEM. I'm known for adaptability, curiosity, and problem-solving at the intersection of engineering, AI, and mentorship.",
  attributes: [
    "Good communication and interpersonal skills",
    "Ability to work independently and under pressure",
    "Strong character and discipline",
    "Creative and organized problem-solver",
    "Adaptability and curiosity",
  ],
};

const uniqueInterests = [...new Set(PORTFOLIO_INFO.interests)];

// Barista-style greetings and responses
const BARISTA_RESPONSES = {
  greetings: [
    "Hey there, gorgeous! ☕✨",
    "Ouuu, welcome babe! What can I brew for you today?",
    "Hi beautiful! Ready to explore? Let's go! 💕",
    "Heyyy! So excited you're here! What's up? ☕",
  ],
  closings: [
    "Hope that helps, love! Anything else? 💕",
    "Ouuu, let me know if you'd like to know more! ✨",
    "Too good! Feel free to ask about anything else, babe! ☕",
  ],
};

/**
 * Intent Router - Classify user's intent before generating response
 * @param {string} question - User's question
 * @returns {string} Intent category
 */
function classifyIntent(question) {
  const lowerQuestion = question.toLowerCase().trim();
  
  // PITCH: Hiring, value, pitching, contribution questions
  if (lowerQuestion.includes("why should") && (lowerQuestion.includes("hire") || lowerQuestion.includes("we") || lowerQuestion.includes("you"))) {
    return "PITCH";
  }
  if (lowerQuestion.includes("what do you bring") || lowerQuestion.includes("pitch yourself") || 
      lowerQuestion.includes("pitch mukuka") || lowerQuestion.includes("why should a startup") ||
      lowerQuestion.includes("founding engineer") || lowerQuestion.includes("what would i get")) {
    return "PITCH";
  }
  
  // CONTACT: Explicitly asking for contact info
  if (lowerQuestion.includes("contact") || lowerQuestion.includes("email") || 
      lowerQuestion.includes("phone") || lowerQuestion.includes("number") ||
      lowerQuestion.includes("reach") || lowerQuestion.includes("get in touch") ||
      lowerQuestion.includes("linkedin") || lowerQuestion.includes("github") ||
      lowerQuestion.includes("tiktok") || lowerQuestion.includes("social")) {
    return "CONTACT";
  }
  
  // IDENTITY: Who, what, background questions
  if (lowerQuestion.includes("who are you") || lowerQuestion.includes("who is mukuka") ||
      lowerQuestion.includes("what do you do") || lowerQuestion.includes("describe yourself") ||
      lowerQuestion.includes("tell me about yourself") || lowerQuestion.includes("background")) {
    return "IDENTITY";
  }
  
  // SKILLS: Technical skills, stack, expertise
  if (lowerQuestion.includes("skill") || lowerQuestion.includes("tech stack") ||
      lowerQuestion.includes("technology") || lowerQuestion.includes("expertise") ||
      lowerQuestion.includes("what can you") || lowerQuestion.includes("proficient")) {
    return "SKILLS";
  }
  
  // PROJECTS: Work, projects, builds
  if (lowerQuestion.includes("project") || lowerQuestion.includes("build") ||
      lowerQuestion.includes("work on") || lowerQuestion.includes("what have you built")) {
    return "PROJECTS";
  }
  
  // PROCESS: How, approach, methodology
  if (lowerQuestion.includes("how do you") || lowerQuestion.includes("how would you") ||
      lowerQuestion.includes("approach") || lowerQuestion.includes("methodology") ||
      lowerQuestion.includes("process")) {
    return "PROCESS";
  }
  
  // LEARNING: What learning, gaps, growth
  if (lowerQuestion.includes("learning") || lowerQuestion.includes("still learning") ||
      lowerQuestion.includes("don't know") || lowerQuestion.includes("need support")) {
    return "LEARNING";
  }
  
  return "UNKNOWN";
}

/**
 * Generate a barista-style response using hardcoded portfolio information
 * @param {string} type - Type of interaction ('menu' or 'question')
 * @param {string} value - User input or question
 * @returns {Promise<string>} Barista-style response
 */
/**
 * Helper: Format response based on tone and length requirements
 * (Currently unused but kept for potential future use)
 * @param {string} response - The response text
 * @param {string} question - The original question (to detect tone)
 * @param {boolean} receiptMode - Force receipt-style (ultra short)
 * @returns {string} Formatted response
 */
// function formatResponse(response, question = "", receiptMode = false) {
//   const lowerQuestion = question.toLowerCase();
//   
//   // Detect if user wants shorter response
//   const wantsShorter = lowerQuestion.includes("shorter") || lowerQuestion.includes("summarize") || 
//                        lowerQuestion.includes("one line") || lowerQuestion.includes("one sentence") ||
//                        lowerQuestion.includes("simpler") || lowerQuestion.includes("brief");
//   
//   // If receipt mode or wants shorter, compress to 1-2 sentences max
//   if (receiptMode || wantsShorter) {
//     // Extract first 1-2 sentences, remove emojis, keep it factual
//     const sentences = response.split(/[.!?]+/).filter(s => s.trim().length > 0);
//     const short = sentences.slice(0, 2).join(". ").trim();
//     return short + (short.endsWith(".") ? "" : ".");
//   }
//   
//   // Default: Keep 1-3 sentences, remove excessive emojis
//   const sentences = response.split(/[.!?]+/).filter(s => s.trim().length > 0);
//   const trimmed = sentences.slice(0, 3).join(". ").trim();
//   
//   // Remove excessive emojis (keep max 1-2)
//   const emojiCount = (trimmed.match(/[✨☕💕🎨💻📧📱💼🚀💪🎯]/gu) || []).length;
//   if (emojiCount > 2) {
//     return trimmed.replace(/[✨☕💕🎨💻📧📱💼🚀💪🎯]/gu, "").trim() + ".";
//   }
//   
//   return trimmed + (trimmed.endsWith(".") ? "" : ".");
// }

async function generateAIResponse(type, value, short = false) {
  try {
    const lowerValue = value.toLowerCase().trim();
    
    // Debug logging (remove in production if needed)
    console.log(`[AI Response] Type: ${type}, Value: "${value}", Lower: "${lowerValue}"`);

    // Handle menu clicks
    if (type === "menu") {
      return generateMenuResponse(value);
    }

    // INTENT ROUTING: Classify intent first
    const intent = classifyIntent(value);
    console.log(`[AI Response] Intent: ${intent}`);

    // INTENT GUARDRAILS: Prevent contact info in non-contact intents
    if (intent === "PITCH") {
      // PITCH MODE: No contact info, focus on value
      if (lowerValue.includes("why should") && (lowerValue.includes("hire") || lowerValue.includes("we"))) {
        return generatePitchResponse();
      }
      if (lowerValue.includes("what do you bring") || lowerValue.includes("what would i get")) {
        return generatePitchResponse();
      }
      if (lowerValue.includes("pitch yourself") || lowerValue.includes("pitch mukuka") || 
          lowerValue.includes("30 seconds")) {
        return generatePitchResponse();
      }
      if (lowerValue.includes("startup") && lowerValue.includes("hire")) {
        return generatePitchResponse();
      }
      if (lowerValue.includes("founding engineer")) {
        return generatePitchResponse();
      }
    }

    // Handle questions - match keywords to portfolio sections
    // Expanded to cover Gen Z, Professional, and Millennial question styles
    // IMPORTANT: More specific triggers first, then general ones
    const triggers = {
      skills: [
        "skill", "what can you", "technolog", "tech stack", "language", "stack", "coding",
        "what do you code", "what languages", "what tech", "what tools", "what frameworks",
        "expertise", "proficient", "competent", "what are you good at", "what's your stack",
        "what do you build with", "tech skills", "programming languages", "what can you build",
        "whats your tech", "whats your stack", "what is your tech", "what is your stack",
        "your tech stack", "your stack", "technologies", "tech stack", "programming stack"
      ],
      projects: [
        "project", "build", "portfolio", "made", "creation", "app", "website",
        "what have you built", "what did you make", "show me your work", "your work",
        "what projects", "what apps", "what websites", "portfolio pieces", "your creations"
      ],
      about: [
        "about", "who", "bio", "yourself", "story", "identity", "tell me about",
        "what's your story", "what's your vibe", "what are you about", "what's your thing",
        "introduce yourself", "who is mukuka", "what's your background"
      ],
      interests: [
        "interest", "hobby", "hobbies", "like", "fun", "passion", "outside", "free time",
        "what are you into", "what do you like", "what's your passion", "what drives you",
        "what motivates you", "what are you passionate about", "what do you do for fun",
        "cooking", "travel", "traveling", "travelling", "art", "music", "house music", "afrocentric",
        "reading", "walks", "blog", "fave", "fav", "favorite", "favourite"
      ],
      personal: [
        "cooking", "cook", "travel", "traveling", "art", "reading", "walks", "walk",
        "blog", "fun fact", "hidden talent", "song on repeat", "currently loving", "on repeat",
        "start your day", "morning", "routine", "get into a good mood", "warm drink",
        "inspires you", "inspiration", "who inspires", "what inspires",
        "typical day", "day in the life", "what do you enjoy", "hytel team", "hytel stand out",
        "waykins", "ice 2 water", "house music", "afrocentric", "music you like"
      ],
      genZSlang: [
        "vibe", "tea", "spill the tea", "no cap", "fr ", " for real", "slay", "fire", "goals",
        "lowkey", "highkey", "stan", "main character", "bestie", "period", "it's giving", "ick",
        "bop", "banger", "obsessed", "literally", "ngl", "tbh", "bet", "say less", "dead",
        "flex", "clout", "fam", "lit", "mood", "same energy", "that's fire", "no cap"
      ],
      millennial: [
        "adulting", "side hustle", "grind", "hustle", "work-life balance", "self care",
        "journey", "growth", "mindset", "passion", "crushing it", "networking"
      ],
      hello: [
        "hello", "hi", "hey", "hai", "sup", "greetings", "hii", "heyy", "heyyy", "hiya",
        "what's up", "whatsup", "wassup", "yo", "yoo", "heya", "howdy", "hola", "hey there",
        "good morning", "good afternoon", "good evening", "gm", "gn",
        "what's good", "whats good", "wagwan", "how's it going", "what's poppin", "hey bestie", "hi bestie"
      ],
      contact: [
        "contact", "email", "reach", "hire", "phone", "talk", "social", "tiktok", "linkedin", "github",
        "how to reach", "get in touch", "connect", "collaborate", "work together", "let's talk",
        "where can i find", "how do i contact", "can i reach", "reach out"
      ],
      experience: [
        "experience", "work", "job", "career", "professional", "company", "worked", "do you do",
        "where do you work", "what's your job", "what do you do for work", "current role",
        "what company", "employment", "work history", "professional experience", "work background",
        "where are you working", "what's your position", "what's your role"
      ],
      education: [
        "education", "degree", "university", "school", "graduate", "study", "college",
        "where did you study", "what did you study", "what's your degree", "qualifications",
        "academic background", "where did you go to school", "what school", "alma mater"
      ],
      certification: [
        "certification", "certificate", "cert", "qualified", "credentials", "certifications",
        "what certifications", "what certs", "are you certified", "qualifications"
      ],
      availability: [
        "available", "hiring", "freelance", "freelancing", "consulting", "contract", "remote",
        "open to work", "looking for work", "taking clients", "accepting projects",
        "do you freelance", "are you available", "can you work", "do you consult"
      ],
      rates: [
        "rate", "price", "cost", "charge", "how much", "pricing", "fee", "budget",
        "what's your rate", "how much do you charge", "what do you charge", "pricing",
        "hourly rate", "project cost", "what's your price"
      ],
      collaboration: [
        "collaborate", "work together", "partnership", "team up", "join", "help with",
        "can you help", "can you build", "can you create", "can you make",
        "would you be interested", "want to work", "looking to collaborate"
        // Removed "do you do" - too generic, conflicts with "what do you do"
      ],
      mentorship: [
        "mentor", "mentorship", "teach", "learn", "advice", "guidance", "help me learn",
        "can you mentor", "do you mentor", "teaching", "coaching", "tutoring"
      ],
      location: [
        "where are you", "location", "where do you live", "based", "timezone", "country",
        "city", "where are you from", "where are you located", "where you at"
      ],
      womenInTech: [
        "women in tech", "female engineer", "gender", "diversity", "representation",
        "only female", "women techsters", "advocacy", "empowerment"
      ],
      content: [
        "content", "tiktok", "create content", "content creator", "videos", "posts",
        "social media", "what content", "your content", "do you create"
      ],
    };

    // Priority 1: Check for EXACT greeting phrases first (to avoid false matches)
    // Only match if the question is ONLY a greeting, not a question containing greeting words
    const isOnlyGreeting = triggers.hello.some((t) => {
      const trimmed = lowerValue.trim();
      // Match if it's exactly the greeting or starts with it followed by punctuation
      return trimmed === t || trimmed.startsWith(t + " ") || trimmed === t + "!";
    });
    
    // Also check for standalone greetings (no question words after)
    if (isOnlyGreeting && !lowerValue.includes("?") && lowerValue.length < 20) {
      return generateGreetingResponse();
    }

    // Priority 2: Specific tech stack questions (most specific first)
    if (lowerValue.includes("tech stack") || lowerValue.includes("your stack") || 
        lowerValue.includes("technologies") || lowerValue.includes("programming stack")) {
      return generateSkillsResponse(false); // Full response
    }

    // Priority 3: Other skills-related questions
    if (triggers.skills.some((t) => lowerValue.includes(t))) {
      return generateSkillsResponse(short); // Use short parameter
    }

    // Priority: Granular Answers (ONLY if intent is CONTACT)
    if (intent === "CONTACT") {
      if (lowerValue.includes("email")) return getEmailResponse();
      if (lowerValue.includes("phone") || lowerValue.includes("number")) return getPhoneResponse();
      if (lowerValue.includes("tiktok")) return getTikTokResponse();
      if (lowerValue.includes("github")) return generateContactResponse("github");
      if (lowerValue.includes("linkedin")) return generateContactResponse("linkedin");
    }

    // Personal / lifestyle (cooking, travel, art, music, blog, fun fact, morning, inspiration, Hytel day)
    if (triggers.personal && triggers.personal.some((t) => lowerValue.includes(t))) {
      if (lowerValue.includes("cook") || lowerValue.includes("food")) return generatePersonalResponse("cooking");
      if (lowerValue.includes("travel") || lowerValue.includes("see the world")) return generatePersonalResponse("traveling");
      if (lowerValue.includes("art") && !lowerValue.includes("smart")) return generatePersonalResponse("art");
      if (lowerValue.includes("reading") || lowerValue.includes("read ")) return generatePersonalResponse("reading");
      if (lowerValue.includes("walk")) return generatePersonalResponse("walks");
      if (lowerValue.includes("blog")) return generatePersonalResponse("blog");
      if (lowerValue.includes("fun fact") || lowerValue.includes("hidden talent")) return generateFunFactResponse();
      if (lowerValue.includes("song") || lowerValue.includes("on repeat") || lowerValue.includes("waykins") || lowerValue.includes("ice 2 water") || lowerValue.includes("currently loving") || lowerValue.includes("loving lately")) return generateMusicResponse();
      if (lowerValue.includes("house music") || lowerValue.includes("afrocentric") || lowerValue.includes("music you like") || lowerValue.includes("music do you")) return generateMusicResponse();
      if (lowerValue.includes("start your day") || lowerValue.includes("morning") || lowerValue.includes("routine") || lowerValue.includes("good mood") || lowerValue.includes("warm drink")) return generateMorningRoutineResponse();
      if (lowerValue.includes("inspir") || lowerValue.includes("what drives") || lowerValue.includes("what motivates")) return generateInspirationResponse();
      if (lowerValue.includes("hytel") && (lowerValue.includes("day") || lowerValue.includes("role") || lowerValue.includes("typical") || lowerValue.includes("enjoy") || lowerValue.includes("stand out") || lowerValue.includes("team") || (lowerValue.includes("what") && lowerValue.includes("do")))) return generateHytelDayResponse(lowerValue);
      return generateInterestsResponse();
    }

    // Gen Z / casual vibe — respond in kind when question uses slang
    if (triggers.genZSlang && triggers.genZSlang.some((t) => lowerValue.includes(t))) {
      if (lowerValue.includes("what's the tea") || lowerValue.includes("spill the tea") || lowerValue.includes("what's the vibe") || lowerValue.includes("vibe")) {
        return generateAboutResponse(true);
      }
      if (lowerValue.includes("no cap") || lowerValue.includes("fr ") || lowerValue.includes(" for real")) {
        return "No cap—everything I share is from my real experience. What do you wanna know?";
      }
      if (lowerValue.includes("slay") || lowerValue.includes("that's fire") || lowerValue.includes("goals") || lowerValue.includes("lit")) {
        return "Thanks bestie! Just out here building and helping others in tech. What can I tell you?";
      }
      if (lowerValue.includes("mood") || lowerValue.includes("same energy")) {
        return "Big same energy—I'm all about meaningful work, good vibes, and growth. Ask me anything.";
      }
    }

    // Availability & Work Questions
    if (triggers.availability.some((t) => lowerValue.includes(t))) {
      return generateAvailabilityResponse();
    }

    // Rates/Pricing Questions (Professional deflection)
    if (triggers.rates.some((t) => lowerValue.includes(t))) {
      return "Rates depend on project scope and requirements. Email me at " + PORTFOLIO_INFO.contact.email + " to discuss your specific needs.";
    }

    // Collaboration Questions (check AFTER "what do you do" to avoid false matches)
    if (triggers.collaboration.some((t) => lowerValue.includes(t)) && 
        !lowerValue.includes("what do you do") && !lowerValue.startsWith("what do you")) {
      return generateCollaborationResponse();
    }

    // Mentorship Questions
    if (triggers.mentorship.some((t) => lowerValue.includes(t))) {
      return generateMentorshipResponse();
    }

    // Location Questions
    if (triggers.location.some((t) => lowerValue.includes(t))) {
      return "I'm based in Lusaka, Zambia, but I work remotely and collaborate with people worldwide.";
    }

    // Women in Tech Questions
    if (triggers.womenInTech.some((t) => lowerValue.includes(t))) {
      return generateWomenInTechResponse();
    }

    // Content Creation Questions
    if (triggers.content.some((t) => lowerValue.includes(t))) {
      return generateContentResponse();
    }

    // Priority 4: Specific interests/hobbies questions (check BEFORE generic "what do you do")
    // Check for specific fun/hobbies phrases first
    if (lowerValue.includes("what do you do for fun") || lowerValue.includes("do for fun") || 
        lowerValue.includes("outside of work") || lowerValue.includes("hobbies") ||
        lowerValue.includes("what are you into") || lowerValue.includes("what's your passion")) {
      return generateInterestsResponse();
    }
    
    // Check interests triggers (includes "fun", "interest", "hobby", etc.)
    if (triggers.interests.some((t) => lowerValue.includes(t))) {
      return generateInterestsResponse();
    }

    // Specific personality/preference questions
    if (lowerValue.includes("favorite language") || lowerValue.includes("favourite language") || lowerValue.includes("fav language")) {
      return "I prefer Golang for backend and React for frontend—they're clean, powerful, and well-suited for scalable applications.";
    }

    // Full story / narrative (longer "about" when asked)
    if (lowerValue.includes("full story") || lowerValue.includes("your story") || lowerValue.includes("background story") ||
        (lowerValue.includes("tell me more") && lowerValue.includes("about"))) {
      return PORTFOLIO_INFO.narrative;
    }

    // Priority 4.5: Basic identity questions (BEFORE collaboration to avoid false matches)
    if ((lowerValue.includes("who are you") || lowerValue.includes("what do you do") ||
         lowerValue.includes("tell me about yourself") || lowerValue.includes("who is mukuka") ||
         lowerValue.includes("describe yourself") || lowerValue.includes("one sentence") ||
         lowerValue.includes("one-sentence") || lowerValue.includes("in one sentence")) 
        && !lowerValue.includes("fun") && !lowerValue.includes("hobby") && !lowerValue.includes("interest")
        && !lowerValue.includes("collaborate") && !lowerValue.includes("work together")) {
      if (lowerValue.includes("one sentence") || lowerValue.includes("one-sentence") || lowerValue.includes("in one sentence") ||
          lowerValue.includes("describe yourself in one")) {
        return generateOneSentenceDescription();
      }
      return generateAboutResponse();
    }
    
    // Professional background question
    if (lowerValue.includes("professional background") || lowerValue.includes("what's your professional background")) {
      return generateExperienceResponse();
    }

    // Priority 5: Main category triggers (skills and interests already checked above)
    if (triggers.projects.some((t) => lowerValue.includes(t))) return generateProjectsResponse();
    if (triggers.about.some((t) => lowerValue.includes(t))) return generateAboutResponse();
    if (triggers.contact.some((t) => lowerValue.includes(t))) return generateContactResponse();
    if (triggers.experience.some((t) => lowerValue.includes(t))) return generateExperienceResponse();
    if (triggers.education.some((t) => lowerValue.includes(t))) return generateEducationResponse();
    if (triggers.certification.some((t) => lowerValue.includes(t))) return generateCertificationsResponse();
    
    // Priority 6: Comprehensive question patterns (from test suite)
    
    // Basic Identity Questions
    if (lowerValue.includes("where are you based") || lowerValue.includes("where are you located") || 
        lowerValue.includes("where do you live") || lowerValue.includes("where you at")) {
      return "I'm based in Lusaka, Zambia, but I work remotely and collaborate with people worldwide.";
    }
    
    // Skills & Expertise - More specific
    if (lowerValue.includes("strongest technical skills") || lowerValue.includes("strongest skills") ||
        lowerValue.includes("best at") || lowerValue.includes("expertise") ||
        lowerValue.includes("specialize") || lowerValue.includes("specialization")) {
      return generateSkillsResponse(false);
    }
    
    if (lowerValue.includes("frontend or backend") || lowerValue.includes("frontend vs backend") ||
        lowerValue.includes("more frontend") || lowerValue.includes("more backend")) {
      return "I'm more backend-focused, building scalable systems with Golang and PostgreSQL. I also work with React and Next.js for frontend—I'm a full-stack engineer.";
    }
    
    if (lowerValue.includes("firebase") && (lowerValue.includes("experience") || lowerValue.includes("best at") || lowerValue.includes("expert"))) {
      return "I work with Firebase for real-time databases, authentication, and cloud functions. I'm experienced with Firestore, Firebase Functions, and integrating Firebase into full-stack applications.";
    }
    
    if (lowerValue.includes("ai") || lowerValue.includes("rag") || lowerValue.includes("retrieval-augmented")) {
      if (lowerValue.includes("experience") || lowerValue.includes("work") || lowerValue.includes("build")) {
        return "I work with Generative AI and RAG (Retrieval-Augmented Generation) systems. I'm currently building AI-powered features at Hytel, combining AI with traditional software engineering.";
      }
    }
    
    // Projects - More specific
    if (lowerValue.includes("vintusure") || lowerValue.includes("vintu sure")) {
      return "I don't have a project called VintuSure in my current portfolio. My recent projects include Hytel Elixir and Klapton Insurance Zambia. I'm currently working on AI-powered features at Hytel.";
    }
    
    if (lowerValue.includes("problem does mukuka solve") || lowerValue.includes("problems do you solve") ||
        lowerValue.includes("what problems")) {
      return "I solve problems around building scalable web applications, translating business needs into technical solutions, and creating efficient backend systems. I help teams deliver high-quality software.";
    }
    
    if (lowerValue.includes("currently building") || lowerValue.includes("working on now") ||
        lowerValue.includes("current project")) {
      return "I'm currently working at Hytel as a Peak Software Developer, building AI-powered features and scalable web applications.";
    }
    
    if (lowerValue.includes("best represents") || lowerValue.includes("best project") ||
        lowerValue.includes("favorite project") || lowerValue.includes("favourite project")) {
      return "Hytel Elixir best represents my skills. It combines AI, project management, and scalable architecture—exactly the kind of full-stack challenge I work on.";
    }
    
    // AI / Problem-Solving Questions
    if (lowerValue.includes("design an ai system") || lowerValue.includes("design ai") ||
        lowerValue.includes("ai system for")) {
      return "I start by understanding the business problem, then choose the right AI approach (RAG for knowledge retrieval, or generative AI for content). I focus on scalability, data quality, and user experience.";
    }
    
    if (lowerValue.includes("approach building scalable") || lowerValue.includes("build scalable systems") ||
        lowerValue.includes("scalable systems")) {
      return "I focus on clean code structure, efficient database design (PostgreSQL with proper indexing), microservices when needed, caching strategies, and monitoring. I think about performance from day one.";
    }
    
    if (lowerValue.includes("firebase vs") || lowerValue.includes("firebase or traditional") ||
        lowerValue.includes("decide between firebase")) {
      return "Firebase is good for rapid prototyping, real-time features, and serverless backends. Traditional backends (like Golang/PostgreSQL) are better for complex business logic and when you need more control. I choose based on project needs.";
    }
    
    if (lowerValue.includes("trade-offs") || lowerValue.includes("tradeoffs") ||
        lowerValue.includes("consider when designing")) {
      return "I consider: performance vs. development speed, scalability vs. complexity, cost vs. features, and user experience vs. technical debt. Every decision balances business goals with code quality.";
    }
    
    // Edge & Follow-Up Questions
    if (lowerValue.includes("explain that in simpler terms") || lowerValue.includes("simpler terms") ||
        lowerValue.includes("explain like i'm") || lowerValue.includes("eli5") ||
        lowerValue.includes("not technical")) {
      return "I build websites and apps that work smoothly and handle lots of users. I create both the behind-the-scenes functionality and the user interface. I solve problems with code.";
    }
    
    if (lowerValue.includes("summarize") && (lowerValue.includes("experience") || lowerValue.includes("3 bullet") || lowerValue.includes("bullet points"))) {
      return `• Full-stack engineer: React, Next.js, Node.js, Firebase, GCP—scalable web apps and AI/RAG
• Currently at Hytel: AI-powered features, RAG pipelines, and project management systems
• Women in Tech Advocate and Content Creator; love cooking, travel, and art`;
    }
    
    if (lowerValue.includes("what makes mukuka different") || lowerValue.includes("what makes you different") ||
        lowerValue.includes("what sets you apart")) {
      return "I combine technical skills with advocacy and content creation. I've been the only woman in my department, so I understand the challenges and use that experience to help others. I'm always learning and bringing fresh perspectives.";
    }
    
    if (lowerValue.includes("if i hired mukuka") || lowerValue.includes("if i hired you") ||
        lowerValue.includes("what would i get")) {
      return "You'd get a full-stack engineer who builds scalable solutions, a problem-solver who translates business needs into code, a team player who communicates well, and someone who's always learning. I bring diverse perspectives and a passion for quality.";
    }
    
    // Receipt-Style / Short Answer Tests
    if (lowerValue.includes("one-line summary") || lowerValue.includes("one line summary") ||
        lowerValue.includes("one sentence summary")) {
      return generateOneSentenceDescription();
    }
    
    if (lowerValue.includes("specialize in") && (lowerValue.includes("max") || lowerValue.includes("10 words") || lowerValue.includes("words"))) {
      return "Full-stack engineering, backend systems, AI integration, scalable web apps.";
    }
    
    if (lowerValue.includes("top 3 skills") || lowerValue.includes("3 skills only")) {
      return "1. Full-stack & cloud (React, Next.js, Node.js, Firebase, GCP)\n2. Backend & APIs (Golang, PostgreSQL, REST)\n3. AI/RAG integration & problem-solving";
    }
    
    if (lowerValue.includes("why should i talk to mukuka") || lowerValue.includes("why should i talk to you") ||
        (lowerValue.includes("why") && lowerValue.includes("talk") && lowerValue.includes("mukuka"))) {
      return "I bring technical expertise, fresh perspectives, and a passion for building things that matter. I'm a problem-solver who communicates well and delivers quality work.";
    }
    
    // Stress / Failure Tests
    if (lowerValue.includes("doesn't mukuka know") || lowerValue.includes("don't know") ||
        lowerValue.includes("not know yet") || lowerValue.includes("still learning")) {
      return "I'm always learning. I'm still exploring advanced AI/ML models, deeper system design patterns, and new frameworks. I'm honest about what I don't know—that's how I grow.";
    }
    
    if (lowerValue.includes("not a good fit for") || lowerValue.includes("not good fit") ||
        lowerValue.includes("wouldn't be good")) {
      return "I might not be the best fit for projects that need deep mobile app development (I'm more web-focused), very low-level systems programming, or projects that don't value code quality. But I'm always open to learning new things.";
    }
    
    if (lowerValue.includes("need support") || lowerValue.includes("would need help") ||
        lowerValue.includes("where would need support")) {
      return "On a team, I'd appreciate support with DevOps and infrastructure at scale, advanced AI/ML model training, and design systems. I'm strong in backend and full-stack, but I value collaboration and learning from experts.";
    }
    
    // Personality & Vibe
    if (lowerValue.includes("what's it like working with mukuka") || lowerValue.includes("like working with you") ||
        lowerValue.includes("what are you like to work with")) {
      return "Working with me is collaborative. I communicate clearly, deliver on time, bring creative solutions, and I'm always learning. I value team input and I'm not afraid to ask questions.";
    }
    
    if (lowerValue.includes("handle challenges") || lowerValue.includes("handle blockers") ||
        lowerValue.includes("deal with problems")) {
      return "When I hit challenges, I break problems down into smaller pieces, research and learn what I need, ask for help when stuck, stay calm under pressure, and find creative solutions.";
    }
    
    if (lowerValue.includes("approach collaboration") || lowerValue.includes("how do you collaborate")) {
      return "I communicate openly, listen to different perspectives, share knowledge freely, and I'm always ready to help teammates. I believe the best solutions come from working together.";
    }
    
    // Final Boss Questions (handled by PITCH mode above, but keeping fallbacks)
    if (lowerValue.includes("short intro") && (lowerValue.includes("landing page") || lowerValue.includes("intro"))) {
      return "Mukuka Nkamba — Full Stack Software Engineer & AI Enthusiast. Building scalable web applications and AI-powered solutions. Passionate about problem-solving, Women in Tech advocacy, and turning business needs into high-quality technical solutions.";
    }
    
    // Priority 7: Generic greetings (only if nothing else matched and it's clearly a greeting)
    // Make this even more restrictive - only match if it's very short and clearly just a greeting
    const isShortGreeting = lowerValue.length < 15 && triggers.hello.some((t) => {
      // Only match if the greeting word is at the start or the whole string
      return lowerValue === t || lowerValue.startsWith(t + " ") || lowerValue.startsWith(t + "!");
    });
    
    if (isShortGreeting) {
      return generateGreetingResponse();
    }

    // Default response for unrecognized questions
    return generateDefaultResponse();
  } catch (error) {
    console.error("Response generation error:", error);
    return "I don't have enough info to answer that yet. Feel free to email me at " + PORTFOLIO_INFO.contact.email + " for more details.";
  }
}

/**
 * Generate response for menu item clicks
 */
function generateMenuResponse(menuItem) {
  const responses = {
    skills: generateSkillsResponse(),
    projects: generateProjectsResponse(),
    about: generateAboutResponse(),
    contact: generateContactResponse(),
    experience: generateExperienceResponse(),
    education: generateEducationResponse(),
    certifications: generateCertificationsResponse(),
  };

  const key = menuItem.toLowerCase();
  return responses[key] || "I don't have enough info about " + menuItem + " yet. Feel free to ask me about skills, projects, experience, or contact info.";
}

/**
 * Generate response about skills
 */
function generateSkillsResponse(single = false) {
  if (single) {
    return "I'm strongest in full-stack: React, Next.js, Node.js, Firebase, GCP, plus backend with Golang and PostgreSQL.";
  }
  const s = PORTFOLIO_INFO.skills;
  return `Frontend: ${s.frontend.join(", ")}. Backend: ${s.backend.join(", ")}. Cloud & DevOps: ${s.cloudDevOps.join(", ")}. Databases: ${s.databases.join(", ")}. Tools: ${s.tools.join(", ")}. AI & Data: ${s.ai.join(", ")}.`;
}

/**
 * Generate response about projects
 */
function generateProjectsResponse() {
  const projects = PORTFOLIO_INFO.projects;
  return `Recent projects: ${projects[0].name} (${projects[0].description}), ${projects[1].name} (${projects[1].description}). Currently working on AI-powered features at Hytel.`;
}

/**
 * Generate response about the person (professional or casual/Gen Z tone)
 */
function generateAboutResponse(casual = false) {
  if (casual) {
    return "I'm Mukuka—Full Stack Software Engineer and AI enthusiast. I build scalable web apps with React, Next.js, Node.js, Firebase, and GCP, and I'm big on RAG and clean code. I also love cooking, traveling, art, and house music. Women in Tech advocate and content creator. What do you wanna know?";
  }
  return "I'm Mukuka Nkamba, a Full Stack Software Engineer and AI & GenAI (RAG) enthusiast. I build scalable, cloud-native applications with React, Next.js, Node.js, Firebase, and GCP, and I'm proficient in Golang, PHP, PostgreSQL, TypeScript, and Python. I focus on turning business needs into reliable technical solutions and I'm a Content Creator and Women in Tech Advocate.";
}

/**
 * Generate one-sentence description (for receipt-style responses)
 */
function generateOneSentenceDescription() {
  return "I'm Mukuka Nkamba, a Full Stack Software Engineer and AI & GenAI (RAG) enthusiast who builds scalable, cloud-native applications and loves cooking, travel, and art.";
}

/**
 * Generate response about interests
 */
function generateInterestsResponse(single = false) {
  if (single) {
    const hobby = uniqueInterests[Math.floor(Math.random() * uniqueInterests.length)];
    return `I'm passionate about ${hobby}.`;
  }
  return "I'm into AI, cloud architecture, clean code, and mentorship. Beyond that I love cooking, traveling, art, reading, and taking walks. I'm a Women in Tech Advocate and Content Creator—blog, mentorship, and resources for women in STEM. I also love house music and the afrocentric side of things.";
}

/**
 * Personal / lifestyle (cooking, travel, art, reading, walks, blog)
 */
function generatePersonalResponse(topic) {
  const p = PORTFOLIO_INFO.personal;
  if (p[topic]) return p[topic];
  return generateInterestsResponse();
}

/**
 * Fun fact / hidden talent
 */
function generateFunFactResponse() {
  const p = PORTFOLIO_INFO.personal;
  return p.funFact || "I run a blog where I share my thoughts and experiences. I also graduated as the only woman in my Software Engineering department at uni.";
}

/**
 * Music — song on repeat, house music, afrocentric
 */
function generateMusicResponse() {
  const p = PORTFOLIO_INFO.personal;
  const m = PORTFOLIO_INFO.music;
  const parts = [];
  if (p.songOnRepeat) parts.push(p.songOnRepeat);
  if (m.house) parts.push(m.house);
  if (m.afrocentric) parts.push(m.afrocentric);
  return parts.length ? parts.join(" ") : "I love house music and the afrocentric aspect of things. Lately I've had Ice 2 Water by Waykins on repeat.";
}

/**
 * Morning routine / start your day
 */
function generateMorningRoutineResponse() {
  return PORTFOLIO_INFO.personal.morningRoutine || "I like to start my day with a warm drink—it helps me wake up and get into a positive mindset before work.";
}

/**
 * Inspiration / what drives you
 */
function generateInspirationResponse() {
  return PORTFOLIO_INFO.personal.inspiration || "I'm inspired by fulfillment—doing meaningful work and growing personally and professionally.";
}

/**
 * Hytel — role, typical day, what you enjoy, what makes Hytel stand out
 */
function generateHytelDayResponse(question) {
  const h = PORTFOLIO_INFO.hytel;
  if (question.includes("role") || question.includes("what do you do at hytel")) return h.role + " " + h.typicalDay;
  if (question.includes("typical") || question.includes("day")) return h.typicalDay;
  if (question.includes("enjoy") || question.includes("team")) return h.enjoy;
  if (question.includes("stand out")) return h.standsOut;
  return h.role + " " + h.typicalDay + " " + h.enjoy + " " + h.standsOut;
}

/**
 * Generate greeting response
 */
function generateGreetingResponse() {
  const greeting = BARISTA_RESPONSES.greetings[
    Math.floor(Math.random() * BARISTA_RESPONSES.greetings.length)
  ];
  return `${greeting} I'm here to answer questions about Mukuka. Ask me about her work (skills, experience, projects), contact, or personal stuff—cooking, travel, art, music, what she's listening to, her day at Hytel, or what inspires her. Go ahead!`;
}

/**
 * Generate pitch response (for hiring/evaluation questions)
 * PITCH MODE: No contact info, focus on value and impact
 */
function generatePitchResponse() {
  return `Here's what I bring to the table:

• Full-stack engineer: React, Next.js, Node.js, Firebase, GCP—scalable web apps and AI/RAG features
• Experience at Hytel, Fin360, Kuala Tech—I deliver quality work on time and collaborate in Agile teams
• Women in Tech Advocate and Content Creator—diverse perspectives, mentorship, and clear communication

I focus on business impact, clean code, and reliability.`;
}

/**
 * Generate contact response
 */
function generateContactResponse(filter = null) {
  const c = PORTFOLIO_INFO.contact;
  if (filter === "email") return c.email;
  if (filter === "phone") return c.phone;
  if (filter === "github") return c.github;
  if (filter === "linkedin") return c.linkedin;
  return `Email: ${c.email}. Phone: ${c.phone}. LinkedIn: ${c.linkedin}. GitHub: ${c.github}.`;
}

/**
 * Generate response about work experience
 */
function generateExperienceResponse() {
  const exp = PORTFOLIO_INFO.experience;
  const current = exp[0];
  return `I'm currently ${current.role} at ${current.company} (${current.period}). Before that: Full Stack Developer at Fin360, Junior Software Engineer at Kuala Tech, and Software Engineer Intern at Cyprus Codes. I build scalable, cloud-native apps and work with international Agile teams.`;
}

/**
 * Generate response about education
 */
function generateEducationResponse() {
  const edu = PORTFOLIO_INFO.education;
  const uni = edu[0];
  return `I graduated with a ${uni.degree} from ${uni.institution} (${uni.period})—${uni.note} I also have a High School Certificate from Chipembi Girls Secondary School. Plus Tech4Dev WomenTechsters Data Analyst program and Hytel AI Bootcamp.`;
}

/**
 * Generate response about certifications
 */
function generateCertificationsResponse() {
  const certs = PORTFOLIO_INFO.certifications;
  return `Certifications: ${certs.join(", ")}.`;
}

/**
 * Generate response about availability and work
 */
function generateAvailabilityResponse() {
  return `I'm currently working full-time at Hytel, but I'm open to interesting freelance projects, collaborations, mentorship opportunities, and content partnerships. Contact me at ${PORTFOLIO_INFO.contact.email}.`;
}

/**
 * Generate response about collaboration
 */
function generateCollaborationResponse() {
  return `I'm open to collaborating on projects, content creation, educational initiatives, and startup ideas. Contact me at ${PORTFOLIO_INFO.contact.email} to discuss.`;
}

/**
 * Generate response about mentorship
 */
function generateMentorshipResponse() {
  return `As a Women in Tech Advocate, I offer mentorship in Software Engineering, Data Analysis, Career Growth, and Portfolio Guidance. I've been the only woman in my department, so I understand the challenges. Contact me at ${PORTFOLIO_INFO.contact.email}.`;
}

/**
 * Generate response about Women in Tech
 */
function generateWomenInTechResponse() {
  return "I'm a Women in Tech Advocate. I graduated as the only female in my Software Engineering department at CIU and completed the Tech4Dev WomenTechsters Data Analyst program (Grade: A+). I create content to empower women in STEM and advocate for diversity in tech.";
}

/**
 * Generate response about content creation
 */
function generateContentResponse() {
  return `I create tech content on TikTok @coffee-to-code, sharing coding tips, career advice, Women in Tech stories, and day-in-the-life content. I make tech accessible and show the authentic side of being a developer. TikTok: ${PORTFOLIO_INFO.contact.tiktok}`;
}

/**
 * Generate default response for unrecognized questions — suggest topics
 */
function generateDefaultResponse() {
  return "I'm not sure how to answer that one. You can ask me about my background, skills, experience, projects, or contact. Or try: what I'm into (cooking, travel, art, music), my typical day at Hytel, fun facts, or what inspires me. For more: " + PORTFOLIO_INFO.contact.email;
}

/**
 * Granular Specific Answers
 */
function getEmailResponse() {
  return PORTFOLIO_INFO.contact.email;
}

function getPhoneResponse() {
  return PORTFOLIO_INFO.contact.phone;
}

function getTikTokResponse() {
  return PORTFOLIO_INFO.contact.tiktok;
}

module.exports = { generateAIResponse };
