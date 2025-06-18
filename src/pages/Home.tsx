import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent } from "framer-motion";
import { Github, Linkedin, MapPin, Briefcase, Link2, GraduationCap, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import SkillIcons from '../components/SkillIcons';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  achievements?: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  activities?: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "UIU Developers Hub",
    period: "2023 — Present",
    description: "Leading development of tools like PyDItor and managing community initiatives. Coordinating with cross-functional teams to deliver high-quality software solutions.",
    tech: ["React", "Node.js", "Python", "MongoDB", "TypeScript", "Tailwind CSS"],
    achievements: [
      "Developed PyDItor, a Python IDE with debugging and auto-completion features",
      "Implemented real-time collaboration features for team projects",
      "Mentored 20+ junior developers in web development and best practices",
      "Reduced development time by 40% through implementation of efficient workflows"
    ]
  },
  {
    title: "Community Coordinator",
    company: "UIU Developers Hub",
    period: "2022 — 2023",
    description: "Managed community events, workshops, and hackathons. Mentored junior developers and organized coding competitions.",
    tech: ["Community Management", "Event Planning", "Technical Writing", "Leadership"],
    achievements: [
      "Organized 10+ successful hackathons and coding competitions",
      "Increased community engagement by 200% through strategic initiatives",
      "Created and maintained technical documentation for community projects",
      "Led workshops on web development and data structures"
    ]
  },
  {
    title: "Student Developer",
    company: "Independent Projects",
    period: "2021 — 2022",
    description: "Worked on various personal and academic projects, focusing on web development and data science.",
    tech: ["JavaScript", "Python", "React", "Data Science", "Machine Learning"],
    achievements: [
      "Developed multiple full-stack web applications",
      "Created AI-powered study assistant tools",
      "Contributed to open-source projects",
      "Built and deployed machine learning models for academic research"
    ]
  }
];

const education: Education[] = [
  {
    degree: "Bachelor of Science - BS, Computer Science",
    institution: "United International University",
    period: "Jun 2022",
    activities: "Front-End web Development",
    skills: ["Java", "C++", "Data Structures and Algorithm", "DSA", "Theory of Computation", "Object-Oriented Programming (OOP)", "CPP", "C", "Python"]
  },
  {
    degree: "HSC Sciences",
    institution: "Dhonia Collage",
    period: "Jul 2019 - Dec 2021",
    grade: "4.25",
    skills: ["Science", "Mathematics", "Physics", "Chemistry"]
  },
  {
    degree: "SSC",
    institution: "Dolairpar high school, Dhaka-1204",
    period: "Nov 2019",
    grade: "3.86",
    skills: ["Science", "Mathematics", "English", "Bangla"]
  }
];

