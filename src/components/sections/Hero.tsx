"use client";
import { AuroraText } from "../ui/aurora-text";
import { BoxReveal } from "../magicui/box-reveal";
import Image from "next/image";
import bgGradient from "@/assets/gradient-bg.json";
import { BlurFade } from "../magicui/blur-fade";
import dynamic from "next/dynamic";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { CustomTip } from "../custom-tooltip";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export function Hero() {
  const whatsappLink = "https://wa.me/03109906218";
  const facebookLink = "https://www.facebook.com/share/1KvmwAkyyG/";
  const githubLink = "https://github.com/naeemkhan9293";
  const linkedInLink = "https://linkedin.com/in/naeem-khan-b205b8304";
  const upWorkLink = "https://www.upwork.com/freelancers/~012b38503956a57aee/";

  return (
    <section
      id="home"
      className="w-full min-h-screen grid grid-cols-12 grid-rows-12  relative"
    >
      <div className="flex flex-col col-span-7 col-start-2 col-end-8 gap-4 max-w-3xl row-span-7 row-start-5 row-end-11">
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
              <CustomTip tip="Whatsapp">
                <Link href={whatsappLink} target="_blank">
                  <IoLogoWhatsapp className="w-10 h-10 text-green-700" />
                </Link>
              </CustomTip>
              <CustomTip tip="Facebook">
                <Link href={facebookLink} target="_blank">
                  <FaFacebook className="w-10 h-10 text-blue-700" />
                </Link>
              </CustomTip>
              <CustomTip tip="Github">
                <Link href={githubLink} target="_blank">
                  <FaGithub className="w-10 h-10 text-black dark:text-white" />
                </Link>
              </CustomTip>
              <CustomTip tip="LinkedIn">
                <Link href={linkedInLink} target="_blank">
                  <FaLinkedin className="w-10 h-10 text-blue-700" />
                </Link>
              </CustomTip>
              <CustomTip tip="Upwork">
                <Link href={upWorkLink} target="_blank">
                  <FaSquareUpwork className="w-10 h-10 text-green-700" />
                </Link>
              </CustomTip>
            </div>
          </div>
        </BoxReveal>
      </div>
      <BlurFade
        delay={0.25 * 0.05}
        inView
        className="h-full w-full col-span-5 row-span-7 row-start-2 row-end-11 relative flex items-center justify-center "
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
    </section>
  );
}
