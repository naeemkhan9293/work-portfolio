"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";
import { BlurFade } from "../magicui/blur-fade";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Stripe, ,shadcn-ui and MongoDB.",
    tech: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "shadcn-ui",
      "typescript",
      "React",
    ],
    github: "https://github.com/naeemkhan9293/woo-comerce",
    demo: "https://woo-comerce.vercel.app/",
  },
  {
    title: "Shopify-app",
    description:
      "This Shopify app is built using Next.js and integrates seamlessly with Shopify to provide real-time store management features. ",
    tech: ["React", "Nextjs", "shopify"],
    github: "https://github.com/naeemkhan9293/shopify-app",
    demo: "https://shopify-app-steel.vercel.app/",
  },
  {
    title: "MarketsZ",
    description:
      "Shop online using your unique MarketsZ USA & UK address, and  deliver to your home or business in the Dutch Caribbean.",
    tech: ["Next.js", "Shadcn-ui", "Framer Motion", "Typescript"],
    github: "#",
    demo: "https://market-z-ten.vercel.app/",
  },
  {
    title: "Biid-It",
    description:
      "Biid-It connects homeowners with contractors for renovation projects. Homeowners can post jobs, and contractors bid to offer their services",
    tech: [
      "React",
      "Vite",
      "Shadcn-ui",
      "react-router-dom",
      "Nodejs",
      "Express-js",
      "Mongodb",
      "Stripe",
    ],
    github: "#",
    demo: "https://market-z-ten.vercel.app/",
  },
  {
    title: "Venday",
    description:
      "Connect care providers, hospitals, and agencies seamlessly. Experience the future of healthcare staffing today.",
    tech: ["Nextjs", "Shadcn-ui", "Nodejs", "Express-js", "Mongodb", "Stripe"],
    github: "#",
    demo: "https://venday.vercel.app/",
  },
];

export function Projects() {
  const { theme } = useTheme();
  return (
    <section
      id="projects"
      className="w-full min-h-screen  flex items-center justify-center py-20"
    >
      <div className="mx-auto space-y-12">
        <BlurFade delay={0.15} inView>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-[85ch] mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <BlurFade delay={0.15 * index} inView key={index}>
              <MagicCard
                className="cursor-pointer shadow-2xl p-5"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <div className="grid gap-5">
                  <div>
                    <h1 className="text-xl font-bold">{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
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
                  <div className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="group-hover:border-primary/50"
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