const featuredProjects = [
  {
    title: 'PyDItor',
    description: 'A simple Python IDE with debugging, auto-completion, and syntax highlighting for efficient coding.',
    tech: ['Python', 'PyQt5'],
    githubUrl: 'https://github.com/UIU-Developers-Hub/PyDitor',
    status: 'Complete' as const,
  },
  {
    title: 'StudAI',
    description: 'AI-powered Study Assistant for enhanced learning experience with personalized recommendations.',
    tech: ['Python', 'TensorFlow', 'NLP'],
    githubUrl: 'https://github.com/SifatAli008/StudAI',
    status: 'Ongoing' as const,
  },
  {
    title: 'Shop Data Control',
    description: 'E-commerce Data Management System with comprehensive features for product management, inventory control, and sales tracking.',
    tech: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/SifatAli008/shop-data-control',
    status: 'Complete' as const,
  },
  {
    title: 'DSA Resources',
    description: 'Comprehensive Data Structures and Algorithms study materials and practice problems.',
    tech: ['C++', 'Python'],
    githubUrl: 'https://github.com/SifatAli008/DSA_Final',
    status: 'Complete' as const,
  }
];

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ y: y2 }}
      />

      <div className="space-y-20">
      {/* Hero Section */}
        <section className="relative space-y-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-5 gap-8 items-start"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-6 md:col-span-3"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-4"
              >
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-muted-foreground">Available for opportunities</span>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Hi, I'm <span className="text-primary">Sifat Ali</span>
                </motion.h1>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-6 text-muted-foreground"
              >
                <motion.p 
                  className="text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I'm a <span className="text-primary font-semibold">Full Stack Developer</span> passionate about 
                  <span className="text-primary font-semibold"> Data Science and AI</span>. Currently focused on exploring 
                  Large Language Models (LLM) and building innovative solutions.
                </motion.p>
                <motion.p 
                  className="text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  My work combines web development expertise with cutting-edge AI technologies to create 
                  intelligent applications that solve real-world problems.
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-2 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Dhaka, Bangladesh</span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden"
                    onClick={() => window.open('https://github.com/SifatAli008', '_blank')}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    GitHub
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="group relative overflow-hidden"
                    onClick={() => window.open('https://linkedin.com/in/sifat-ali-008', '_blank')}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <Linkedin className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    LinkedIn
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="md:col-span-2 space-y-6"
            >
              <motion.div
                className="relative bg-gradient-to-br from-muted/50 to-muted/30 p-8 rounded-2xl backdrop-blur-sm border border-border/50"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Tech Stack
                </h2>
                <SkillIcons />
              </motion.div>
            </motion.div>
          </motion.div>
      </section>

      {/* Experience Section */}
        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <motion.span 
              className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-primary/60"
              animate={{ height: [32, 40, 32] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h2 className="text-3xl font-semibold flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              Experience
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary/50 to-primary/20 rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
                
                <div className="flex flex-col md:flex-row gap-8 pl-6">
                  <motion.div 
                    className="md:w-1/4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="md:w-3/4 space-y-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-3">{exp.company}</p>
                      <p className="text-base text-muted-foreground leading-relaxed">{exp.description}</p>
        </div>
                    
                    {exp.achievements && (
                      <motion.ul 
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <motion.span 
                              className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                            <span className="text-base">{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                    
                    <motion.div 
                      className="flex flex-wrap gap-2 pt-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {exp.tech.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Education Section */}
        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <motion.span 
              className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-primary/60"
              animate={{ height: [32, 40, 32] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <h2 className="text-3xl font-semibold flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-500/50 to-green-500/20 rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
                
                <div className="flex flex-col md:flex-row gap-8 pl-6">
                  <motion.div 
                    className="md:w-1/4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-muted-foreground font-medium">{edu.period}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="md:w-3/4 space-y-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-3">{edu.institution}</p>
                      {edu.grade && (
                        <p className="text-base text-muted-foreground mb-2">
                          Grade: <span className="font-semibold text-green-600">{edu.grade}</span>
                        </p>
                      )}
                      {edu.activities && (
                        <p className="text-base text-muted-foreground mb-2">
                          Activities: <span className="font-medium">{edu.activities}</span>
                        </p>
              )}
            </div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2 pt-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {edu.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs font-medium hover:bg-green-500 hover:text-white transition-colors cursor-pointer border-green-500/30"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
        </div>
              </motion.div>
            ))}
          </motion.div>
      </section>

        {/* Featured Projects Section */}
        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <motion.span 
              className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-primary/60"
              animate={{ height: [32, 40, 32] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <h2 className="text-3xl font-semibold flex items-center gap-3">
              <Link2 className="w-6 h-6 text-primary" />
              Featured Projects
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 border-border/50 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Badge 
                          variant={project.status === "Complete" ? "default" : "secondary"}
                          className="group-hover:scale-110 transition-transform"
                        >
                          {project.status}
                        </Badge>
                      </motion.div>
        </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
          ))}
        </div>
                  </CardContent>
                  
                  <CardFooter className="relative z-10">
                    <motion.div
                      className="w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full group/btn"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        View on GitHub
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
      </section>
        </div>
    </div>
  );
};

export default Home; 