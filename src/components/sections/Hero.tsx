"use client";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";
import { IconCloudDemo } from "../cloud-icons";

export function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative"
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
        <Code2 className="h-16 w-16 text-primary" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I&apos;m{"\t"}
          <AuroraText>Naeem</AuroraText>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal">
          Full Stack Developer crafting dynamic, scalable, and user-friendly
          applications with modern web technologies. Passionate about building
          seamless digital experiences using MERN and beyond.
        </p>
        <div className="flex gap-4 mt-6">
          <Button size="lg">View My Work</Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </div>
      <IconCloudDemo />
    </section>
  );
}
