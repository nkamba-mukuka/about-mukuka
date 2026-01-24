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
  bio: "I am a driven and results-oriented Full Stack Software Engineer and Data Analyst with over a year of experience in building scalable web applications. Skilled in Golang, PHP, PostgreSQL, Next.js, and React, with a strong preference for backend development. Known for problem-solving, adaptability, and delivering high-quality results. I also have brief exposure to IT consulting and understand how to translate business needs into technical solutions. I was proudly selected among a cohort to undergo specialized training in Data Analysis, in recognition of my strong analytical mindset, eagerness to learn, and demonstrated technical aptitude.",
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
    if (lowerValue.includes("skill") || lowerValue.includes("what can") || lowerValue.includes("technolog")) {
      return generateSkillsResponse();
    }

    if (lowerValue.includes("project") || lowerValue.includes("work") || lowerValue.includes("built")) {
      return generateProjectsResponse();
    }

    if (lowerValue.includes("about") || lowerValue.includes("who") || lowerValue.includes("bio")) {
      return generateAboutResponse();
    }

    if (lowerValue.includes("interest") || lowerValue.includes("hobby") || lowerValue.includes("hobbies") || lowerValue.includes("like")) {
      return generateInterestsResponse();
    }

    if (lowerValue.includes("hello") || lowerValue.includes("hi") || lowerValue.includes("hey")) {
      return generateGreetingResponse();
    }

    if (lowerValue.includes("contact") || lowerValue.includes("email") || lowerValue.includes("reach")) {
      return generateContactResponse();
    }

    if (lowerValue.includes("experience") || lowerValue.includes("work history") || lowerValue.includes("job") || lowerValue.includes("career")) {
      return generateExperienceResponse();
    }

    if (lowerValue.includes("education") || lowerValue.includes("degree") || lowerValue.includes("university") || lowerValue.includes("school")) {
      return generateEducationResponse();
    }

    if (lowerValue.includes("certification") || lowerValue.includes("certificate") || lowerValue.includes("cert")) {
      return generateCertificationsResponse();
    }

    // Handle off-topic questions (relationship, personal life, etc.)
    if (
      lowerValue.includes("relationship") ||
      lowerValue.includes("boyfriend") ||
      lowerValue.includes("girlfriend") ||
      lowerValue.includes("married") ||
      lowerValue.includes("single") ||
      lowerValue.includes("dating") ||
      lowerValue.includes("personal") ||
      lowerValue.includes("private")
    ) {
      return generateDefaultResponse();
    }

    // Default response for unrecognized questions
    return generateDefaultResponse();
  } catch (error) {
    console.error("Response generation error:", error);
    return "Opps! Something went wrong ☕ Let me try that again - could you rephrase your question, gorgeous? ✨";
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
  return responses[key] || `Ouuu, great choice! ${menuItem} is honestly one of my favorites! What would you like to know about it, babe? ✨`;
}

/**
 * Generate response about skills
 */
function generateSkillsResponse() {
  const backend = PORTFOLIO_INFO.skills.backend.join(", ");
  const frontend = PORTFOLIO_INFO.skills.frontend.join(", ");
  const dataAnalysis = PORTFOLIO_INFO.skills.dataAnalysis.join(", ");
  const tools = PORTFOLIO_INFO.skills.tools.join(", ");
  
  return `Ouuu, this is too good! Let me spill the tea on my skills ☕✨

**Backend:** ${backend} - honestly, this is where I thrive! 
**Frontend:** ${frontend} - making things pretty is my thing 💅
**Data Analysis:** ${dataAnalysis} - because who doesn't love good data? 
**Tools:** ${tools} - all the essentials, babe!

And get this - I also work with AI technologies including Generative AI and RAG, which is honestly so cool! I have a strong preference for backend development (it's just chef's kiss 👌), and I absolutely love building scalable applications and solving complex problems. It's like solving puzzles but make it tech! 

What would you like to know more about, gorgeous? 💕`;
}

/**
 * Generate response about projects
 */
function generateProjectsResponse() {
  const projectsList = PORTFOLIO_INFO.projects
    .map((p) => `• ${p.name}: ${p.description}`)
    .join("\n");

  return `Ouuu, let me show you what I've been working on! ✨\n\n${projectsList}\n\nHonestly, each project has been such a vibe and a major learning experience! Like, the growth is real 💕 Would you like details on any specific one? I'm so excited to share! ☕`;
}

/**
 * Generate response about the person
 */
