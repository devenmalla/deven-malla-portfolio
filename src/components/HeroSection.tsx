import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-accent font-medium text-lg">Hi, I'm</span>
          </div>
          
          {/* Name with gradient */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 hero-gradient animate-scale-in">
            Deven Malla
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            B.Tech IT'26 | Summer Intern'25 @NIT Manipur
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            Passionate about Web Development, App Development & Machine Learning.
            <br />
            <span className="text-primary">Building solutions for a simpler, smarter tomorrow.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            
            
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <a href="mailto:devenmallaofficial@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/devenmalla" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/devenmalla" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
              <Github className="w-6 h-6" />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;