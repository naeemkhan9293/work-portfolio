"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, Tag } from "lucide-react";
import Image from "next/image";
import { Blog as BlogTypes } from "@/types/blog";

export default function Blog({ blog }: { blog: BlogTypes }) {
  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">
          No blog post to preview
        </p>
      </div>
    );
  }

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
          {blog.featuredImage && (
            <div className="w-full h-72 relative">
              <Image
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-full object-cover"
                fill
              />
            </div>
          )}

          <CardHeader className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="text-sm dark:bg-gray-700 dark:text-gray-200"
              >
                {blog.category}
              </Badge>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <CalendarDays className="w-4 h-4 mr-1" />
                {formatDate(blog.publishDate)}
              </div>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog.title}
            </h1>

            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {blog.metaDescription}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex flex-wrap gap-2">
                {blog?.tags?.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex items-center gap-1 dark:border-gray-600 dark:text-gray-300"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
