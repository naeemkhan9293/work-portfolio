"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Stripe, and MongoDB.",
    tech: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "Real-time task management application with team collaboration features.",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool using OpenAI's GPT-3 API.",
    tech: ["Python", "FastAPI", "React", "OpenAI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics and engagement tracking.",
    tech: ["Next.js", "D3.js", "Firebase", "Material-UI"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-[85ch] mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group transition-all duration-300  hover:bg-accent/50 flex flex-col"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm group-hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group-hover:border-primary/50"
                >
                  <Link href={project.github}>
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demo}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
