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

const recentBlog = {
  title: "Building Scalable Applications with Next.js",
  description:
    "Learn how to build and deploy scalable applications using Next.js and the latest web technologies.",
  date: "April 1, 2024",
  readTime: "5 min read",
  slug: "building-scalable-applications",
};

export function Blog() {
  return (
    <section
      id="blog"
      className="w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Latest from the Blog
          </h2>
          <p className="text-muted-foreground max-w-[85ch] mx-auto">
            Thoughts, learnings, and insights from my journey as a developer.
          </p>
        </div>

        <Card className="group transition-all duration-300 hover:shadow-xl hover:bg-accent/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-2xl">{recentBlog.title}</CardTitle>
                <CardDescription>
                  {recentBlog.date} • {recentBlog.readTime}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{recentBlog.description}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full group-hover:border-primary/50"
              asChild
            >
              <Link href={`/blog/${recentBlog.slug}`}>
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="flex justify-center">
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
