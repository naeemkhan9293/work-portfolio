"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { AuroraText } from "./ui/aurora-text";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="">
          <AuroraText>&lt;Naeem /&gt;</AuroraText>
        </div>
        {/* <div className="relative w-16 h-16">
          <Image src="/logo.png" alt="logo" fill  />
        </div> */}

        <NavigationMenu>
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-primary"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary"
              >
                About
              </a>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-medium hover:text-primary"
              >
                Blogs
              </Link>
            </li>
            <li>
              <a
                href="#work"
                className="text-sm font-medium hover:text-primary"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </NavigationMenu>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </nav>
  );
}
