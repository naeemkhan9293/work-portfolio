"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import { format } from "date-fns";
import { Blog } from "@/types/blog";
import Link from "next/link";

export default function Blogs({ blogs }: { blogs: Blog[] }) {
  const publishedBlogs = blogs.filter((blog) => blog.isPublish);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16 pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Blogs</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our collection of articles, insights, and guides on
            technology trends and developments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publishedBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  const [isHovered, setIsHovered] = useState(false);

  const formattedDate = format(new Date(blog.publishDate), "MMMM d, yyyy");

  const readingTime = Math.max(1, Math.ceil(blog.content.length / 1000));

  return (
    <Card
      className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary hover:bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
            {blog.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pt-6 pb-2">
        <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{readingTime} min read</span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 line-clamp-2">
          {blog.excerpt}
        </p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 mt-2">
          {blog.tags && blog.tags.length > 0
            ? blog.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0 text-xs rounded-full px-3"
                >
                  {tag}
                </Badge>
              ))
            : null}
        </div>
      </CardContent>

      <CardFooter className="pt-2 pb-6">
        <Button
          variant="ghost"
          className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-medium group flex items-center"
          asChild
        >
          <Link href={`/blog/${blog.slug}`}>
            Read article
            <ArrowRightIcon
              className={`h-4 w-4 ml-2 transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
