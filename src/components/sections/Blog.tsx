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
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "@/components/cards/BlogCard";
import { BlurFade } from "../magicui/blur-fade";

const blogs = [
  {
    title: "Building Scalable Applications with Next.js",
    description:
      "Learn how to build and deploy scalable applications using Next.js and the latest web technologies.",
    date: "April 1, 2024",
    readTime: "5 min read",
    slug: "building-scalable-applications",
  },
  {
    title: "Understanding TypeScript in React",
    description:
      "A comprehensive guide to using TypeScript with React for better type safety and developer experience.",
    date: "March 25, 2024",
    readTime: "7 min read",
    slug: "understanding-typescript-react",
  },
  {
    title: "Modern CSS Techniques",
    description:
      "Explore the latest CSS features and techniques for building modern user interfaces.",
    date: "March 15, 2024",
    readTime: "4 min read",
    slug: "modern-css-techniques",
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      className="w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="mx-auto space-y-12">
        <BlurFade delay={0.15} inView>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Latest from the Blog
            </h2>
            <p className="text-muted-foreground max-w-[85ch] mx-auto">
              Thoughts, learnings, and insights from my journey as a developer.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 gap-2">
          {blogs.map((blog, idx) => (
            <BlurFade delay={0.15 * idx} inView key={idx}>
              <BlogCard
                title={blog.title}
                description={blog.description}
                date={blog.date}
                readTime={blog.readTime}
                slug={blog.slug}
              />
            </BlurFade>
          ))}
        </div>
        <BlurFade delay={0.15} inView>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
