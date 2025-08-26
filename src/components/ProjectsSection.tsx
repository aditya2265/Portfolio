import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/aditya2265"
  },
  {
    title: "Task Management App",
    description: "Responsive web application for project management with real-time updates and team collaboration.",
    technologies: ["React", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/aditya2265"
  },
  {
    title: "Weather Dashboard",
    description: "Dynamic weather application with geolocation, forecasts, and interactive charts using external APIs.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
    github: "https://github.com/aditya2265"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="tech-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 bg-hero-gradient opacity-20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">
                    {index === 0 ? '🛒' : index === 1 ? '📋' : '🌤️'}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Button Only */}
                <div className="flex">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1"
                  >
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/aditya2265" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground glow-primary"
            >
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
