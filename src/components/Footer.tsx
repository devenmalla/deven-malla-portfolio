import { Mail, Linkedin, Github, Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:devenmallaofficial@gmail.com",
      label: "Email"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/devenmalla",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/devenmalla",
      label: "GitHub"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold hero-gradient">Deven Malla</h3>
            <p className="text-muted-foreground leading-relaxed">
              B.Tech IT'26 | Summer Intern'25 @NIT Manipur | Passionate about Web Development, 
              App Development & Machine Learning
            </p>
            <p className="text-primary font-medium italic">
              "Building solutions for a simpler, smarter tomorrow."
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Current Focus */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-medium text-accent mb-2">Current Focus</h5>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">AI Interview Mocker</span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded">Smart Canteen System</span>
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded">MERN Stack Development</span>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded">ML Research</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Deven Malla. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Passionate about technology</span>
              <span>•</span>
              <span>Always ready for the next challenge</span>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary" />
              <span>powered by</span>
              <span className="text-primary font-medium">React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;