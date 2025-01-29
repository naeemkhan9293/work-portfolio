"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Experience() {
  return (
    <section id="work" className="w-full min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl w-full">
        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="work">Work Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="education" className="mt-8 space-y-4">
            <Card className="group transition-all duration-300 hover:shadow-xl hover:bg-accent/50">
              <CardHeader>
                <CardTitle className=" transition-transform duration-300">Master of Computer Science</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Stanford University • 2020-2022
                </p>
              </CardHeader>
              <CardContent>
                <p>Specialized in Artificial Intelligence and Web Technologies</p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:shadow-xl hover:bg-accent/50">
              <CardHeader>
                <CardTitle className=" transition-transform duration-300">Bachelor of Engineering</CardTitle>
                <p className="text-sm text-muted-foreground">
                  MIT • 2016-2020
                </p>
              </CardHeader>
              <CardContent>
                <p>Major in Computer Science and Engineering</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="work" className="mt-8 space-y-4">
            <Card className="group transition-all duration-300 hover:shadow-xl  hover:bg-accent/50">
              <CardHeader>
                <CardTitle className="transition-transform duration-300">Senior Software Engineer</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Google • 2022-Present
                </p>
              </CardHeader>
              <CardContent>
                <p>Leading the development of large-scale web applications</p>
              </CardContent>
            </Card>
            <Card className="group transition-all duration-300 hover:shadow-xl  hover:bg-accent/50">
              <CardHeader>
                <CardTitle className="transition-transform duration-300">Full Stack Developer</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Microsoft • 2020-2022
                </p>
              </CardHeader>
              <CardContent>
                <p>Developed and maintained enterprise-level applications</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}