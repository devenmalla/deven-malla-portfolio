import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Trophy, GraduationCap } from "lucide-react";
const ExperienceSection = () => {
  const experiences = [{
    title: "Artificial Intelligence, Machine Learning, Human Computer Interaction, Speech Processing Intern",
    company: "NIT Manipur",
    location: "Imphal, Manipur",
    period: "2025",
    type: "Internship",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Working on cutting-edge AI/ML projects and human-computer interaction research, developing practical applications of machine learning in real-world scenarios.",
    highlights: ["Research in AI/ML applications", "Human-Computer Interaction studies", "Published research findings", "Collaborated with PhD researchers"],
    current: false
  }, {
    title: "Project Intern",
    company: "Edunet Foundation",
    location: "Remote",
    period: "2025",
    type: "Internship",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Contributed to educational technology projects focusing on improving learning outcomes through innovative digital solutions.",
    highlights: ["Developed educational web applications", "Worked with cross-functional teams", "Implemented user feedback systems", "Enhanced platform accessibility"],
    current: false
  }, {
    title: "Industrial Training and Internship on Machine Learning",
    company: "Tool Room and Training Centre",
    location: "Guwahati, Assam",
    period: "2024",
    type: "Internship",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Gained hands-on experience in machine learning algorithms and their practical implementations in industrial applications.",
    highlights: ["Implemented ML algorithms", "Data preprocessing and analysis", "Model optimization techniques", "Industrial automation projects"],
    current: false
  }, {
    title: "Python Developer Intern",
    company: "TechnoHacks EduTech Official",
    location: "Remote",
    period: "2024",
    type: "Internship",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Developed Python-based applications and contributed to educational technology solutions for enhanced learning experiences.",
    highlights: ["Built Python applications", "Database integration", "API development", "Code optimization"],
    current: false
  }];
  const certifications = ["ReactJS-TheCompleteReactJSCourse", "CSS,Bootstrap, JavaScript, PHPFull Stack CrashCourse", "Introduction to Machine Learning", "Cyber Security Essentials Bootcamp", "Digital Marketing Fundamentals", "AI For India 2.0", "C++ Programming"];
  const education = [{
    degree: "B.Tech Information Technology",
    institution: "Nagaland University",
    period: "2022-2026",
    icon: <GraduationCap className="w-5 h-5" />
  }, {
    degree: "Higher Secondary School (Science)",
    institution: "Don Bosco Higher Secondary School",
    period: "2020-2022",
    icon: <GraduationCap className="w-5 h-5" />
  }, {
    degree: "Secondary Education",
    institution: "Bethel Higher Secondary School",
    period: "2018-2020",
    icon: <GraduationCap className="w-5 h-5" />
  }];
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership':
        return 'bg-primary/10 text-primary border-primary/30';
      case 'Internship':
        return 'bg-accent/10 text-accent border-accent/30';
      default:
        return 'bg-secondary/10 text-secondary border-secondary/30';
    }
  };
  return <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <Briefcase className="w-4 h-4 mr-2" />
            Experience & Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="hero-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning through professional internships and leadership roles that have shaped my technical and interpersonal skills.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => <Card key={index} className={`card-glow hover:border-primary/30 relative ${exp.current ? 'ring-2 ring-primary/20' : ''}`}>
              {exp.current && <div className="absolute -top-3 left-6">
                  <Badge className="bg-gradient-primary text-primary-foreground shadow-lg">
                    Current
                  </Badge>
                </div>}
              
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {exp.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2">
                    <Badge variant="outline" className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              
            </Card>)}
        </div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="hero-gradient">Education</span>
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => <Card key={index} className="card-glow hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {edu.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="hero-gradient">Certifications</span>
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => <Card key={index} className="card-glow hover:border-primary/30">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;