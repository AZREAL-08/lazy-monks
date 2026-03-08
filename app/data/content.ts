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
            portfolio: "https://example.com"
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

## 🚀 The Core Philosophy: "Built for the Real World"

When natural disasters strike, most reporting systems fail due to two critical reasons: **Network Collapse** and **Low User Adoption**. With Samudra Prahari, we set out to solve both of these fundamental flaws:

1. **Resilience in Crisis:** We engineered an offline-first mobile app powered by **P2P BLE Mesh Networking**. This ensures that distress reports and critical updates can hop from device to device, eventually reaching authorities even when traditional cellular towers are completely down.
2. **Everyday Engagement:** To ensure the network is actually populated when a disaster occurs, we built the **"Coastal Companion"** suite. By offering daily utilities like tide forecasts and tourist guides, the app remains an active, daily habit for coastal communities 365 days a year.

---

## 📂 The Ecosystem Architecture

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

## 🛡️ Key Innovations

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
                memberId: 4, // Nishanth
                roleInProject: "AI & Data Engineer",
                toolsUsed: ["Python", "IndicBERT", "PyTorch"],
                summary: "Developed the social media sentiment analysis pipeline and the image verification module."
            }
            // Add Aryan and Prajwal's contributions here as needed
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

## 🧠 The Cognitive Engine: LangGraph Backend

The heart of Veris is its backend intelligence, built with Python and LangGraph. Instead of a simple prompt-response loop, we engineered a stateful, looped pipeline controlled by an \`AgentState\` object. This allows the AI to "think" in steps, mimicking a human detective:

1. **The Collector:** The agent begins by scouring online sources, actively fetching raw data and potential evidence related to the user's query.
2. **The Verifier:** Not all data is equal. This node acts as a critical filter, cross-referencing information, evaluating credibility, and assigning trust scores to the evidence.
3. **The Graph Node:** As verified facts emerge, the system synthesizes them into a relationship map, connecting entities, events, and evidence logically.
4. **The Refiner:** The AI evaluates its own findings. *Do we have enough to conclude the investigation?* If not, it formulates a \`next_query\` and loops back to the Collector. If yes, it finalizes the investigation.
5. **The Reporter:** Finally, the agent compiles the structured data into a comprehensive, readable report.

This autonomous looping means the agent can go down rabbit holes, hit dead ends, pivot, and ultimately return with a highly verified conclusion.

---

## 🎨 The Command Interface: Next.js Frontend

An advanced AI needs an interface that makes complex data digestible. We built the frontend using Next.js, focusing heavily on interactive visualization.

* **Interactive Evidence Visualization:** Users aren't just handed a text summary. They can explore the AI's "thought process" through dynamic knowledge graphs and timelines, seeing exactly how the agent connected the dots.
* **Immersive UI:** We implemented custom CSS modules and subtle particle animation effects to give the dashboard a modern, command-center aesthetic. 
* **Seamless Authentication:** A secure user dashboard allows investigators to save their sessions, review past reports, and manage their API configurations.

## 🚀 The Impact

Veris transforms hours of manual open-source intelligence (OSINT) gathering into a process that takes minutes. By combining the iterative reasoning of LangGraph with the sleek, visual power of Next.js, we created a tool that doesn't just tell you the answer—it shows you exactly how it proved it.
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
            }
            // Add Prajwal/Nishanth contributions as needed
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

## 🌍 The Core Concept: Become a Guardian

Green Quest transforms ordinary citizens into localized environmental heroes. Using our interactive map interface, users can locate and "adopt" plants in their immediate vicinity, becoming their official Guardians.

To keep users engaged, we introduced a dynamic quest system:
* **Actionable Quests:** Users receive regular tasks such as watering their adopted plant, submitting health reports, and tracking growth.
* **AI Verification:** To ensure authenticity, users submit photos and videos of their tasks. Our AI/ML service analyzes the media to identify the species, verify the plant's health score, and confirm that the quest was genuinely completed.
* **Competitive Sustainability:** A global Eco-Leaderboard induces friendly competition, rewarding the most active guardians with points and recognition.

---

## 🗣️ Giving Nature a Voice

One of the most innovative features of Green Quest is treating every plant as a unique individual. We integrated a specialized AI Chatbot that gives each plant a distinct personality based on its species and current health status. 

Instead of reading a boring wiki article about a *Yellow-Vein Eranthemum*, users can directly text the plant! The plant will respond with its current health score (e.g., 9.0/10), tell the user what kind of balanced 10-10-10 fertilizer it prefers, and guide the user on organic compost options. This emotional connection drastically improves user retention and empathy toward urban flora.

---

## ⚙️ The Technical Ecosystem

To make this seamless, we built a robust architecture that bridges the physical and digital worlds:
1. **Frontend Collection:** The mobile UI captures live camera feeds, location data, and handles the chatbot interface.
2. **Flask Backend:** A lightweight, high-performance Python backend orchestrates the logic, handling user data and quest generation.
3. **AI/ML Service Node:** A dedicated pipeline that processes uploaded images and videos to classify plant species and assess biological health.

---

## 📈 Real-World Incentives & Impact

Green Quest isn't just a game; it's a verifiable sustainability platform. 
By providing geotagged, AI-verified proof of tree planting and care, we created a system ready for **Corporate Partnerships**. Organizations looking to fulfill ecological pledges (like the IPL's "Green Dot Ball" initiative) can sponsor quests. In return, users can redeem their earned "eco-points" for real-world gardening supplies, creating a closed-loop economy of environmental good.
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
            }
        ],
        links: {
            github: "https://github.com/nikhil-r0/green-quest",
            youtube: null
        }
    },
    {
        id: "proj-6",
        title: "Urban Trust",
        date: "2025-04",
        tagline: "Empowering citizens and authorities with AI-verified civic issue tracking.",
        description: "Urban Trust is a comprehensive platform designed to enhance urban community development. It tackles recurring civic issues like potholes and garbage dumps through AI-verified reporting, real-time smart map visualization, and an automated routing system for municipal officials.",
        content: `
