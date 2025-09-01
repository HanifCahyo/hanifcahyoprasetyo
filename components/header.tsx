"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-montserrat font-black text-xl text-primary">
          HANIF.PORTFOLIO
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="font-montserrat font-semibold hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#projects"
            className="font-montserrat font-semibold hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="font-montserrat font-semibold hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-montserrat font-semibold hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-bold">
          Hire Me
        </Button>
      </nav>
    </header>
  );
}
