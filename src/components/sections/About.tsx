"use client";

import { Card, CardContent } from "@/components/ui/card";

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
  "Stripe"
];

export function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground max-w-[85ch] mx-auto">
            I'm a passionate full-stack developer with expertise in building
            modern web applications. With a strong foundation in the MERN stack
            and a keen eye for design, I create scalable and user-friendly
            solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <Card
              key={skill}
              className="transition-all duration-300 hover:shadow-xl hover:bg-accent/50"
            >
              <CardContent className="flex items-center justify-center p-6">
                <span className="font-medium">{skill}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