### **Fixing the Broken Civic Complaint System**

Urban areas consistently face recurring civic issues like massive potholes, illegal garbage dumps, and broken infrastructure. These problems often go underreported or unresolved due to slow, opaque, and highly centralized complaint systems. 

Existing issue-reporting apps are fundamentally flawed: unresolved issues are prematurely marked as "resolved," they lack visualization tools for municipal authorities to make data-driven decisions, and there is near-zero public interaction or transparency. 

To put this in perspective: In Bengaluru alone, between April and December 2024, the BBMP reported 16,940 potholes. Despite an annual allocation of roughly ₹45 crore for repairs, over 7,000 potholes were left entirely unaddressed. **Urban Trust** was built by the *Lazy Monks* to solve this accountability crisis.

---

## 🚀 The Urban Trust Solution

We engineered a platform that bridges the trust gap between citizens and the government through automation and transparency.

* **AI-Verified Issue Reporting:** Users can snap a photo of a civic issue. Instead of instantly going to a human, our AI automatically validates the complaint using the image input, description, and geolocation data.
* **Smart Map Visualization:** A real-time, interactive map tracks active, unresolved, and escalating issues across the city, giving both citizens and authorities a bird's-eye view of urban decay.
* **Automated Ward Routing:** The system automatically maps reported issues to specific municipal ward boundaries and routes them directly to the responsible local officials for faster action.
* **Duplicate Detection:** To prevent system overload, the platform automatically identifies similar reports in the exact same location, merging them to strengthen the verification of a single issue.
* **Citizen Feedback Loop:** Citizens can verify or actively dispute the resolution of reported issues, ensuring transparent closure and keeping authorities accountable.
* **Multilingual Inclusivity:** The UI supports regional languages (like Kannada), ensuring citizens from all backgrounds can easily report and track issues.

---

## 🧠 The Architecture: AI & Autonomous Agents

Urban Trust operates on a highly modular, monorepo architecture consisting of three primary submodules: the core logic, the web interface, and the backend API.

The true brain of the engine is powered by **Gemini 2.5 Flash**, orchestrated by a **Python/Flask** backend utilizing **LangGraph**. This creates a reactive agent that doesn't just store data, but actively verifies images, categorizes severity, and routes the data intelligently. 

The frontend provides an intuitive experience built with **Next.js** (for the interactive web dashboard) and **React Native** (for the mobile reporter app), all tied together with **Firebase** to store investigation cycles and handle secure authentication.

---

## 🔮 Future Roadmap

