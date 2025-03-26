"use client";

import { Hero } from "@/components/sections/Hero";
import { SkillSection } from "@/components/sections/SkillSection";
import { Projects } from "@/components/sections/Projects";
// import { Blog } from "@/components/sections/Blog";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center w-full  mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        {/* <Blog /> */}
        <SkillSection />
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
