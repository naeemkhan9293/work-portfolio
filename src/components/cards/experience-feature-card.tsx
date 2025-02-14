"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "../ui/magic-card";
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
}) => (
  <MagicCard className="flex items-center justify-center">
    <Card className="bg-transparent border-none">
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