We designed Urban Trust to scale. Our future roadmap includes:
1. **Predictive Maintenance:** Using historical data and machine learning to predict and prevent civic infrastructure failures *before* they occur.
2. **Blockchain Integration:** Introducing tamper-proof ledgers for issue tracking and resolution logs to completely eliminate bureaucratic manipulation.
3. **Severity-Based Validation:** Advanced AI models to automatically categorize the danger level of an issue (e.g., a massive sinkhole vs. a small pavement crack) to help municipal bodies prioritize interventions.
        `,
        imageFolder: "/projects/urbantrust",
        thumbnail: "map.png",
        gallery: [
            "camera.png",
            "architecture.png",
            "homepage.png",
            "profile.png",
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
                memberId: 4, // Nishanth Antony (Based on UI screenshots)
                roleInProject: "Frontend Developer",
                toolsUsed: ["Next.js", "React Native", "Firebase"],
                summary: "Developed the intuitive mobile and web interfaces, implemented the real-time map visualizations, and integrated regional language support."
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

## 🌍 The Virtual World of GameNest

GameNest solves the isolation of indie development by offering a 2D open-world platform where the developer community becomes an explorable map. Every developer gets a virtual "space" or "tower" to:

* **Host Live Demos:** Showcase playable games and link directly to GitHub repositories.
* **Interactive Exploration:** Allow users to physically walk their avatars around the 2D world and seamlessly enter different game spaces.
* **Playtest & Connect:** Engage directly with creators, offer feedback, and contribute to ongoing projects.

It turns the dev community into an explorable world—making discovery, feedback, and collaboration feel like a shared adventure rather than isolated tasks.

---

## 🪙 The GameCoin Economy

Instead of simply purchasing virtual real estate, developers must *earn* their space through community engagement. We introduced **GameCoins**, a virtual currency gained exclusively through meaningful ecosystem interactions:

* 🎮 **Playing** games made by other developers.
* 🤝 **Collaborating** on projects and contributing code.
* 📝 **Reviewing** and providing constructive feedback on others' work.

This creates a virtuous cycle where exploration, testing, and collaboration are explicitly rewarded. Game development transforms from a solitary task into an interactive, community-driven adventure where everyone grows together.

---

## 🚧 Overcoming Development Challenges

As newcomers to game development, bringing GameNest to life was its own adventure. Our first and biggest challenge was integrating the game engine with our custom-designed 2D map. Getting the tiled map to load correctly, managing collision layers, and ensuring smooth player movement across the world took substantial effort and trial-and-error.

Other ongoing hurdles included:
* Automating the dynamic addition of new games and developer towers to the map.
* Designing consistent, engaging mini-games that align with our collaboration and exploration goals.

To overcome these roadblocks, we leaned heavily on community resources—from YouTube tutorials and official documentation to AI-powered tools and open-source examples. The process involved intense debugging, refactoring, and experimentation, but every solved problem deepened our understanding of the ecosystem and improved the overall world design.
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
            " TypeScript",
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
                summary: "Designed the 2D open world, developer towers, and the UI for the game hosting interfaces."
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

---

## 📄 How It Works: The AI Pipeline

ContractIQ acts as an intelligent digital assistant for your legal documents. Instead of manually entering data into a calendar, users simply upload their contracts to the platform. 

Here is what happens under the hood:
* **Intelligent Data Extraction:** We integrated the **Gemini API** to "read" the uploaded documents. The AI accurately parses through the text to extract structured details, identifying the parties involved, effective dates, and specific term durations.
* **Algorithmic Date Calculation:** Once the raw dates and durations are extracted, the backend engine parses various date formats and computes the exact termination dates.
* **Proactive Notification Scheduling:** The system doesn't just store dates; it acts on them. ContractIQ schedules automated email notifications (e.g., 1, 3, or 5 days before a contract terminates) and flags contracts that have already expired.
* **Automated Email Alerts:** Using an SMTP server integration, the platform sends tailored, automated email alerts directly to the responsible parties so they have ample time to renegotiate or cancel.

---

## ⚙️ System Architecture

ContractIQ was built with a focus on reliability and clean backend architecture:
* **Backend Core:** Developed using **Python** and **Flask**, providing a lightweight but robust server environment to handle file uploads and background processing.
* **Database & Storage:** Integrated with **Firebase** to securely store user data, extracted contract metadata, and notification schedules.
* **Frontend Dashboard:** A clean, server-rendered interface built with HTML, CSS, and Vanilla JS, offering a straightforward dashboard for users to upload documents and view their active contract timelines.

---

## 🚀 The Impact

By bridging the gap between advanced Large Language Models and traditional cron-job scheduling, ContractIQ transforms a static PDF into an active, managed asset. It significantly reduces the administrative burden on businesses, ensuring compliance and saving money that might otherwise be lost to missed deadlines.
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
                memberId: 4, // Nishanth
                roleInProject: "AI Integration Engineer",
                toolsUsed: ["Gemini API", "Python"],
                summary: "Developed the prompt engineering and integration logic with the Gemini API to accurately extract unstructured data from legal PDFs."
            }
        ],
        links: {
            github: "https://github.com/nikhil-r0/contractiq-backend",
            youtube: "https://youtu.be/BFNKKWBWCJk"
        }
    }
];