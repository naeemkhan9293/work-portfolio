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
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
}

export function BlogCard({
  title,
  description,
  date,
  readTime,
  slug,
}: BlogCardProps) {
  const { theme } = useTheme();
  return (
    <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
      <Card className="bg-transparent border-none">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription>
                {date} • {readTime}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full group-hover:border-primary/50"
            asChild
          >
            <Link href={`/blog/${slug}`}>
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </MagicCard>
  );
}
