"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceCard } from "../cards/experience-feature-card";
import { BlurFade } from "../magicui/blur-fade";

const education = [
  {
    title: "Diploma of Associate engineer",
    institution: "GCTS",
    period: "2016-2018",
    description: "Specialized in Computer Hardware Technology",
  },
  {
    title: "Diploma in Information Technology",
    institution: "GCTS",
    period: "2018",
    description: "Specialized in Database Design",
  },
  {
    title: "BS Computer Science",
    institution: "The University of Swabi",
    period: "2019-2023",
    description:
      "Specialized in Algorithms, Data Structures, and Software Development",
  },
];

const work = [
  {
    title: "Senior Software Engineer",
    institution: "Tech Creator",
    period: "2023-present",
    description: "Leading the development of large-scale web applications",
  },
  {
    title: "Full Stack Developer",
    institution: "AB Tech",
    period: "2024",
    description: "Developed and maintained enterprise-level applications",
  },
];

export function Experience() {
  return (
    <section
      id="work"
      className="w-full min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-4xl w-full">
        <Tabs defaultValue="education" className="w-full">
          <BlurFade delay={0.15} inView>
            <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="work">Work Experience</TabsTrigger>
            </TabsList>
          </BlurFade>

          <TabsContent
            value="education"
            className="mt-8 grid md:grid-cols-2 gap-3"
          >
            {education.map((item, idx) => (
              <BlurFade delay={0.15 * idx} inView key={idx}>
                <ExperienceCard
                  key={`edu-${item.title}`}
                  title={item.title}
                  institution={item.institution}
                  period={item.period}
                  description={item.description}
                />
              </BlurFade>
            ))}
          </TabsContent>

          <TabsContent value="work" className="mt-8 grid md:grid-cols-2 gap-3">
            {work.map((item, idx) => (
              <BlurFade delay={0.15 * idx} inView key={idx}>
                <ExperienceCard
                  key={`work-${item.title}`}
                  title={item.title}
                  institution={item.institution}
                  period={item.period}
                  description={item.description}
                />
              </BlurFade>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
