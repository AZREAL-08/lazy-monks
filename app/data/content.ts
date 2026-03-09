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
    image: "/Nikhil.jpeg",
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
    skills: ["Python", "PostgreSQL", "Docker", "AWS"],
    socials: {
      github: "https://github.com/vanguard-bit",
      linkedin: "https://www.linkedin.com/in/prajwal-s-061b82334/",
    }
  },
  {
    id: 4,
    name: "Nishanth Anthony",
    role: "Machine Learning Engineer",
    bio: "Integrating AI models into practical applications to solve real-world problems.",
    image: "/Nishanth.jpeg",
    skills: ["PyTorch", "TensorFlow", "FastAPI", "OpenAI"],
    socials: {
      github: "https://github.com/Nish344",
      linkedin: "https://www.linkedin.com/in/nishanth-antony-b60110289/",
    }
  }
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Samudra Prahari",
    hackathon: "SIH 2025",
    date: "2025-09",
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
        summary: "Architected the ecosystem, integrated BLE mesh networking, and built the core web dashboard."
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
        memberId: 3, // Prajwal S
        roleInProject: "Backend Architect & Geospatial Engineer",
        toolsUsed: ["Python", "PostGIS", "Docker"],
        summary: "Designed the PostGIS schema, implemented resilient API endpoints for ingestion from P2P/mesh relays, and optimized spatial clustering and query performance for real-time incident aggregation."
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
        summary: "Integrated the LangGraph backend with the Next.js frontend and designed the agent's iterative reasoning workflow."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "UI/UX & Frontend",
        toolsUsed: ["Next.js", "Tailwind CSS"],
        summary: "Designed the command-center aesthetic, interactive graphs, and the particle animations for the dashboard."
      },
      {
        memberId: 3, // Prajwal S
        roleInProject: "Backend & Data Engineer",
        toolsUsed: ["Python", "FastAPI", "PostgreSQL", "Redis"],
        summary: "Built and hardened the evidence ingestion APIs, implemented scalable storage and caching for large evidence sets, and integrated backend connectors to external data sources used by the LangGraph agent."
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
      "Machine Learning",
      "Computer Vision",
      "Geolocation APIs",
      "Next.js"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Backend & ML Integrator",
        toolsUsed: ["Python", "Flask", "Machine Learning"],
        summary: "Developed the core Flask backend, structured the Quest Generation logic, and integrated the AI/ML verification services for plant health."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "UI/UX & Frontend Developer",
        toolsUsed: ["Next.js", "Figma", "Geolocation"],
        summary: "Designed the interactive Maps feature, the Eco-Leaderboard, and the conversational UI for the plant chatbot."
      },
      {
        memberId: 3, // Prajwal S
        roleInProject: "Backend Engineer & DevOps",
        toolsUsed: ["Flask", "PostgreSQL", "AWS", "Docker"],
        summary: "Implemented the quest engine backend, built the media ingestion and verification upload pipeline, and created CI/CD deployment scripts to keep the service reliable at scale."
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
      "Next.js",
      "React Native",
      "Python",
      "Flask",
      "LangGraph",
      "Gemini 2.5 Flash",
      "Firebase"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Team Leader & Backend Architect",
        toolsUsed: ["Python", "Flask", "LangGraph", "Gemini 2.5"],
        summary: "Architected the monorepo structure, developed the Flask API, and integrated Gemini with LangGraph for the AI-verified issue validation pipeline."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "Frontend Developer",
        toolsUsed: ["Next.js", "React Native", "Firebase"],
        summary: "Developed the intuitive mobile and web interfaces, implemented the real-time map visualizations, and integrated regional language support."
      },
      {
        memberId: 3, // Prajwal S
        roleInProject: "Backend & Geospatial Engineer",
        toolsUsed: ["PostGIS", "Python", "Firebase", "Docker"],
        summary: "Built spatial clustering and ward-routing logic using PostGIS, optimized duplicate-detection heuristics, and implemented backend endpoints for municipal routing and analytics."
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
      "AI Tools"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Game Logic & Backend Developer",
        toolsUsed: ["Game Engine", "JavaScript"],
        summary: "Worked on integrating the 2D tiled map, handling player movement, and establishing the GameCoin economy logic."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "World Designer & UI",
        toolsUsed: ["Tiled", "Figma"],
        summary: "Designed the 2D open world, developer towers, and the UI for the game hosting interfaces. Also made interactive mini-games for the platform."
      },
      {
        memberId: 3, // Prajwal S
        roleInProject: "Server & Real-time Systems Engineer",
        toolsUsed: ["WebSockets", "Node.js", "TypeScript", "Docker"],
        summary: "Implemented the real-time multiplayer backend, optimized WebSocket scaling and state-sync, and implemented secure GameCoin transaction endpoints and server deployment pipelines."
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
        roleInProject: "Backend Developer & System Architect",
        toolsUsed: ["Python", "Flask", "Firebase", "SMTP"],
        summary: "Architected the backend application, integrated the email scheduling system, and handled the Firebase database operations."
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
      {
        memberId: 3, // Prajwal S
        roleInProject: "Backend Engineer & Scheduler",
        toolsUsed: ["Python", "Flask", "Firebase", "SMTP", "Celery"],
        summary: "Implemented secure file upload endpoints, integrated the document extraction workflow with the backend scheduler, and built reliable notification scheduling and retry logic for email delivery."
      }
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
        summary: "Developed the cross-platform mobile application, engineered the low-bandwidth caching strategies, and structured the secure Firebase database."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "Frontend Developer",
        toolsUsed: ["React Native", "JavaScript", "Next.js"],
        summary: "Developed the web dashboard for healthcare centers and helped with the frontend architecture for the React Native mobile application."
      },
      {
        memberId: 4, // Nishanth
        roleInProject: "AI Integrator",
        toolsUsed: ["Google Gemini API"],
        summary: "Engineered the prompts and integrated the Gemini API to create the empathetic, medically accurate health chatbot."
      },
      {
        memberId: 3, // Prajwal S
        roleInProject: "Backend & Security Engineer",
        toolsUsed: ["Firebase", "Docker", "Python"],
        summary: "Implemented backend endpoints for clinic integrations, enforced data access controls and encryption-at-rest strategies, and built donor transparency reporting modules."
      }
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
        summary: "Developed the smart contracts for the staking/slashing trust system on the Sepolia testnet and engineered the real-time chat backend."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "UI/UX & Frontend Engineer",
        toolsUsed: ["Next.js", "Tailwind CSS"],
        summary: "Designed the clean, clutter-free marketplace interface and implemented the responsive frontend components."
      },
      {
        memberId: 3, // Prajwal S
        roleInProject: "Backend & Web3 Integration Engineer",
        toolsUsed: ["Supabase", "Node.js", "Solidity", "Postgres"],
        summary: "Built the trust-scoring backend, implemented staking/slashing integration hooks, hardened the chat backend and designed database schemas and indexing for production reliability."
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
      "React / Expo",
      "Node.js / Python", // Update if a specific backend was used
      "Google Gemini API",
      "US HTS API",
      "RESTful APIs"
    ],
    contributions: [
      {
        memberId: 1, // Nikhil R
        roleInProject: "Full Stack & AI Integrator",
        toolsUsed: ["Gemini API", "US HTS API", "Backend Framework"],
        summary: "Integrated the Gemini API for custom onboarding instructions, connected the US HTS API for real-time tariff fetching, and architected the overall backend data flow."
      },
      {
        memberId: 2, // Aryan
        roleInProject: "Frontend Developer",
        toolsUsed: ["Next.js", "Tailwind CSS", "UI Design"],
        summary: "Developed the intuitive, unified dashboard and user interface for the global trade and compliance platform."
      },
      {
        memberId: 3, // Prajwal S
        roleInProject: "Backend & API Integrator",
        toolsUsed: ["Node.js", "Python", "Redis", "Postgres"],
        summary: "Designed the API gateway and caching layer for tariff lookups, implemented rate-limits and retries, and ensured consistent data normalization across disparate tariff sources."
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
        roleInProject: "AI & Backend Engineer",
        toolsUsed: ["Python", "Flask", "Intel OpenVINO", "HuggingFace"],
        summary: "Developed the plant stage recognition model, optimized it using Intel OpenVINO, built the Flask backend, and integrated the BERT-uncased chatbot for personalized user support."
      },
      {
        memberId: 3, // Prajwal S
        roleInProject: "Mobile App Developer",
        toolsUsed: ["Flutter", "Dart", "UI/UX Design"],
        summary: "Built the cross-platform mobile app interface using Flutter, including the community pages and the marketplace placeholder."
      }
    ],
    links: {
      github: "https://github.com/nikhil-r0/Green-Terrace",
      youtube: "https://youtu.be/YrdPrBv_bgw"
    }
  }
];
