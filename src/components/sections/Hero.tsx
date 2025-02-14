"use client";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";
import { BoxReveal } from "../magicui/box-reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative"
    >
      <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
        <BoxReveal boxColor={"#5146e628"} duration={0.5}>
          <div className="flex flex-col items-center">
            <Code2 className="h-16 w-16 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m{"\t"}
              <AuroraText>Naeem</AuroraText>
            </h1>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#5146e628"} duration={0.5 * 1.2}>
          <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal">
            Full Stack Developer crafting dynamic, scalable, and user-friendly
            applications with modern web technologies. Passionate about building
            seamless digital experiences using MERN and beyond.
          </p>
        </BoxReveal>

        <BoxReveal duration={0.25 * 1.5} boxColor="5146e628">
          <div className="flex gap-4 mt-6">
            <Button size="lg">View My Work</Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
}
