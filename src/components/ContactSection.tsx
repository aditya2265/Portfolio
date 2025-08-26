import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm always excited to take on new challenges!
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="tech-card p-4 rounded-lg flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xl">📧</span>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:aditya99244@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aditya99244@gmail.com
                  </a>
                </div>
              </div>

              <div className="tech-card p-4 rounded-lg flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-secondary text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+919324605092"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +91 9324605092
                  </a>
                </div>
              </div>

              <div className="tech-card p-4 rounded-lg flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent text-xl">💼</span>
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="tech-card p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="Enter your name"
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input 
                  id="subject"
                  type="text" 
                  placeholder="What's this about?"
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                  required
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary-dark glow-primary transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};