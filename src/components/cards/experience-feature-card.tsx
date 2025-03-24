"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "../ui/magic-card";
import { useTheme } from "next-themes";
export const ExperienceCard = ({
  title,
  institution,
  period,
  description,
}: {
  title: string;
  institution: string;
  period: string;
  description: string;
}) => {
  const { theme } = useTheme();
  return (
    <MagicCard
      className="cursor-pointer flex-col items-center justify-center   shadow-2xl"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {institution} • {period}
          </p>
        </CardHeader>
        <CardContent> 
          <p>{description}</p>
        </CardContent>
      </Card>
    </MagicCard>
  );
};
