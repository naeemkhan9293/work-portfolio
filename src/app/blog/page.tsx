"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Mock data for blog posts
const blogPosts = [
  {
    title: "Building Scalable Applications with Next.js",
    description: "Learn how to build and deploy scalable applications using Next.js and the latest web technologies.",
    date: "April 1, 2024",
    readTime: "5 min read",
    slug: "building-scalable-applications"
  },
  {
    title: "The Power of Server Components in React",
    description: "Exploring the benefits and use cases of React Server Components in modern web development.",
    date: "March 25, 2024",
    readTime: "7 min read",
    slug: "power-of-server-components"
  },
  {
    title: "Mastering TypeScript: Best Practices",
    description: "A comprehensive guide to TypeScript best practices and advanced features for better code quality.",
    date: "March 15, 2024",
    readTime: "10 min read",
    slug: "mastering-typescript"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts, learnings, and insights from my journey as a developer.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-accent/50">
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle className="text-2xl group-hover:scale-105 transition-transform duration-300">{post.title}</CardTitle>
                  <CardDescription>
                    {post.date} • {post.readTime}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:border-primary/50" asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}