"use client";
import { Button } from "@/components/ui/button";
import { RectangleHorizontalIcon } from "lucide-react";
import { AuroraText } from "../ui/aurora-text";
import { BoxReveal } from "../magicui/box-reveal";
import Image from "next/image";
import bgGradient from "@/assets/gradient-bg.json";
import { BlurFade } from "../magicui/blur-fade";
import dynamic from "next/dynamic";
import { ShinyButton } from "../magicui/shiny-button";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export function Hero() {
  const whatsappLink = "https://wa.me/03109906218";
  const openWhatsAppInNewTab = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen grid grid-cols-12 grid-rows-12  relative"
    >
      <div className="flex flex-col col-span-7 gap-4 max-w-3xl row-span-7 row-start-5 row-end-11">
        <BoxReveal boxColor="#5146e628" duration={0.5}>
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m&nbsp;&nbsp;
              <AuroraText>&lt;Naeem /&gt;</AuroraText>
            </h1>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5146e628"} duration={0.5 * 1.2}>
          <div className="flex flex-col gap-4">
            <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal">
              Full Stack Developer crafting dynamic, scalable, and user-friendly
              applications with modern web technologies. Passionate about
              building seamless digital experiences using MERN and beyond.
            </p>
            <div className="flex gap-10">
              <IoLogoWhatsapp className="w-10 h-10 text-green-700" />
              <FaFacebook className="w-10 h-10 text-blue-700" />
              <FaGithub className="w-10 h-10 text-black" />
              <FaLinkedin className="w-10 h-10 text-blue-700" />
              <FaSquareUpwork className="w-10 h-10 text-green-700" />
            </div>
          </div>
        </BoxReveal>

        <BoxReveal duration={0.25 * 1.5} boxColor="5146e628">
          <div className="flex gap-4 mt-6">
            <Button size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <ShinyButton className="bg-gray-800" onClick={openWhatsAppInNewTab}>
              <p className="!text-white mt-1">Contact Me</p>
            </ShinyButton>
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

      <div className="">hello world</div>
    </section>
  );
}
