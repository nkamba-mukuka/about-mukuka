// MVP: Hardcoded portfolio information with barista-style responses
// No AI model calls - cost-effective approach for MVP

// Hardcoded portfolio information
const PORTFOLIO_INFO = {
  name: "Mukuka Nkamba",
  title: "Full Stack Software Engineer | Data Analyst",
  contact: {
    phone: "+260962398849",
    email: "mukukankambaa@gmail.com",
    linkedin: "linkedin.com/in/mukuka-nkamba-4a9b16290",
    github: "github.com/nkamba-mukuka",
    tiktok: "tiktok.com/@coffee-to-code",
  },
  bio: "I'm a results-oriented Full Stack Engineer and Data Analyst with 1+ years experience in Golang, PHP, and Next.js. I thrive in backend development and problem-solving. Beyond code, I'm a Women in Tech Advocate and Content Creator dedicated to empowering others in STEM. I love translating business needs into high-quality technical solutions! ☕✨",
  skills: {
    backend: ["Golang", "PHP", "PostgreSQL", "node.js"],
    frontend: ["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript"],
    frameworks: ["Yii2", "Laravel"],
    dataAnalysis: ["Data Cleaning & Wrangling", "Data Visualization", "Statistical Analysis", "Critical Thinking", "Business Acumen"],
    databases: ["SQL", "Gorm"],
    tools: ["Git", "Postman", "Kubernetes", "Tableau", "Power BI", "Excel", "Google Sheets"],
    ai: ["AI Fundamentals", "Generative AI", "Retrieval-Augmented Generation (RAG)"],
  },
  experience: [
    {
      role: "Peak Software Developer",
      company: "Hytel",
      location: "Lusaka, Zambia",
      period: "August 2025 - Present",
      description: "Full stack software developer and AI enthusiast working on meaningful, scalable projects in a dynamic, fast-paced environment.",
      tech: ["AI", "Web Development"],
    },
    {
      role: "Full Stack Developer",
      company: "Fin360 Limited",
      location: "Lusaka, Zambia",
      period: "May 2025 - August 2025",
      description: "Developing and maintaining full stack web applications using PHP (Yii2) for backend and JavaScript/HTML/CSS for frontend. Designed authentication, role-based access control, and data reporting tools. Consumed and developed RESTful APIs, improved performance through query optimization.",
      tech: ["PHP", "Yii2", "JavaScript", "HTML", "CSS", "RESTful APIs"],
    },
    {
      role: "Junior Software Engineer",
      company: "Kuala Tech",
      location: "Lusaka, Zambia",
      period: "May 2024 - February 2025",
      description: "Built and maintained backend APIs using Golang and PostgreSQL, improving system performance. Developed frontend components with React, Next.js, and TypeScript. Optimized database queries and collaborated in a 4-person Agile team.",
      tech: ["Golang", "PostgreSQL", "React", "Next.js", "TypeScript"],
    },
    {
      role: "Web Developer",
      company: "Nilandi Web Services",
      location: "Lusaka, Zambia",
      period: "January 2024 - May 2024",
      description: "Customized WordPress themes and plugins using PHP, HTML, CSS, and JavaScript. Assisted with site maintenance, performance optimization, and mobile responsiveness.",
      tech: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    },
    {
      role: "Software Engineer Intern",
      company: "Cyprus Codes, Atabilisim",
      location: "Nicosia, Cyprus",
      period: "September 2021 - August 2022",
      description: "Created and tested user interfaces using HTML, CSS, React, and Angular. Worked in an Agile environment, participating in code reviews and daily standups. Enhanced front-end performance through optimization and debugging.",
      tech: ["HTML", "CSS", "React", "Angular"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Cyprus International University",
      period: "2019 - 2023",
      note: "Graduated as the only female in my department",
    },
    {
      degree: "High School Certificate",
      institution: "Chipembi Girls Secondary School",
      period: "2014 - 2018",
    },
  ],
  certifications: [
    "HTML5 Certification - Enduonix Learning Solutions",
    "Backend Master Class [Golang + Postgres + Kubernetes + gRPC] - Udemy",
    "Tech4Dev WomenTechsters Data Analyst Cohort 4 (Grade: A+)",
  ],
  projects: [
    {
      name: "Hytel Elixir",
      description: "An agile methodology system that empowers teams to deliver exceptional results with intelligent project management, seamless collaboration, and data-driven insights.",
      link: "https://elixir-98f15.web.app/",
      tech: ["Project Management", "AI", "Collaboration"],
    },
    {
      name: "Klapton Insurance Zambia (KIZ)",
      description: "Digital insurance for your home. KIZ serves clients with superior insurance products and services that promote economic growth through expertise.",
      link: "https://kiz.co.zm/",
      tech: ["FinTech", "Zambia", "Digital Insurance"],
    },
    {
      name: "First Portfolio",
      description: "My initial showcase of work and design evolution.",
      link: "https://portfoliox-git-main-mukukankambaa-gmailcoms-projects.vercel.app/",
      tech: ["Web Design", "Portfolio"],
    }
  ],
  interests: [
    "AI & Machine Learning",
    "Women in Tech Advocacy",
    "Content Creation",
    "Mentorship",
    "Problem Solving",
    "Building Scalable Applications",
    "Cooking",
    "Interior Design",
  ],
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
 * Generate a barista-style response using hardcoded portfolio information
 * @param {string} type - Type of interaction ('menu' or 'question')
 * @param {string} value - User input or question
 * @returns {Promise<string>} Barista-style response
 */
async function generateAIResponse(type, value) {
  try {
    const lowerValue = value.toLowerCase().trim();

    // Handle menu clicks
    if (type === "menu") {
      return generateMenuResponse(value);
    }

    // Handle questions - match keywords to portfolio sections
    // Expanded to cover Gen Z, Professional, and Millennial question styles
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
        "what motivates you", "what are you passionate about", "what do you do for fun"
      ],
      hello: [
        "hello", "hi", "hey", "hai", "sup", "greetings", "hii", "heyy", "heyyy",
        "what's up", "whatsup", "wassup", "yo", "heya", "howdy", "hola", "hey there"
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
        "can you help", "can you build", "can you create", "do you do", "can you make",
        "would you be interested", "want to work", "looking to collaborate"
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

    // Priority: Check for tech stack questions BEFORE greetings (more specific first)
    // Use full response for tech stack questions (not the short single response)
    if (triggers.skills.some((t) => lowerValue.includes(t))) {
      // Check if it's specifically asking about tech stack (full answer)
      if (lowerValue.includes("tech stack") || lowerValue.includes("stack") || lowerValue.includes("technologies")) {
        return generateSkillsResponse(false); // Full response
      }
      return generateSkillsResponse(true); // Short response for other skill questions
    }

    // Priority: Greetings (but only if no other match)
    if (triggers.hello.some((t) => lowerValue.includes(t))) return generateGreetingResponse();

    // Priority: Granular Answers
    if (lowerValue.includes("email")) return getEmailResponse();
    if (lowerValue.includes("phone") || lowerValue.includes("number")) return getPhoneResponse();
    if (lowerValue.includes("tiktok")) return getTikTokResponse();
    if (lowerValue.includes("github")) return generateContactResponse("github");
    if (lowerValue.includes("linkedin")) return generateContactResponse("linkedin");

    // Gen Z / Casual Questions
    if (lowerValue.includes("what's the tea") || lowerValue.includes("spill the tea") || lowerValue.includes("what's the vibe")) {
      return generateAboutResponse();
    }
    if (lowerValue.includes("no cap") || lowerValue.includes("fr ") || lowerValue.includes(" for real")) {
      return "Ouuu, no cap! Everything I share is 100% real, babe! ✨ I'm all about authenticity and keeping it real. What would you like to know? ☕💕";
    }
    if (lowerValue.includes("slay") || lowerValue.includes("that's fire") || lowerValue.includes("goals")) {
      return "Aww, thank you babe! ✨ That's so sweet! I'm just out here trying to build cool things and help others in tech. What can I help you with? ☕💕";
    }

    // Availability & Work Questions
    if (triggers.availability.some((t) => lowerValue.includes(t))) {
      return generateAvailabilityResponse();
    }

    // Rates/Pricing Questions (Professional deflection)
    if (triggers.rates.some((t) => lowerValue.includes(t))) {
      return "Ouuu, great question! 💼✨ Rates depend on the project scope and requirements. Let's chat about your specific needs! Feel free to email me at " + PORTFOLIO_INFO.contact.email + " and we can discuss details. I'm always open to interesting projects! ☕";
    }

    // Collaboration Questions
    if (triggers.collaboration.some((t) => lowerValue.includes(t))) {
      return generateCollaborationResponse();
    }

    // Mentorship Questions
    if (triggers.mentorship.some((t) => lowerValue.includes(t))) {
      return generateMentorshipResponse();
    }

    // Location Questions
    if (triggers.location.some((t) => lowerValue.includes(t))) {
      return "Ouuu, I'm based in Lusaka, Zambia! 🇿🇲✨ But I work remotely and I'm always open to collaborating with amazing people worldwide. Location doesn't limit us—let's build something cool together! ☕💕";
    }

    // Women in Tech Questions
    if (triggers.womenInTech.some((t) => lowerValue.includes(t))) {
      return generateWomenInTechResponse();
    }

    // Content Creation Questions
    if (triggers.content.some((t) => lowerValue.includes(t))) {
      return generateContentResponse();
    }

    // Specific personality/preference questions
    if (lowerValue.includes("favorite language") || lowerValue.includes("favourite language") || lowerValue.includes("fav language")) {
      return "Ouuu, I definitely have a soft spot for Golang and React! They're just so clean and powerful. ✨☕";
    }

    if (lowerValue.includes("fun") || lowerValue.includes("outside of work") || lowerValue.includes("hobbies")) {
      return generateInterestsResponse();
    }

    if (lowerValue.includes("who are you") || lowerValue.includes("what do you do") || lowerValue.includes("tell me about yourself")) {
      return generateAboutResponse();
    }

    // Main category triggers (skills already checked above, but keep for other variations)
    if (triggers.projects.some((t) => lowerValue.includes(t))) return generateProjectsResponse();
    if (triggers.about.some((t) => lowerValue.includes(t))) return generateAboutResponse();
    if (triggers.contact.some((t) => lowerValue.includes(t))) return generateContactResponse();
    if (triggers.experience.some((t) => lowerValue.includes(t))) return generateExperienceResponse();
    if (triggers.education.some((t) => lowerValue.includes(t))) return generateEducationResponse();
    if (triggers.certification.some((t) => lowerValue.includes(t))) return generateCertificationsResponse();
    if (triggers.interests.some((t) => lowerValue.includes(t))) return generateInterestsResponse();

    // Default response for unrecognized questions
    return generateDefaultResponse();
  } catch (error) {
    console.error("Response generation error:", error);
    return "Oops! Something went wrong ☕ Let's try that again, gorgeous! ✨";
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
  return responses[key] || "Ouuu, great choice! " + menuItem + " is honestly one of my favorites! ✨";
}

/**
 * Generate response about skills
 */
function generateSkillsResponse(single = false) {
  if (single) {
    return "Sure babe! One of my thrive zones is backend dev using Golang and PostgreSQL—it's honestly too good! ✨☕";
  }
  return `Ouuu, this is too good! Here's the tea on my skills ☕✨
  
I'm a full-stack engineer who thrives on building scalable systems with React, Golang, PHP, PostgreSQL, node.js, and Next.js. 

Translating business needs into reliable technical architecture—that’s exactly where I shine! ✨💕`;
}

/**
 * Generate response about projects
 */
function generateProjectsResponse() {
  return `Ouuu, let's talk about builds! ✨

I've been working on some high-impact projects:

1. Hytel Elixir (https://elixir-98f15.web.app/) - Agile management with data-driven insights.
2. Klapton Insurance Zambia (https://kiz.co.zm/) - Superior digital insurance.
3. My First Portfolio (https://portfoliox-git-main-mukukankambaa-gmailcoms-projects.vercel.app/) - Where it all began!

Every project is a new chance to innovate. ☕💕`;
}

/**
 * Generate response about the person
 */
function generateAboutResponse() {
  return `Hey gorgeous! ☕✨ I'm Mukuka Nkamba, a Full Stack Software Engineer, AI enthusiast, and Data Analyst with a strong backend focus. 

I build scalable web applications using Golang, PHP, PostgreSQL, React, and Next.js. I enjoy turning business needs into clean, reliable technical solutions. 

Known for problem-solving and delivering high-quality work. 💕✨`;
}

/**
 * Generate response about interests
 */
function generateInterestsResponse(single = false) {
  if (single) {
    const hobby = uniqueInterests[Math.floor(Math.random() * uniqueInterests.length)];
    return `Ouuu, great question! One of my favorites is definitely ${hobby}—it's all about those perfect vibes! 🎨✨`;
  }
  return `Ouuu, I love this! I'm so passionate about AI, mentorship, and building scalable applications! ☕✨

Beyond coding, I’m a dedicated Women in Tech Advocate and Content Creator. When I'm not advocating for others in STEM, you'll find me in the kitchen trying new recipes or redecorating—it’s all about those perfect vibes. 🎨💕`;
}

/**
 * Generate greeting response
 */
function generateGreetingResponse() {
  const greeting = BARISTA_RESPONSES.greetings[
    Math.floor(Math.random() * BARISTA_RESPONSES.greetings.length)
  ];
  return `${greeting} I'm here to spill the tea on Mukuka's journey. ✨ Ask me about skills, projects, or experience—I'm an open book, babe! 💕`;
}

/**
 * Generate contact response
 */
function generateContactResponse(filter = null) {
  const contact = PORTFOLIO_INFO.contact;

  if (filter === "email") return `Sure gorgeous! My email is ${contact.email}—feel free to reach out anytime! 📧✨`;
  if (filter === "phone") return `Ouuu, yes! You can reach me at ${contact.phone}—so excited to chat! 📱☕`;
  if (filter === "github") return `Check out my builds at ${contact.github}! It's giving high-performance energy! 💻✨`;
  if (filter === "linkedin") return `Let's connect on LinkedIn at ${contact.linkedin}! Can't wait to link up! 💼💕`;

  return `Ouuu, yes! I'd absolutely love to connect! Here's how you can reach me, gorgeous: ✨

📧 EMAIL: ${contact.email}
📱 PHONE: ${contact.phone}
💼 LINKEDIN: ${contact.linkedin}
💻 GITHUB: ${contact.github}
📱 TIKTOK: ${contact.tiktok}

Feel free to reach out about collaboration, mentorship, or literally just to say hello. I'm always down to chat! 💕☕`;
}

/**
 * Generate response about work experience
 */
function generateExperienceResponse() {
  return `Ouuu, my professional journey is giving main character. ✨

With experience across startups and established firms like Kuala Tech, Hytel and Fin360, I’ve spent my career building scalable solutions and collaborating in Agile teams. 

I focus on delivering high-quality results while constantly learning and growing in the tech world. It's truly too good! ☕💕`;
}

/**
 * Generate response about education
 */
function generateEducationResponse() {
  return `Ouuu, education but make it iconic! ✨

I graduated as the only female in my Software Engineering department at CIU, which was such a vibe and a major flex. 💅 

Plus, I’ve completed specialized data training—I’m literally always leveling up for the love of the craft. 💕☕`;
}

/**
 * Generate response about certifications
 */
function generateCertificationsResponse() {
  return `Ouuu, yes! Let's talk certificates! ✨

From Backend Master Classes in Golang and Kubernetes to specialized Data Analysis honors, I'm dedicated to continuous learning. 

These reflect my commitment to excellence and professional development—honestly, it's just good vibes only. ☕💕`;
}

/**
 * Generate response about availability and work
 */
function generateAvailabilityResponse() {
  return `Ouuu, great question! ✨ I'm currently working full-time at Hytel, but I'm always open to:
  
💼 Interesting freelance projects
🤝 Meaningful collaborations
📚 Mentorship opportunities
🎬 Content partnerships

Feel free to reach out at ${PORTFOLIO_INFO.contact.email} and let's chat about how we can work together! I love connecting with fellow creators and builders. ☕💕`;
}

/**
 * Generate response about collaboration
 */
function generateCollaborationResponse() {
  return `Ouuu, yes! I'm absolutely down to collaborate! ✨ I love working with other creators, developers, and innovators. 

Whether it's:
💻 Building something cool together
📱 Content creation projects
🎓 Educational initiatives
💡 Startup ideas

I'm always excited to explore new opportunities! Let's connect at ${PORTFOLIO_INFO.contact.email} and see what magic we can create together! ☕💕`;
}

/**
 * Generate response about mentorship
 */
function generateMentorshipResponse() {
  return `Ouuu, I love this! Mentorship is honestly one of my favorite things! ✨ As a Women in Tech Advocate, I'm passionate about helping others grow in STEM.

I offer mentorship in:
💻 Software Engineering & Development
📊 Data Analysis
🚀 Career Growth & Tech Industry Navigation
💪 Building Confidence in Tech Spaces
🎯 Portfolio & Project Guidance

I've been through the journey of being the only woman in my department, so I get it! Let's connect at ${PORTFOLIO_INFO.contact.email} or check out my TikTok @coffee-to-code for daily tech tips! ☕💕`;
}

/**
 * Generate response about Women in Tech
 */
function generateWomenInTechResponse() {
  return `Ouuu, this is my heart! 💕✨ I'm a dedicated Women in Tech Advocate and I'm so passionate about this!

My journey:
🎓 Graduated as the only female in my Software Engineering department at CIU
📚 Completed Tech4Dev WomenTechsters Data Analyst program (Grade: A+!)
🎬 Create content to empower women in STEM
💪 Advocate for diversity and inclusion in tech

I believe representation matters and I'm here to show that women absolutely belong in tech! If you're a woman in tech (or aspiring to be), let's connect! I'm always here to support and cheer you on! ☕✨

Check out my content on TikTok @coffee-to-code or reach out at ${PORTFOLIO_INFO.contact.email}! 💕`;
}

/**
 * Generate response about content creation
 */
function generateContentResponse() {
  return `Ouuu, yes! I'm a Content Creator too! ✨ I create tech content on TikTok @coffee-to-code where I share:
  
💻 Coding tips & tutorials
🚀 Career advice for tech professionals
💪 Women in Tech stories & inspiration
☕ Day-in-the-life of a software engineer
📚 Learning resources & recommendations

I love making tech accessible and showing the real, authentic side of being a developer! Follow me for daily tech vibes and feel free to reach out if you want to collaborate on content! ☕💕

TikTok: ${PORTFOLIO_INFO.contact.tiktok}`;
}

/**
 * Generate default response for unrecognized questions
 */
function generateDefaultResponse() {
  return "Oops! Sorry babe, that's not on the menu. ☕ Email me at: mukukahnkamba@gmail.com for the secret details! ✨";
}

/**
 * Granular Specific Answers
 */
function getEmailResponse() {
  return `📧 ${PORTFOLIO_INFO.contact.email}`;
}

function getPhoneResponse() {
  return `📱 ${PORTFOLIO_INFO.contact.phone}`;
}

function getTikTokResponse() {
  return `📱 My TikTok? Catch me at: ${PORTFOLIO_INFO.contact.tiktok} ☕🎬`;
}

module.exports = { generateAIResponse };
