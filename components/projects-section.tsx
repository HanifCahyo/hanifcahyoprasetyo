import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Point of Sales",
    description:
      "Modern e-commerce solution built with Next.js, Stripe, and Supabase",
    image: "/point-of-sales.png",
    tech: ["Laravel 12", "MySQL", "Blade", "Tailwind CSS"],
    github: "https://github.com/HanifCahyo/PointOfSales",
    live: "#",
  },
  {
    title: "STI General",
    description:
      "Landing page for Sarjana Teknik Informatika Universitas Dian Nuswantoro, built with Next.js and Tailwind CSS",
    image: "/sti-general.png",
    tech: ["Next.js", "Tailwind CSS"],
    github: "#",
    live: "https://sti.dinus.id/",
  },
  {
    title: "Nidejia",
    description:
      "Modern booking platform for travel and accommodation, built with Next.js, Filament, and Laravel 11",
    image: "/nidejia.png",
    tech: ["Next.js", "Filament", "Laravel 11"],
    github: "https://github.com/HanifCahyo/nidejia-prototype",
    live: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={1200}
                    height={675}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-montserrat font-bold text-xl mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="font-open-sans text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/20 text-accent-foreground text-sm rounded-full font-open-sans font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
