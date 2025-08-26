const skills = [
  { name: 'HTML5', level: 95, color: 'primary' },
  { name: 'CSS3', level: 90, color: 'secondary' },
  { name: 'JavaScript', level: 90, color: 'accent' },
  { name: 'Bootstrap', level: 85, color: 'primary' },
  { name: 'React.js', level: 85, color: 'secondary' },
  { name: 'Node.js', level: 80, color: 'accent' },
  { name: 'Express.js', level: 80, color: 'primary' },
  { name: 'MongoDB', level: 75, color: 'secondary' }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="tech-card p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-${skill.color}/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-8 h-8 rounded-full bg-${skill.color}`}></div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              </div>
              
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div 
                    className={`bg-${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="tech-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="bg-hero-gradient bg-clip-text text-transparent">MERN Stack Expertise</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Specialized in building full-stack applications using MongoDB for database management, 
              Express.js for backend development, React.js for dynamic frontends, and Node.js for 
              server-side logic. I also have strong skills in HTML5, CSS3, Bootstrap for responsive 
              design, and vanilla JavaScript for enhanced interactivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};