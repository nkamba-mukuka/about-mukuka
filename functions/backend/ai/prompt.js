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
  },
  bio: "I'm a results-oriented Full Stack Engineer and Data Analyst with 1+ years experience in Golang, PHP, and Next.js. I thrive in backend development and problem-solving. Beyond code, I'm a Women in Tech Advocate and Content Creator dedicated to empowering others in STEM. I love translating business needs into high-quality technical solutions! ☕✨",
  skills: {
    backend: ["Golang", "PHP", "Python", "gRPC", "PostgreSQL"],
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
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
      name: "Latte AI Portfolio",
      description: "3D interactive portfolio website with coffee shop theme",
      tech: ["React", "Three.js", "Firebase", "Cloud Functions"],
    },
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
    const triggers = {
      skills: ["skill", "what can you", "technolog"],
      projects: ["project", "build", "portfolio"],
      about: ["about", "who", "bio"],
      interests: ["interest", "hobby", "hobbies", "like"],
      hello: ["hello", "hi", "hey"],
      contact: ["contact", "email", "reach"],
      experience: ["experience", "work", "job", "career"],
      education: ["education", "degree", "university", "school"],
      certification: ["certification", "certificate", "cert"],
    };

    // Priority: Granular Answers (Email, Phone, Specific Hobby/Skill/School)
    if (lowerValue.includes("email")) return getEmailResponse();
    if (lowerValue.includes("phone") || lowerValue.includes("number")) return getPhoneResponse();
    if (lowerValue.includes("first school")) return getFirstSchoolResponse();
    if (lowerValue.includes("hobby") || lowerValue.includes("interest")) {
      if (lowerValue.includes("one") || lowerValue.includes("single")) {
        return getOneHobbyResponse();
      }
      return generateInterestsResponse();
    }
    if (lowerValue.includes("github")) return generateContactResponse("github");
    if (lowerValue.includes("linkedin")) return generateContactResponse("linkedin");

    if (lowerValue.includes("skill") || lowerValue.includes("what can you") || lowerValue.includes("technolog")) return generateSkillsResponse(true);

    if (triggers.projects.some((t) => lowerValue.includes(t))) return generateProjectsResponse();
    if (triggers.about.some((t) => lowerValue.includes(t))) return generateAboutResponse();
    if (triggers.hello.some((t) => lowerValue.includes(t))) return generateGreetingResponse();
    if (triggers.contact.some((t) => lowerValue.includes(t))) return generateContactResponse();
    if (triggers.experience.some((t) => lowerValue.includes(t))) return generateExperienceResponse();
    if (triggers.education.some((t) => lowerValue.includes(t))) return generateEducationResponse();
    if (triggers.certification.some((t) => lowerValue.includes(t))) return generateCertificationsResponse();

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
  
I'm a backend-first engineer who thrives on building scalable systems with Golang, PHP, and PostgreSQL. I also love crafting clean frontends with React and Next.js, and lately, I've been diving deep into Generative AI and RAG. 

Translating complex business needs into reliable technical architecture—that’s exactly where I shine! ✨💕`;
}

/**
 * Generate response about projects
 */
function generateProjectsResponse() {
  return "Ouuu, let's talk about builds! ✨\n\nI build high-impact, scalable web applications focusing on clean architecture and performance. From this 3D AI portfolio to robust backend APIs, I love creating technology that actually empowers people.\n\nEvery project I take on is a new chance to innovate and push the boundaries of what's possible in tech. ☕💕";
}

/**
 * Generate response about the person
 */
function generateAboutResponse() {
  return `Hey gorgeous! ☕✨ I'm Mukuka Nkamba, a Full Stack Software Engineer and Data Analyst with a strong backend focus. 

I build scalable web applications using Golang, PHP, PostgreSQL, React, and Next.js, and I enjoy turning business needs into clean, reliable technical solutions. 

Known for problem-solving, adaptability, and delivering high-quality work—that’s me in a nutshell. 💕✨`;
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

Feel free to reach out about collaboration, mentorship, or literally just to say hello. I'm always down to chat! 💕☕`;
}

/**
 * Generate response about work experience
 */
function generateExperienceResponse() {
  return `Ouuu, my professional journey is giving main character. ✨

With experience across startups and established firms like Hytel and Fin360, I’ve spent my career building scalable solutions and collaborating in Agile teams. 

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

function getOneHobbyResponse() {
  return `One thing I genuinely enjoy? ${PORTFOLIO_INFO.interests[0]} ☕✨`;
}

function getFirstSchoolResponse() {
  const firstSchool = PORTFOLIO_INFO.education[1];
  return `My first school was ${firstSchool.institution}. 🎓`;
}

module.exports = { generateAIResponse };
