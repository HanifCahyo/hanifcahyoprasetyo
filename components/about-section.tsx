import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Git, Agile, Team Leadership, Mentoring",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 font-open-sans text-lg leading-relaxed">
              <p>
                i&apos;m a passionate full-stack developer with 5+ years of
                experience creating digital solutions that make a difference. I
                love turning complex problems into simple, beautiful, and
                intuitive designs.
              </p>
              <p>
                When i&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user
                experiences that are both functional and delightful.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg mb-2">
                    {skill.title}
                  </h3>
                  <p className="font-open-sans text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
