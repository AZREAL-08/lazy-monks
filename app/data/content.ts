// --- Types & Interfaces ---

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
  twitter?: string;
}

export interface ProjectLinks {
  github?: string;
  youtube?: string;
  demo?: string;
  article?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socials: SocialLinks;
}

export interface MemberContribution {
  memberId: number;
  roleInProject: string;
  toolsUsed: string[];
  summary: string;
}

export interface Project {
  id: string;
  title: string;
  hackathon?: string;
  date: string;
  featured: boolean;     // Show on the main page

  // Descriptions
  tagline: string;
  description: string;
  content: string;       // Long, blog-like Markdown text

  // Media
  imageFolder: string;   // Path to the folder in /public
  thumbnail: string;     // The main hero image
  gallery: string[];     // Filenames within the imageFolder

  // Tech & Team
  techStack: string[];
  contributions: MemberContribution[];
  links: ProjectLinks;
}

// --- Data ---

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nikhil R",
    role: "Full Stack Developer",
    bio: "Passionate about creating scalable web applications and intuitive interfaces.",
    image: "/Nikhil.jpg",
    skills: ["React", "Next.js", "Node.js", "TypeScript"],
    socials: {
      github: "https://github.com/nikhil-r0",
      linkedin: "https://www.linkedin.com/in/nikhil-r-917276203/",
    }
  },
  {
    id: 2,
    name: "Aryan Mishra",
    role: "UI/UX & Frontend Engineer",
    bio: "Crafting beautiful, user-centric experiences with a keen eye for interactive design.",
    image: "/Aryan.jpeg",
    skills: ["Figma", "Tailwind CSS", "Framer Motion", "Vue"],
    socials: {
      github: "https://github.com/AZREAL-08",
      linkedin: "https://www.linkedin.com/in/aryan-mishra-78205129a",
      portfolio: "https://aryanmishra.dev"
    }
  },
  {
    id: 3,
    name: "Prajwal S",
    role: "Backend Architect",
    bio: "Building robust APIs, managing databases, and ensuring system reliability.",
    image: "/Vade.jpeg",
    skills: ["Python", "PostgreSQL", "Docker", "Cloud Computing", "Rust"],
    socials: {
      github: "https://github.com/vanguard-bit",
      linkedin: "https://www.linkedin.com/in/prajwal-s-061b82334/",
    }
  },
  {
    id: 4,
    name: "Nishanth Antony",
    role: "AI & Machine Learning Engineer",
    bio: "Designing and integrating AI systems into real-world applications, with a focus on intelligent agents, machine learning workflows, and practical problem solving.",
    image: "/Nishanth.jpeg",
    skills: ["Python", "PyTorch", "TensorFlow", "FastAPI", "LangGraph", "LLM Integration"],
    socials: {
      github: "https://github.com/Nish344",
      linkedin: "https://www.linkedin.com/in/nishanth-antony-b60110289/",
    }
  }
];

// =============================================================================
// GUEST MEMBERS
// =============================================================================
//
// 🎉 Want to be featured as a Guest Member on our portfolio?
//
// HOW TO CONTRIBUTE:
// 1. Fork this repository
// 2. Add your entry to the `guestMembers` array below
// 3. Place your profile photo in the /public directory (e.g., /public/guests/YourName.jpeg)
// 4. Push your changes and open a Pull Request
//
// REQUIRED FIELDS:
// ┌─────────────┬──────────┬──────────────────────────────────────────────────┐
// │ Field       │ Type     │ Description                                      │
// ├─────────────┼──────────┼──────────────────────────────────────────────────┤
// │ name        │ string   │ Your full name (as you'd like it displayed)      │
// │ role        │ string   │ Your title, e.g. "Frontend Developer"            │
// │ bio         │ string   │ A short bio (1-2 sentences about you)            │
// │ image       │ string   │ Path to your photo in /public, e.g. "/guests/X"  │
// │ skills      │ string[] │ 3-6 of your top technical skills                 │
// │ socials     │ object   │ At least one: github, linkedin, portfolio        │
// │ project     │ string   │ Which Lazy Monks project you contributed to      │
// │ contribution│ string   │ A brief description of what you worked on        │
// └─────────────┴──────────┴──────────────────────────────────────────────────┘
//
// EXAMPLE ENTRY:
// {
//   name: "Jane Doe",
//   role: "UI/UX Designer",
//   bio: "Passionate about creating delightful user experiences.",
//   image: "/guests/JaneDoe.jpeg",
//   skills: ["Figma", "CSS", "React", "Accessibility"],
//   socials: {
//     github: "https://github.com/janedoe",
//     linkedin: "https://linkedin.com/in/janedoe",
//     portfolio: "https://janedoe.dev"
//   },
//   project: "Samudra Prahari",
//   contribution: "Redesigned the mobile app onboarding flow and created accessibility guidelines."
// }
//
// GUIDELINES:
// - Keep your bio concise and professional
// - Use a clear, well-lit photo (square aspect ratio works best)
// - List skills that are relevant to your contribution
// - Your PR will be reviewed and merged by a core team member
// =============================================================================

