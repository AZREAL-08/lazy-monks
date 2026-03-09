# 🐒 Lazy Monks — Team Portfolio

A modern, animated team portfolio website built by **Lazy Monks**, a group of developers who show up to hackathons to learn new tools, experiment with wild ideas, and build things we genuinely think the world could use.

> **Live Site:** [Coming Soon]

---

## ✨ Features

- **Scroll-driven animations** — Framer Motion powered reveal effects and parallax
- **Animated stat counters** — Numbers tick up dramatically as you scroll into view
- **Project showcase** — Featured projects on the homepage, full catalog on `/projects`
- **Individual project pages** — Detailed write-ups with image galleries and contribution breakdowns
- **Dark/Light theming** — Togglable theme with orange accent palette
- **Responsive design** — Looks great on mobile, tablet, and desktop

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **Next.js 16** | Framework (App Router) |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Lucide + React Icons** | Iconography |

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/nikhil-r0/lazy-monks.git
cd lazy-monks

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be running at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
```

---

## 🤝 Contributing as a Guest Member

We welcome contributions! If you've worked with us on a project (or just want to be part of the crew), you can get yourself featured on our site as a **Guest Contributor**.

### How to Contribute

1. **Fork** this repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/lazy-monks.git
   cd lazy-monks
   ```
3. **Add your profile photo** to `/public/guests/` (e.g., `YourName.jpeg`)
   - Use a clear, well-lit photo
   - Square aspect ratio works best
4. **Edit** `app/data/content.ts` — find the `guestMembers` array and add your entry:

   ```typescript
   export const guestMembers: GuestMember[] = [
     {
       name: "Your Name",
       role: "Your Title",                        // e.g. "Frontend Developer"
       bio: "A short bio about yourself.",         // 1-2 sentences
       image: "/guests/YourName.jpeg",             // Path to your photo
       skills: ["React", "TypeScript", "Figma"],   // 3-6 top skills
       socials: {
         github: "https://github.com/yourusername",
         linkedin: "https://linkedin.com/in/yourprofile",  // optional
         portfolio: "https://yoursite.dev"                  // optional
       },
       project: "Project Name",                    // Which project you helped with
       contribution: "What you worked on."         // Brief description
     },
   ];
   ```

5. **Push** your changes and open a **Pull Request**:
   ```bash
   git add .
   git commit -m "feat: add [Your Name] as guest contributor"
   git push origin main
   ```
6. Open a PR against `nikhil-r0/lazy-monks` and we'll review and merge it!

### Contribution Guidelines

- Keep your bio concise and professional
- List skills relevant to your contribution
- Ensure your image is optimized (< 500KB)
- Don't modify any other files besides `content.ts` and your image in `/public/guests/`

---

## 📁 Project Structure

```
lazy-monks/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── HeroSection.tsx
│   │   ├── MonkScrollSection.tsx
│   │   ├── ScrollRevealSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── GuestMembersSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── content.ts       # All team, guest, and project data
│   ├── projects/
│   │   └── [projectid]/     # Dynamic project detail pages
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/                   # Static assets (images, fonts, etc.)
│   ├── guests/               # Guest contributor photos
│   └── projects/             # Project screenshots & galleries
└── README.md
```

---

## 👥 The Team

| Name | Role |
|---|---|
| **Nikhil R** | Full Stack Developer |
| **Aryan Mishra** | UI/UX & Frontend Engineer |
| **Prajwal S** | Backend Architect |
| **Nishanth Antony** | AI & Machine Learning Engineer |

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with 🧡 and too much caffeine by the <strong>Lazy Monks</strong>.
</p>
