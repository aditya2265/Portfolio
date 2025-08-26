export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Aditya Ray
            </h3>
            <p className="text-muted-foreground text-sm">
              MERN Stack Developer
            </p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="mailto:aditya99244@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
            <a 
              href="tel:+919324605092"
              className="text-muted-foreground hover:text-secondary transition-colors"
            >
              Phone
            </a>
            <a 
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © 2024 Aditya Ray. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};