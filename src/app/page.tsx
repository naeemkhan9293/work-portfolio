"use client";

import { Hero } from "@/components/sections/Hero";
import { SkillSection } from "@/components/sections/SkillSection";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <SkillSection />
        <Projects />
        {/* <Blog /> */}
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
