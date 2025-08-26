import { Button } from '@/components/ui/button';
import { FloatingGeometry } from './FloatingGeometry';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg opacity-10"></div>
      
      {/* 3D Floating Elements */}
      <FloatingGeometry />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="float">
            <span className="text-lg text-secondary font-medium">Hello, I'm</span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mt-2">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Aditya Ray
              </span>
            </h1>
          </div>
          
          <div className="float-delayed">
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              MERN Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building modern web applications with React, Node.js, MongoDB, and Express. 
              Passionate about creating seamless user experiences and scalable solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary-dark glow-primary transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};