import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, Sparkles } from "lucide-react";
const ProjectsSection = () => {
  const projects = [{
    title: "AI Interview Mocker Web App",
    description: "An intelligent web application that simulates real interview scenarios using AI to help candidates practice and improve their interview skills with personalized feedback.",
    tags: ["AI/ML", "React.js", "Python", "Natural Language Processing"],
    status: "In Development",
    statusColor: "bg-accent/10 text-accent border-accent/30",
    featured: true,
    links: {
      github: "#",
      live: "#"
    }
  }, {
    title: "Smart College Canteen System",
    description: "A comprehensive digital solution for college canteen management featuring online ordering, inventory tracking, and payment integration to streamline food service operations.",
    tags: ["Web Development", "PHP", "MySQL", "JavaScript"],
    status: "Collaborative Project",
    statusColor: "bg-secondary/10 text-secondary border-secondary/30",
    featured: true,
    links: {
      github: "#",
      live: "#"
    }
  }, {
    title: "Students' Union Web Application",
    description: "A dynamic web platform for Nagaland University Students' Union enabling event management, announcements, and student engagement with modern UI/UX design.",
    tags: ["Web Development", "React.js", "PHP", "MySQL"],
    status: "Live & Active",
    statusColor: "bg-primary/10 text-primary border-primary/30",
    featured: false,
    links: {
      github: "#",
      live: "#"
    }
  }, {
    title: "Bus Seat Tracking System",
    description: "Real-time bus seat reservation and tracking system for university transportation, helping students check availability and book seats efficiently.",
    tags: ["Web Development", "PHP", "MySQL", "Real-time"],
    status: "Deployed",
    statusColor: "bg-primary/10 text-primary border-primary/30",
    featured: false,
    links: {
      github: "#",
      live: "#"
    }
  }];
  return <section id="projects" className="section-padding bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Folder className="w-4 h-4 mr-2" />
            Featured Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building <span className="hero-gradient">Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions that address real-world challenges through technology and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={index} className={`card-glow hover:border-primary/30 relative group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              {project.featured && <div className="absolute -top-3 left-6">
                  <Badge className="bg-gradient-primary text-primary-foreground shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className={project.statusColor}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              
            </Card>)}
        </div>

        {/* Call to action */}
        
      </div>
    </section>;
};
export default ProjectsSection;