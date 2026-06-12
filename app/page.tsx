// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsWins from "@/components/Skills";
import Footer from "@/components/Footer";

const divider = "· · ·";

function Divider() {
  return (
    <p aria-hidden className="text-center text-xs tracking-[0.5em]" style={{ color: "var(--border)" }}>
      {divider}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-4 py-10 sm:py-16 space-y-8">
        <Hero />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <SkillsWins />
        <Footer />
      </main>
    </>
  );
}