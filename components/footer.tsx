import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="font-montserrat font-black text-2xl mb-6 text-primary">
            HANIF.PORTFOLIO
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/HanifCahyo"
              className="hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/hanifprasetyo/"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/hanifcahyoo/"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:hanifcahyoprasetyo95@gmail.com"
              className="hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-background/20 pt-8">
            <p className="font-open-sans text-background/80">
              © 2025 Hanif Developer. All rights reserved. Built with Next.js &
              Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
