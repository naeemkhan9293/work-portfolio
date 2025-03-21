"use client";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";
import { BoxReveal } from "../magicui/box-reveal";
import Image from "next/image";
import Lottie from "lottie-react";
import bgGradient from "@/assets/gradient-bg.json";
import { BlurFade } from "../magicui/blur-fade";

export function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen grid grid-cols-12 grid-rows-12 place-items-center relative "
    >
      <div className="flex flex-col items-center text-center col-span-7 gap-4 max-w-3xl row-span-7 row-start-3 row-end-11">
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
            <Button size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </div>
        </BoxReveal>
      </div>
      {/* <div className=""> */}
      <BlurFade
        delay={0.25 * 0.05}
        inView
        className="h-full w-full col-span-5 row-span-7 row-start-3 row-end-11 relative flex items-center justify-center "
      >
        <Lottie animationData={bgGradient} className="absolute" />
        <div className="relative h-full w-full max-w-sm max-h-[384px] rounded-full">
          <Image
            src="/image.png"
            fill
            alt="developer-engineer"
            className="object-cover object-[50%_5%] rounded-full"
          />
        </div>
      </BlurFade>
      {/* </div> */}
    </section>
  );
}
