"use client";

import { Button } from "@/components/ui/button";
import { Code, Code2, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-4">
            © {new Date().getFullYear()} Built with
            <Code2 />
            by Naeem
          </div>
        </div>
      </div>
    </footer>
  );
}
