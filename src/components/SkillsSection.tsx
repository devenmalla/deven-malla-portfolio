import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Server, Database, Smartphone, Wrench, Brain } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
      color: "from-primary to-primary-light"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: ["PHP", "MySQL"],
      color: "from-secondary to-accent"
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "Oracle"],
      color: "from-accent to-primary"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Cross-platform Apps"],
      color: "from-primary-dark to-secondary"
    },
    {
      title: "Programming",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Python", "C/C++"],
      color: "from-secondary to-primary-light"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "Linux"],
      color: "from-accent to-primary-dark"
    }
  ];

  const coreSkills = [
    { name: "HTML", level: 90, color: "bg-gradient-to-r from-primary to-primary-light" },
    { name: "CSS", level: 85, color: "bg-gradient-to-r from-primary-light to-accent" },
    { name: "JavaScript", level: 85, color: "bg-gradient-to-r from-accent to-secondary" },
    { name: "PHP", level: 80, color: "bg-gradient-to-r from-secondary to-primary" },
    { name: "MySQL", level: 85, color: "bg-gradient-to-r from-primary to-accent" },
    { name: "React.js", level: 85, color: "bg-gradient-to-r from-accent to-primary-dark" },
    { name: "React Native", level: 75, color: "bg-gradient-to-r from-primary-dark to-secondary" },
    { name: "Python", level: 80, color: "bg-gradient-to-r from-secondary to-primary-light" },
    { name: "C/C++", level: 70, color: "bg-gradient-to-r from-primary-light to-primary" }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Code className="w-4 h-4 mr-2" />
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="hero-gradient">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning, hands-on projects, and professional internships.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow hover:border-primary/30 group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Proficiencies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Core <span className="hero-gradient">Proficiencies</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {coreSkills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="relative">
                  <Progress value={skill.level} className="h-3 bg-muted" />
                  <div 
                    className={`absolute top-0 left-0 h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;