"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { AuroraText } from "./ui/aurora-text";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  // { label: "Blogs", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="">
          <AuroraText>&lt;Naeem /&gt;</AuroraText>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`text-sm font-medium hover:text-primary cursor-pointer ${navigationMenuTriggerStyle()}`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
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
