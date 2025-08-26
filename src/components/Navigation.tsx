import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            Aditya Ray
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-foreground"></div>
              <div className="w-5 h-0.5 bg-foreground"></div>
              <div className="w-5 h-0.5 bg-foreground"></div>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('hero')}
              className="w-full text-left justify-start"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="w-full text-left justify-start"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('skills')}
              className="w-full text-left justify-start"
            >
              Skills
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('projects')}
              className="w-full text-left justify-start"
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="w-full text-left justify-start"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};