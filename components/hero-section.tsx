import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-float">
          <h1 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl text-balance mb-6">
            Hi, I&apos;m{" "}
            <span className="text-primary animate-pulse-glow rounded-xl px-3 py-1 ">
              Hanif Prasetyo
            </span>
            <br />
            Full Stack Developer
          </h1>
        </div>

        <p className="font-open-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          I create modern, responsive web applications with clean code and
          beautiful user experiences. Passionate about React, Next.js, and
          cutting-edge technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-bold px-8"
          >
            <a
              href="https://drive.google.com/file/d/1xRLJBwBAZB1PR7d8vOvV7NZGwIONQ2Jw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Work
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="font-montserrat font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <a
              href="https://drive.google.com/file/d/12vdbRuswevY6AZR1rb_KMf8pPMlmvMVU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/HanifCahyo"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/hanifprasetyo/"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hanifcahyoprasetyo95@gmail.com"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={24} />
      </div>
    </section>
  );
}