function generateAboutResponse() {
  return `Hey gorgeous! ☕✨ I'm ${PORTFOLIO_INFO.name}, a ${PORTFOLIO_INFO.title}. ${PORTFOLIO_INFO.bio}

And honestly? Beyond the technical realm, I'm a Content Creator and Women in Tech Advocate, and I'm so passionate about sharing my journey, offering mentorship, and crafting resources designed to empower women in STEM. Like, representation matters and I'm here for it! 💕

I'm known for my adaptability, curiosity, and problem-solving mindset - basically I'm that girl who figures things out! I excel at the convergence of engineering, AI, and mentorship, and it's honestly the best combo ever.

Feel free to ask me about my skills, experience, projects, or interests - I'm an open book! Too good! ✨`;
}

/**
 * Generate response about interests
 */
function generateInterestsResponse() {
  const interestsList = PORTFOLIO_INFO.interests.join(", ");
  return `Ouuu, this is my favorite question! I'm so passionate about ${interestsList}! Like, honestly? Too good! ☕✨

Beyond coding, I'm a Content Creator and Women in Tech Advocate, and I'm literally so dedicated to sharing my journey, offering mentorship, and crafting resources designed to empower women in STEM. It's giving main character energy and I'm here for it! 💕

I excel at the convergence of engineering, AI, and mentorship - it's honestly the perfect mix! And I'm so motivated to build technology that empowers people and drives real-world impact. Like, that's the dream, right? 

Also, can we talk about how I love cooking and interior design? Like, when I'm not coding, you'll find me in the kitchen trying new recipes or redecorating my space - it's such a vibe! 🎨✨`;
}

/**
 * Generate greeting response
 */
function generateGreetingResponse() {
  const greeting = BARISTA_RESPONSES.greetings[
    Math.floor(Math.random() * BARISTA_RESPONSES.greetings.length)
  ];
  return `${greeting} I'm here to tell you all about ${PORTFOLIO_INFO.name}'s portfolio - and honestly, it's giving main character energy! ✨ Ask me about skills, projects, experience, or literally anything else - I'm an open book, babe! Too good! 💕`;
}

/**
 * Generate contact response
 */
function generateContactResponse() {
  const contact = PORTFOLIO_INFO.contact;
  return `Ouuu, yes! I'd absolutely love to connect! Here's how you can reach me, gorgeous: ✨

📧 Email: ${contact.email}
📱 Phone: ${contact.phone}
💼 LinkedIn: ${contact.linkedin}
💻 GitHub: ${contact.github}

Feel free to reach out about collaboration opportunities (so exciting!), questions about my work, mentorship, or literally just to say hello! I'm always down to chat - it's giving good vibes only! 💕☕`;
}

/**
 * Generate response about work experience
 */
function generateExperienceResponse() {
  const experienceList = PORTFOLIO_INFO.experience
    .map((exp) => `• **${exp.role}** at ${exp.company} (${exp.period})\n  ${exp.description}`)
    .join("\n\n");

  return `Ouuu, let me spill the tea on my professional journey! It's been such a ride! ✨\n\n${experienceList}\n\nHonestly? I've worked across various companies, from startups to established firms, and I've always focused on building scalable solutions and collaborating in Agile environments. Like, teamwork makes the dream work, right? 💕

Each role has taught me something new and honestly? Too good! Would you like details on any specific role? I'm so excited to share! ☕`;
}

/**
 * Generate response about education
 */
function generateEducationResponse() {
  const educationList = PORTFOLIO_INFO.education
    .map((edu) => `• **${edu.degree}**\n  ${edu.institution} (${edu.period})${edu.note ? `\n  ${edu.note} - honestly, such a flex! 💅` : ""}`)
    .join("\n\n");

  return `Ouuu, let me tell you about my educational journey! ✨\n\n${educationList}\n\nAnd get this - I also completed specialized training in Data Analysis through Tech4Dev WomenTechsters program, and it was honestly such a vibe! Like, the growth is real! 💕

What would you like to know more about, gorgeous? Too good! ☕`;
}

/**
 * Generate response about certifications
 */
function generateCertificationsResponse() {
  const certList = PORTFOLIO_INFO.certifications
    .map((cert) => `• ${cert}`)
    .join("\n");

  return `Ouuu, yes! Let me show you my certifications - honestly, I'm so proud of these! ✨\n\n${certList}\n\nThese certifications reflect my commitment to continuous learning and professional development, and honestly? It's giving main character energy! Like, who doesn't love a good glow-up? 💕 Too good! ☕`;
}

/**
 * Generate default response for unrecognized questions
 */
function generateDefaultResponse() {
  return "Opps! Sorry babe, we don't have that order available currently! ☕ But for more info, contact management via email: mukukahnkamba@gmail.com - they'll hook you up! ✨";
}

module.exports = { generateAIResponse };
