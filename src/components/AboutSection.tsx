export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">MERN Stack Developer</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer specializing in the MERN stack. With a strong foundation 
              in JavaScript and modern web technologies, I create responsive, user-friendly applications 
              that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development started with curiosity about how websites work, and it has 
              evolved into a passion for building scalable, efficient, and beautiful web applications. 
              I enjoy working on both frontend interfaces and backend architectures.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="tech-card p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">React, HTML, CSS, JavaScript</p>
              </div>
              <div className="tech-card p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">Node.js, Express.js</p>
              </div>
              <div className="tech-card p-4 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">Database</h4>
                <p className="text-sm text-muted-foreground">MongoDB</p>
              </div>
              <div className="tech-card p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Tools</h4>
                <p className="text-sm text-muted-foreground">Bootstrap, Git</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="tech-card p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">JavaScript</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">React</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Node.js</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">MongoDB</span>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};