export interface GuestMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socials: SocialLinks;
  project: string;         // Name of the project you contributed to
  contribution: string;    // Brief description of your contribution
}

export const guestMembers: GuestMember[] = [
  // Add your entry here! See the guide above for the required structure.
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Samudra Prahari",
    hackathon: "SIH 2025",
    date: "2025-09",
    featured: true,
    tagline: "Coastal Intelligence Ecosystem bridging the information gap during hazards.",
    description: "A resilient, end-to-end platform designed to bridge the information gap during coastal hazards. It transforms everyday citizen smartphones and social media streams into a verified, real-time intelligence grid, ensuring that authorities can act when seconds matter most.",
    content: `
### **Building for Smart India Hackathon (SIH) 2025**

**Problem Statement ID:** ID25039
**Theme:** Disaster Management | **Category:** Software
**Organization:** INCOIS (Indian National Centre for Ocean Information Services)

**Samudra Prahari** (Guardian of the Ocean) is a resilient, end-to-end platform designed to bridge the information gap during coastal hazards. It transforms everyday citizen smartphones and social media streams into a verified, real-time intelligence grid, ensuring that authorities can act when seconds matter most.

---

## The Core Philosophy: "Built for the Real World"

When natural disasters strike, most reporting systems fail due to two critical reasons: **Network Collapse** and **Low User Adoption**. With Samudra Prahari, we set out to solve both of these fundamental flaws:

1. **Resilience in Crisis:** We engineered an offline-first mobile app powered by **P2P BLE Mesh Networking**. This ensures that distress reports and critical updates can hop from device to device, eventually reaching authorities even when traditional cellular towers are completely down.
2. **Everyday Engagement:** To ensure the network is actually populated when a disaster occurs, we built the **"Coastal Companion"** suite. By offering daily utilities like tide forecasts and tourist guides, the app remains an active, daily habit for coastal communities 365 days a year.

---

## The Ecosystem Architecture

Building this solution required a multi-faceted approach to handle data collection, processing, and visualization. We divided the platform into three primary pillars:

### 1. The Mobile Application: The Ground Truth Sensor
Our mobile app is the frontline of the ecosystem.
* **Offline Reporting:** Built with React Native (Expo) and utilizing Bluetooth mesh communication protocols, users can communicate completely off-grid.
* **Multilingual Support:** We designed a localized interface to ensure accessibility for diverse coastal communities across India.
* **User Retention Ecosystem:** Gamified features like beach cleanliness reporting and reward badges keep users engaged.

### 2. The AI Scraper: The Digital Pulse
To supplement on-the-ground reports, we tap into the wider digital conversation.
* **Social Intelligence:** We developed automated Python pipelines to monitor platforms like X (Twitter) and Instagram for real-time disaster indicators.
* **Decoupled Scaling:** This system operates entirely independently of our main API, allowing 24/7 monitoring without slowing down the core application.
* **Auto-Cleaning & Verification:** An intelligent pipeline automatically de-duplicates redundant posts and flags potentially fabricated information.

### 3. The Web Dashboard: The Command Center
Authorities need a clear, actionable view of the chaos.
* **Geospatial Intelligence:** Our Next.js & Leaflet-based map view uses **PostGIS/PostgreSQL** to logically cluster real-time reports geographically, preventing information overload.
* **AI Analysis Core:** We integrated **IndicBERT** for multilingual NLP and computer vision to verify the authenticity of reported hazards before they escalate to emergency responders.
* **Role-Based Access:** Secure, tiered access ensures that different levels of responders get the specific data they need.

---

## Key Innovations

Throughout the development for SIH 2025, our team pushed the boundaries of what a disaster management tool could be:
* **Geospatial Intelligence:** Native database support for clustering nearby reports allows analysts to instantly distinguish between isolated incidents and large-scale disasters.
* **AI-Powered Verification:** Our multi-stage pipeline assigns "Confidence Scores" to incoming data, actively filtering out "fake news" or outdated footage to prevent resource misallocation.
* **P2P Mesh Network:** We successfully implemented functional decentralized communication, creating a reliable lifeline in true zero-connectivity zones.
        `,
    imageFolder: "/projects/samudra",
    thumbnail: "main.png",
    gallery: ["main.png", "offline.png", "techflow.png", "chat.jpeg", "mobile.jpeg"],
    techStack: [
      "React Native (Expo)",
      "Next.js",
      "Tailwind CSS",
      "Python (FastAPI)",
      "Supabase (PostgreSQL/PostGIS)",
      "Playwright",
      "IndicBERT",
      "Hugging Face",
      "PyTorch",
      "BLE Mesh Networking"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Lead Developer / Architect",
        toolsUsed: ["React Native", "Next.js", "Supabase"],
        summary: "Architected the full-stack ecosystem, engineered the BLE mesh networking layer for offline resilience, and developed the React Native mobile application with multilingual support and gamified engagement features."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "Frontend Developer",
        toolsUsed: ["React Native", "Expo", "UI Design"],
        summary: "Built the interactive web interface, developed the curated guides section, and designed the exporter questionnaire."
      },
      {
        memberId: 4, // Nishanth
        roleInProject: "AI & Data Engineer",
        toolsUsed: ["Python", "IndicBERT", "PyTorch"],
        summary: "Developed the social media sentiment analysis pipeline and the image verification module."
      },
      {
        memberId: 3,
        roleInProject: "AI Scraper Engineer",
        toolsUsed: ["Python"],
        summary: "Developed automated Python pipelines to monitor social media platforms like X and Instagram for real-time disaster indicators, including de-duplication and basic verification of incoming posts."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/samudra-prahari-ecosystem",
      youtube: "https://youtu.be/5G5odwkGp0A?si=59ijkQ4nmovnlKrA"
    }
  },
  {
    id: "proj-2",
    title: "Veris Truth Engine",
    hackathon: "Recurzive V2",
    date: "2025-09",
    featured: true,
    tagline: "An autonomous investigative AI agent for automated reasoning and evidence verification.",
    description: "Veris Ecosystem is a full-stack platform for an autonomous investigative AI agent, using a Python/LangGraph backend and Next.js frontend to enable AI-driven investigation, reasoning, and interactive visualization of evidence and insights.",
    content: `
### **Uncovering the Truth with Autonomous AI**

In an era of deepfakes, misinformation, and overwhelming data sprawl, manual investigation is becoming impossibly slow. **Veris** was built to flip the script. 

Developed for **Recurzive V2**, the Veris Ecosystem is not just a search engine—it is an autonomous investigative AI agent. It doesn't just fetch links; it actively reads, verifies, builds knowledge graphs, and iteratively reasons through complex queries until it finds the truth.

---

## The Cognitive Engine: LangGraph Backend

The heart of Veris is its backend intelligence, built with Python and LangGraph. Instead of a simple prompt-response loop, we engineered a stateful, looped pipeline controlled by an \`AgentState\` object. This allows the AI to "think" in steps, mimicking a human detective:

1. **The Collector:** The agent begins by scouring online sources, actively fetching raw data and potential evidence related to the user's query.
2. **The Verifier:** Not all data is equal. This node acts as a critical filter, cross-referencing information, evaluating credibility, and assigning trust scores to the evidence.
3. **The Graph Node:** As verified facts emerge, the system synthesizes them into a relationship map, connecting entities, events, and evidence logically.
4. **The Refiner:** The AI evaluates its own findings. *Do we have enough to conclude the investigation?* If not, it formulates a \`next_query\` and loops back to the Collector. If yes, it finalizes the investigation.
5. **The Reporter:** Finally, the agent compiles the structured data into a comprehensive, readable report.

This autonomous looping means the agent can go down rabbit holes, hit dead ends, pivot, and ultimately return with a highly verified conclusion.
        `,
    imageFolder: "/projects/veris",
    thumbnail: "veris.png",
    gallery: ["architecture.jpeg", "trophies.jpeg"],
    techStack: [
      "Python",
      "LangGraph",
      "Node.js",
      "Next.js",
      "FastAPI",
      "Tailwind CSS"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Full Stack Engineer",
        toolsUsed: ["Next.js", "Python", "LangGraph"],
        summary: "Bridged the LangGraph-powered backend with the Next.js frontend, orchestrating real-time state synchronization and designing the agent's iterative reasoning and self-evaluation workflow."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "UI/UX & Frontend",
        toolsUsed: ["Next.js", "Tailwind CSS"],
        summary: "Designed the command-center aesthetic, interactive graphs, and the particle animations for the dashboard."
      },
      {
        memberId: 3,
        roleInProject: "AI Engineer",
        toolsUsed: ["Python", "LangGraph"],
        summary: "Implemented and collaborated on the Verifier and Refiner nodes in the LangGraph pipeline, enabling evidence verification and iterative investigation through self-evaluation and query refinement."
      },
      {
        memberId: 4, // Nishanth Antony
        roleInProject: "AI Architect & AI Engineer",
        toolsUsed: ["Python", "LangGraph", "LLM Orchestration"],
        summary: "Designed and implemented the AI architecture for the Veris investigative agent, including the reasoning workflow, agent state design, and integration of verification and iterative investigation loops."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/veris-ecosystem",
      youtube: "https://youtu.be/OmviNm0HJbg?si=FOHg5iS0qO9Ne72D"
    }
  },
  {
    id: "proj-5",
    title: "Green Quest",
    hackathon: "Social Hackathon 2025",
    date: "2025-05",
    featured: true,
    tagline: "Gamifying urban sustainability by turning citizens into guardians of local plants.",
    description: "Green Quest tackles the urban green crisis by transforming plant care into an engaging, gamified experience. Users can adopt nearby plants on a map, complete AI-verified care quests, and even converse with their plants through a unique AI-driven personality chatbot.",
    content: `
### **Rewilding the Concrete Jungle**

Between 2000 and 2020, rapidly urbanizing cities in India lost over 20% of their green cover. In just ten years, Delhi alone lost 111,000 trees to construction and pollution. The result? "Urban heat islands" where temperatures soar 3-5°C higher than surrounding areas, contributing to stress, depression, and poor air quality. 

While parks and roadside plants exist, they often dry out and die due to a lack of regular watering and citizen engagement. Built for the **Social Hackathon 2025**, **Green Quest** was created by our team, the *Lazy Monks*, to solve this exact problem by gamifying environmental sustainability.

---

## The Core Concept: Become a Guardian

Green Quest transforms ordinary citizens into localized environmental heroes. Using our interactive map interface, users can locate and "adopt" plants in their immediate vicinity, becoming their official Guardians.

To keep users engaged, we introduced a dynamic quest system:
* **Actionable Quests:** Users receive regular tasks such as watering their adopted plant, submitting health reports, and tracking growth.
* **AI Verification:** To ensure authenticity, users submit photos and videos of their tasks. Our AI/ML service analyzes the media to identify the species, verify the plant's health score, and confirm that the quest was genuinely completed.
* **Competitive Sustainability:** A global Eco-Leaderboard induces friendly competition, rewarding the most active guardians with points and recognition.
        `,
    imageFolder: "/projects/greenquest",
    thumbnail: "map.jpeg",
    gallery: ["architecture.png", "plant_recognition.jpeg", "chatbot.jpeg", "leaderboard.jpeg", "verification.jpeg"],
    techStack: [
      "Python",
      "Flask",
      "React Native (Expo)",
      "OpenCV",
      "Machine Learning",
      "Geolocation APIs"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Mobile App Developer",
        toolsUsed: ["JavaScript", "React Native"],
        summary: "Developed the React Native mobile application, implementing the camera-based photo and video capture pipeline, the AI-driven plant chatbot interface, and the gamified Eco-Leaderboard system."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "UI/UX Designer",
        toolsUsed: ["Figma", "Geolocation"],
        summary: "Designed the interactive map interface, the Eco-Leaderboard visuals, and the conversational UI layouts for the plant chatbot."
      },
      {
        memberId: 4, // Nishanth Antony
        roleInProject: "AI Engineer & ML Architect",
        toolsUsed: ["Python", "Machine Learning", "Computer Vision"],
        summary: "Designed and implemented the AI components used for plant recognition and task verification, including the ML pipeline for analyzing user-submitted media and assessing plant health and quest completion."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/green-quest",
      youtube: ""
    }
  },
  {
    id: "proj-6",
    title: "Urban Trust",
    hackathon: "BGSIT Hackathon 2025",
    date: "2025-04",
    featured: false,
    tagline: "Empowering citizens and authorities with AI-verified civic issue tracking.",
    description: "Urban Trust is a comprehensive platform designed to enhance urban community development. It tackles recurring civic issues like potholes and garbage dumps through AI-verified reporting, real-time smart map visualization, and an automated routing system for municipal officials.",
    content: `
### **Fixing the Broken Civic Complaint System**

Urban areas consistently face recurring civic issues like massive potholes, illegal garbage dumps, and broken infrastructure. These problems often go underreported or unresolved due to slow, opaque, and highly centralized complaint systems. 

Existing issue-reporting apps are fundamentally flawed: unresolved issues are prematurely marked as "resolved," they lack visualization tools for municipal authorities to make data-driven decisions, and there is near-zero public interaction or transparency. 

To put this in perspective: In Bengaluru alone, between April and December 2024, the BBMP reported 16,940 potholes. Despite an annual allocation of roughly ₹45 crore for repairs, over 7,000 potholes were left entirely unaddressed. **Urban Trust** was built by the *Lazy Monks* to solve this accountability crisis.

---

## The Urban Trust Solution

We engineered a platform that bridges the trust gap between citizens and the government through automation and transparency.

* **AI-Verified Issue Reporting:** Users can snap a photo of a civic issue. Instead of instantly going to a human, our AI automatically validates the complaint using the image input, description, and geolocation data.
* **Smart Map Visualization:** A real-time, interactive map tracks active, unresolved, and escalating issues across the city, giving both citizens and authorities a bird's-eye view of urban decay.
* **Automated Ward Routing:** The system automatically maps reported issues to specific municipal ward boundaries and routes them directly to the responsible local officials for faster action.
* **Duplicate Detection:** To prevent system overload, the platform automatically identifies similar reports in the exact same location, merging them to strengthen the verification of a single issue.
* **Citizen Feedback Loop:** Citizens can verify or actively dispute the resolution of reported issues, ensuring transparent closure and keeping authorities accountable.
* **Multilingual Inclusivity:** The UI supports regional languages (like Kannada), ensuring citizens from all backgrounds can easily report and track issues.
        `,
    imageFolder: "/projects/urbantrust",
    thumbnail: "logo.jpeg",
    gallery: [
      "camera.png",
      "architecture.png",
      "profile.png",
      "map.png",
      "homepage.png"
    ],
    techStack: [
      "React Native",
      "Python",
      "Flask",
      "Gemini 2.5 Flash",
      "Firebase",
      "HTML/CSS/JS"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Team Leader & Mobile Developer",
        toolsUsed: ["React Native", "Firebase"],
        summary: "Led the team and developed the React Native mobile application, integrating Firebase for real-time data persistence and connecting the app to the Flask backend API for AI-verified issue reporting."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "Web Frontend Developer",
        toolsUsed: ["HTML", "CSS", "JavaScript", "Firebase"],
        summary: "Developed the web-based admin portal and map visualization dashboard using vanilla HTML/CSS/JS, implemented real-time issue tracking on interactive maps, and integrated regional language support."
      },
      {
        memberId: 4, // Nishanth Antony
        roleInProject: "AI Architect & AI Engineer",
        toolsUsed: ["Python", "Gemini 2.5 Flash"],
        summary: "Designed and implemented the AI-driven verification pipeline for civic issue reporting, including multimodal analysis of images, descriptions, and geolocation data to validate complaints and assist automated issue classification."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/urban-trust-ecosystem",
      youtube: "https://youtu.be/H_73D57SqJo"
    }
  },
  {
    id: "proj-7",
    title: "GameNest",
    hackathon: "NMIT Hacks 2025",
    date: "2025-05",
    featured: false,
    tagline: "Gamifying the game development journey through a 2D open-world collaborative platform.",
    description: "GameNest is a 2D open-world platform that gamifies game development. Indie developers can host their games in virtual towers, earning 'GameCoins' by playing, collaborating, and reviewing others' work to foster a community-driven adventure.",
    content: `
### **Leveling Up Indie Game Development**

Indie developers often struggle to find a shared, engaging space to showcase their games, collaborate meaningfully with fellow devs, and discover others' projects in an organic way. The development journey can often feel like an isolated grind.

**GameNest** changes the paradigm by gamifying the game development journey itself. By embedding game dev within an actual playable game world, we bring a brand-new layer of immersion, motivation, and visibility to indie creators.

---

## The Virtual World of GameNest

GameNest solves the isolation of indie development by offering a 2D open-world platform where the developer community becomes an explorable map. Every developer gets a virtual "space" or "tower" to:

* **Host Live Demos:** Showcase playable games and link directly to GitHub repositories.
* **Interactive Exploration:** Allow users to physically walk their avatars around the 2D world and seamlessly enter different game spaces.
* **Playtest & Connect:** Engage directly with creators, offer feedback, and contribute to ongoing projects.
        `,
    imageFolder: "/projects/gamenest",
    thumbnail: "logo.jpeg",
    gallery: [
      "game1.png",
      "game2.jpeg",
      "game3.jpeg",
      "game4.jpeg",
      "map.png"
    ],
    techStack: [
      "Phaser",
      "Tiled Map Editor",
      "TypeScript",
      "WebSockets",
      "AI-Assisted Development"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Game Logic & Backend Developer",
        toolsUsed: ["Phaser", "TypeScript"],
        summary: "Integrated the 2D tiled map system, engineered player movement and collision mechanics, and implemented the GameCoin economy logic for in-platform transactions."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "World Designer & UI",
        toolsUsed: ["Tiled", "Figma"],
        summary: "Designed the 2D open world, developer towers, and the UI for the game hosting interfaces. Also made interactive mini-games for the platform."
      },
      {
        memberId: 3,
        roleInProject: "Mini-Game Developer",
        toolsUsed: ["JavaScript", "CSS"],
        summary: "Developed a small interactive mini-game using JavaScript and CSS designed to teach and reinforce CSS concepts through gameplay within the GameNest platform."
      },
      {
        memberId: 4, // Nishanth Antony
        roleInProject: "AI Integration Support",
        toolsUsed: ["AI-Assisted Development"],
        summary: "Assisted the team in leveraging AI-assisted development tools to accelerate game feature implementation and explore enhancements for gameplay interaction and developer discovery."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/gamenest", // Update if different
    }
  },
  {
    id: "proj-4",
    title: "Contract IQ",
    hackathon: "Google Solutions Challenge 2025",
    date: "2025-04",
    featured: false,
    tagline: "An automated AI-driven notification system for intelligent digital contract management.",
    description: "ContractIQ automates the extraction of key contract details, calculates termination dates, and schedules timely email alerts using the Gemini API and Firebase, ensuring you never miss a critical deadline.",
    content: `
### **Automating Legal Workflows with AI**

Managing digital contracts is traditionally a tedious, manual process. Legal teams and businesses often struggle to keep track of critical dates—like effective dates, term durations, and termination deadlines—buried deep within pages of complex legal jargon. Missing these deadlines can lead to unintended auto-renewals or compliance failures.

Built for the **Google Solutions Challenge 2025**, **ContractIQ** eliminates this manual tracking by automating the entire lifecycle of contract monitoring and notification.
        `,
    imageFolder: "/projects/contractiq",
    thumbnail: "contractiq4.png",
    gallery: [
      "contractiq1.png",
      "contractiq2.png",
      "contractiq3.png",
      "contractiq5.png",
      "contractiq6.png"
    ],
    techStack: [
      "Python",
      "Flask",
      "Gemini API",
      "Firebase",
      "SMTP",
      "HTML/CSS/JS"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Full Stack Developer",
        toolsUsed: ["Python", "Flask", "Firebase", "SMTP"],
        summary: "Managed Firebase database operations for contract storage and retrieval, built the web frontend for document upload and timeline visualization, and handled production deployment."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "Frontend Developer",
        toolsUsed: ["HTML", "CSS", "Vanilla JS"],
        summary: "Developed a clean, server-rendered dashboard interface offering a straightforward way for users to upload documents and view active contract timelines."
      },
      {
        memberId: 4, // Nishanth
        roleInProject: "AI Integration Engineer",
        toolsUsed: ["Gemini API", "Python"],
        summary: "Developed the prompt engineering and integration logic with the Gemini API to accurately extract unstructured data from legal PDFs."
      },
    ],
    links: {
      github: "https://github.com/nikhil-r0/contractiq-backend",
      youtube: "https://youtu.be/BFNKKWBWCJk"
    }
  },
  {
    id: "proj-8",
    title: "HerHealth",
    hackathon: "She Builds AI",
    date: "2024-11",
    featured: true,
    tagline: "Empowering rural women through an AI-driven, community-supported healthcare ecosystem.",
    description: "HerHealth is a comprehensive digital platform connecting rural women with local healthcare centers and transparent donors. It features AI-powered symptom tracking, empathetic chatbot support, and proactive health monitoring.",
    content: `
### **Bridging the Rural Healthcare Gap**

In rural areas, healthcare challenges extend far beyond limited resources—they are exacerbated by isolation, deep-rooted stigma around women's health issues, and a lack of timely support. For countless women, health problems go untreated for years simply due to a lack of accessible, trusted information.

Built for the **She Builds AI** hackathon, **HerHealth** was created to tackle these challenges holistically.
        `,
    imageFolder: "/projects/herhealth",
    thumbnail: "chat.jpeg",
    gallery: [
      "donor-dashboard.jpeg",
      "donors.jpeg"
    ],
    techStack: [
      "React Native",
      "Firebase",
      "Google Gemini API",
      "JavaScript"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Mobile App & Backend Developer",
        toolsUsed: ["React Native", "Firebase"],
        summary: "Developed the cross-platform React Native mobile application with low-bandwidth caching strategies for rural connectivity, and architected the secure Firebase database schema for patient records and donor transparency."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "Frontend Developer",
        toolsUsed: ["React Native", "JavaScript"],
        summary: "Developed the web dashboard for healthcare centers and contributed to the frontend architecture of the React Native mobile application."
      },
      {
        memberId: 4, // Nishanth
        roleInProject: "AI Integrator",
        toolsUsed: ["Google Gemini API", "Prompt Engineering"],
        summary: "Designed and implemented the AI-powered health assistant by integrating the Google Gemini API. Engineered structured prompts and response flows to create an empathetic chatbot capable of guiding users through symptom tracking, providing medically relevant information, and offering supportive conversational interactions tailored for rural healthcare contexts."
      },
    ],
    links: {
      github: "https://github.com/nikhil-r0/Her-Health",
      youtube: "https://youtu.be/xRMC-jiz-B0?si=KntGbYmrGjnzXVxZ"
    }
  },
  {
    id: "proj-3",
    title: "Sauda (सौदा)",
    hackathon: "Syntax Error 2025",
    date: "2025-10",
    featured: false,
    tagline: "A fair, community-driven Web3 marketplace where buying, selling, and bartering is as simple as it should be.",
    description: "Sauda is a modern, zero-fee marketplace that reimagines online trading. It features a built-in barter system, real-time chat, and a crypto-staked trust system to ensure accountability and protect honest users.",
    content: `
### **Redefining the Online Marketplace**

Most online marketplaces today feel outdated—plagued by paywalls for listings, fake buyers, and hardly any real sense of trust. We built **Sauda** (सौदा) to be a fresh, community-driven platform where you can buy, sell, or trade your stuff freely, safely, and without the usual hassle.
        `,
    imageFolder: "/projects/sauda",
    thumbnail: "dashboard.png",
    gallery: [
      "create.png",
      "dashboard.png",
      "individual.png",
      "listings.png"
    ],
    techStack: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Solidity",
      "Vercel"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Full Stack & Web3 Developer",
        toolsUsed: ["Next.js", "Solidity", "Supabase"],
        summary: "Developed and deployed Solidity smart contracts for the staking/slashing trust system on the Sepolia testnet, and engineered the real-time chat backend using Supabase for instant buyer-seller communication."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "UI/UX & Frontend Engineer",
        toolsUsed: ["Next.js", "Tailwind CSS"],
        summary: "Designed the clean, clutter-free marketplace interface and implemented the responsive frontend components."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/sauda-web",
      youtube: "https://youtu.be/Mb6F0mdX_24?si=bQm_NCM_mWDsX-Po"
    }
  },
  {
    id: "proj-9",
    title: "ExportEase",
    hackathon: "Amazon Sambhav 2024",
    date: "2024-11", // Based on Nov 25, 2024
    featured: false,
    tagline: "An all-in-one AI platform simplifying global trade and compliance for SMBs.",
    description: "ExportEase centralizes fragmented export resources, offering real-time tariff details, AI-driven onboarding guidance, and comprehensive compliance tools to help small and medium businesses navigate global trade effortlessly.",
    content: `
### **Democratizing Global Trade for SMBs**

For small and medium businesses (SMBs), expanding into global markets is often a logistical nightmare. Exporters are forced to navigate a labyrinth of complex trade regulations, fragmented government resources, and obscure incentive programs. Finding accurate tariff details or understanding compliance requirements can take weeks of manual research.

Built for the **Amazon Sambhav 2024** hackathon, **ExportEase** was designed to solve this exact problem. It acts as an intelligent, centralized platform that reduces the time, effort, and uncertainty exporters face when stepping onto the global stage.
        `,
    imageFolder: "/projects/exportease",
    thumbnail: "dashboard2.png",
    gallery: [
      "flowchart.png",
      "dashboard.png",
      "api.png",
      "form.png",
      "guide.png",
      "summary.png"
    ],
    techStack: [
      "HTML/CSS/JS",
      "Python",
      "Flask",
      "Google Gemini API",
      "US HTS API"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Full Stack Developer & AI Integrator",
        toolsUsed: ["Gemini API", "US HTS API", "Flask"],
        summary: "Integrated the Gemini API for intelligent onboarding guidance, connected the US HTS API for real-time tariff data retrieval, and architected the Flask backend powering the platform's data flow."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "Frontend Developer",
        toolsUsed: ["HTML", "CSS", "JavaScript"],
        summary: "Developed the intuitive, unified dashboard and user interface for the global trade and compliance platform."
      },
      {
        memberId: 4, // Nishanth Antony
        roleInProject: "AI Engineer & Systems Developer",
        toolsUsed: ["Google Gemini API", "Prompt Engineering", "Python", "REST APIs"],
        summary: "Designed and implemented the AI-powered guidance system that assists exporters through onboarding and compliance workflows. Built structured prompt pipelines using the Gemini API to generate contextual export guidance, interpret user inputs, and summarize regulatory requirements. Also contributed to integrating external trade data APIs and structuring AI responses to present actionable insights within the platform."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/exportease", // Update with actual if different
      youtube: "https://youtu.be/S5BILKB3Ayo"
    }
  },
  {
    id: "proj-10",
    title: "Green Terrace",
    hackathon: "BuzzOnEarth Hackathon 2024",
    date: "2024-10",
    featured: false,
    tagline: "An AI-driven ecosystem empowering urban terrace farmers with personalized crop insights.",
    description: "Green Terrace transforms urban gardening by combining real-time weather data with machine learning to offer personalized crop recommendations. It features an Intel BERT-powered chatbot, plant stage recognition, and a community-driven marketplace.",
    content: `
### **Cultivating the Concrete Jungle**

Urban terrace farming is rapidly growing as city dwellers look for sustainable ways to grow their own food. However, both beginners and experienced gardeners often struggle with knowing exactly *what* to plant and *when*, given the micro-climates of their specific rooftops. 

Built for the **BuzzOnEarth India Hackathon 2024** at IIT Kanpur, **Green Terrace** bridges the gap between traditional gardening and modern AI. We created a supportive digital ecosystem tailored specifically for terrace farmers.
        `,
    imageFolder: "/projects/green-terrace",
    thumbnail: "output.png",
    gallery: [
      "comparision.png",
      "input.png",
      "community.png",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Python",
      "Flask",
      "Intel® OpenVINO™",
      "Intel® Tiber Developer Cloud",
      "HuggingFace (BERT)",
      "Machine Learning"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "AI & Full Stack Engineer",
        toolsUsed: ["Python", "Flask", "Intel OpenVINO", "HuggingFace", "Flutter", "Dart"],
        summary: "Developed the plant stage recognition model and optimized inference using Intel OpenVINO, built the Flask backend API, and developed the Flutter mobile application for end-to-end user interaction."
      },
      {
        memberId: 4, // Nishanth Antony
        roleInProject: "AI Engineer & ML Developer",
        toolsUsed: ["Python", "Machine Learning", "HuggingFace (BERT)", "Intel OpenVINO"],
        summary: "Contributed to the design and implementation of the AI components powering the platform, including the BERT-based conversational assistant and ML-driven crop recommendation workflows. Worked on integrating model inference with the backend services, experimenting with plant data inputs, and structuring AI responses to provide practical guidance for terrace farmers."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/Green-Terrace",
      youtube: "https://youtu.be/YrdPrBv_bgw"
    }
  }
];
