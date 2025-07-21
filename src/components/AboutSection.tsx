import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, Briefcase, Trophy, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech IT Student",
      subtitle: "Class of 2026 at Nagaland University"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "General Secretary",
      subtitle: "Nagaland University Students' Union"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "AI/ML Intern",
      subtitle: "NIT Manipur - Innovation & Research"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Multiple Certifications",
      subtitle: "ML, Cybersecurity, Digital Marketing"
    }
  ];

  const passions = [
    "Creating apps and systems that simplify daily tasks",
    "Leading teams and organizing impactful events",
    "Exploring the intersection of AI and practical applications",
    "Maintaining work-life balance with cricket and volleyball"
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <User className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get to <span className="hero-gradient">Know Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                I am a passionate B.Tech Information Technology student currently in my senior year at 
                Nagaland University. My journey in tech began with a curiosity for solving real-world 
                problems through innovative digital solutions.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                As the General Secretary of Nagaland University Students' Union, I've successfully 
                organized events for <span className="text-primary font-semibold">500+ attendees</span> and 
                developed practical applications like the Students' Union Web App and Bus Seat Tracking System.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                My internship at NIT Manipur in AI/ML and Human Computer Interaction has deepened my 
                expertise in machine learning and user-centered design. I believe in building technology 
                that is <span className="text-accent font-semibold">efficient, precise, and simple</span>.
              </p>
            </div>

            {/* What drives me */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">What drives me:</h3>
              <ul className="space-y-3">
                {passions.map((passion, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{passion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun Fact */}
            <Card className="card-glow bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">⚡ Fun Fact</h4>
                <p className="text-foreground/80">
                  I'm a hardworking person who enjoys spontaneity. I prefer finishing tasks efficiently 
                  ahead of schedule, with precision and simplicity, all while keeping my cricket and 
                  volleyball spirit alive.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-glow hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;