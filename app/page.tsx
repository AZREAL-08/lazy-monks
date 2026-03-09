import HeroSection from "./components/HeroSection";
import MonkScrollSection from "./components/MonkScrollSection";
import ScrollRevealSection from "./components/ScrollRevealSection";
import TeamSection from "./components/TeamSection";
import GuestMembersSection from "./components/GuestMembersSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen text-foreground relative">
      <HeroSection />
      <MonkScrollSection />
      <ScrollRevealSection />

      <TeamSection />
      <GuestMembersSection />

      {/* Spacer */}
      <div className="h-32" />

      <ProjectsSection />

      <Footer />
    </main>
  );
}
