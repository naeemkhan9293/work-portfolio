"use client";
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";

const skills = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "Python",
  "SQL",
  "Stripe",
];

export function About() {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground max-w-[85ch] mx-auto">
            I&apos;m a passionate full-stack developer with expertise in
            building modern web applications. With a strong foundation in the
            MERN stack and a keen eye for design, I create scalable and
            user-friendly solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <MagicCard
              key={skill}
              className="cursor-pointer flex-col items-center justify-center whitespace-nowrap p-6 shadow-2xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <span className="font-medium">{skill}</span>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
