import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, MessageCircle, Send, MapPin, Phone } from "lucide-react";
const ContactSection = () => {
  const contactMethods = [{
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    subtitle: "devenmallaofficial@gmail.com",
    link: "mailto:devenmallaofficial@gmail.com",
    color: "from-primary to-primary-light"
  }, {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    subtitle: "Deven Malla",
    link: "https://www.linkedin.com/in/deven-malla-710819360/",
    color: "from-accent to-secondary"
  }, {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    subtitle: "devenmalla",
    link: "https://github.com/devenmalla",
    color: "from-secondary to-primary"
  }];
  const currentFocus = ["AI Interview Mocker", "Smart Canteen System", "MERN Stack Development", "Machine Learning Research"];
  return <section id="contact" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="hero-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, or simply connecting with fellow technology enthusiasts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Let's Build Something <span className="hero-gradient">Amazing</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
                Whether you're looking to collaborate on a project, discuss technology trends, or explore potential opportunities, I'd love to hear from you. Let's build something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {contactMethods.map((method, index) => <a key={index} href={method.link} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="card-glow hover:border-primary/30 group cursor-pointer h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform mx-auto mb-4`}>
                        {method.icon}
                      </div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors mb-2">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{method.subtitle}</p>
                    </CardContent>
                  </Card>
                </a>)}
            </div>

            {/* Current Focus */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-primary flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Current Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {currentFocus.map((focus, index) => <Badge key={index} variant="secondary" className="justify-center hover:bg-primary/10 hover:text-primary transition-all cursor-default">
                      {focus}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <blockquote className="text-2xl font-light text-muted-foreground italic mb-4">
            "Building solutions for a simpler, smarter tomorrow."
          </blockquote>
          <p className="text-lg">
            <span className="hero-gradient font-semibold">Deven Malla</span>
          </p>
          <p className="text-muted-foreground">
            B.Tech IT'26 | Summer Intern'25 @NIT Manipur | Passionate about Web Development, App Development & Machine Learning
          </p>
        </div>
      </div>
    </section>;
};
export default ContactSection;