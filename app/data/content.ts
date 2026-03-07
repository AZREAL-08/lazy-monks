import { Github, Linkedin, Globe, Code2, Terminal, Cpu, Layout, Server, Database, Smartphone } from "lucide-react";

export const teamMembers = [
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

export const hackathonProjects = [
    {
        id: "proj-1",
        title: "Samudra Prahari",
        hackathon: "SIH 2025",
        description: "A decentralized offline chat application built with React Native (Expo) that enables peer-to-peer messaging without internet using Bluetooth Low Energy (BLE) mesh networking. It allows nearby devices to discover each other and communicate through public or encrypted private channels, making it useful for remote, emergency, or off-grid communication.",
        image: "/Samudra.png",
        techStack: [
            "React Native(Expo)",
            "BLE Mesh Networking",
            "Bluetooth Low Energy",
            "React webpage"
        ],
        links: {
            github: "https://github.com/nikhil-r0/samudra-prahari-ecosystem",
            youtube: "https://youtu.be/5G5odwkGp0A?si=59ijkQ4nmovnlKrA"
        }
    },
    {
        id: "proj-2",
        title: "Veris Truth Engine",
        hackathon: "EarthHack 24",
        description: "Veris Ecosystem is a full-stack platform for an autonomous investigative AI agent, using a Python/LangGraph backend and Next.js frontend to enable AI-driven investigation, reasoning, and interactive visualization of evidence and insights.",
        image: "/veris.png",
        techStack: [
            "Python",
            "LangGraph",
            "Node.js",
            "Next.js"
        ],
        links: {
            github: "https://github.com/nikhil-r0/veris-ecosystem",
            youtube: "https://youtu.be/OmviNm0HJbg?si=FOHg5iS0qO9Ne72D"
        }
    },
    {
        id: "proj-3",
        title: "Sauda (सौदा)",
        hackathon: "Build with AI",
        description: "A fair, community-driven, and modern marketplace where buying, selling, and bartering second-hand goods is as simple as it should be.",
        image: "/sauda.png",
        techStack: [
            "Next.js",
            "Supabase",
            "Tailwind CSS",
            "Solidity",
            "Vercel"
        ],
        links: {
            github: "https://github.com/nikhil-r0/sauda-web",
        }
    },
    {
        id: "proj-4",
        title: "Contract IQ",
        hackathon: "Build with AI",
        description: "ContractIQ is an automated notification system for managing digital contracts. The system extracts key contract details (such as effective dates and term durations), calculates termination dates, schedules email notifications, and sends timely alerts using an SMTP server. It leverages the Gemini API for data extraction and integrates with Firebase for database operations.",
        image: "/Contract.jpeg",
        techStack: [
            "Python",
            "Flask",
            "Firebase"
        ],
        links: {
            github: "https://github.com/nikhil-r0/contractiq-backend",
            youtube: "https://youtu.be/BFNKKWBWCJk?si=mIpAhUYYSHzkPOfB"
        }
    }
];
