import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Github, Linkedin, MapPin, Briefcase, Link2, GraduationCap, ArrowRight, Sparkles, Zap, Target, Mail, Download, ExternalLink, Star, Code, Database, Brain } from 'lucide-react';
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

// Particle component for background effects
const Particle = ({ x, y, size, color, delay }: { x: number; y: number; size: number; color: string; delay: number }) => (
  <motion.div
    className="absolute rounded-full opacity-20"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      background: color,
    }}
    animate={{
      scale: [0, 1, 0],
      opacity: [0, 0.3, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
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

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* Enhanced background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <Particle key={i} {...particle} />
        ))}
      </div>

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

      {/* Floating cursor follower */}
      <motion.div
        className="fixed w-4 h-4 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <div className="space-y-24">
      {/* Hero Section */}
        <section className="relative space-y-12 min-h-screen flex items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-5 gap-12 items-center w-full"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-8 md:col-span-3"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Status indicator */}
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-muted-foreground font-medium">Available for opportunities</span>
                  <motion.div
                    className="flex gap-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                  </motion.div>
                </motion.div>
                
                {/* Main heading with enhanced typography */}
                <motion.h1 
                  className="text-6xl md:text-7xl font-bold tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Hi, I'm Sifat Ali
          </span>
                </motion.h1>

                {/* Subtitle with animated typing effect */}
                <motion.div
                  className="text-2xl md:text-3xl font-semibold text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="text-primary">Full Stack Developer</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  >
                    |
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-8 text-muted-foreground"
              >
                <motion.p 
                  className="text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I'm a <span className="text-primary font-semibold">Full Stack Developer</span> passionate about 
                  <span className="text-primary font-semibold"> Data Science and AI</span>. Currently focused on exploring 
                  Large Language Models (LLM) and building innovative solutions.
                </motion.p>
                <motion.p 
                  className="text-xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  My work combines web development expertise with cutting-edge AI technologies to create 
                  intelligent applications that solve real-world problems.
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-3 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Dhaka, Bangladesh</span>
                </motion.div>
              </motion.div>

              {/* Enhanced action buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground"
                    onClick={() => window.open('https://github.com/SifatAli008', '_blank')}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <Github className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    GitHub
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden border-2"
                    onClick={() => window.open('https://linkedin.com/in/sifat-ali-008', '_blank')}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <Linkedin className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden border-2"
                    onClick={() => window.open('mailto:alisifat061@gmail.com', '_blank')}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                    <Mail className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Contact
                  </Button>
                </motion.div>
              </motion.div>

              {/* Skills highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Full Stack</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Brain className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">AI/ML</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Database className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">Data Science</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="md:col-span-2 space-y-8"
            >
              <motion.div
                className="relative bg-gradient-to-br from-muted/50 to-muted/30 p-8 rounded-3xl backdrop-blur-sm border border-border/50 shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
                <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Tech Stack
                </h2>
                <SkillIcons />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <motion.span 
              className="w-2 h-10 rounded-full bg-gradient-to-b from-primary to-primary/60"
              animate={{ height: [40, 50, 40] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h2 className="text-4xl font-bold flex items-center gap-4">
              <Briefcase className="w-8 h-8 text-primary" />
              Experience
            </h2>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-primary" />
              <Star className="w-4 h-4 text-primary" />
              <Star className="w-4 h-4 text-primary" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary/50 to-primary/20 rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
                
                <div className="flex flex-col md:flex-row gap-10 pl-8">
                  <motion.div 
                    className="md:w-1/4"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="md:w-3/4 space-y-6"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-4">{exp.company}</p>
                      <p className="text-lg text-muted-foreground leading-relaxed">{exp.description}</p>
        </div>
                    
                    {exp.achievements && (
                      <motion.ul 
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <motion.span 
                              className="text-primary mt-2 w-2 h-2 rounded-full bg-primary"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                            <span className="text-base leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                    
                    <motion.div 
                      className="flex flex-wrap gap-3 pt-4"
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
                            className="text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer px-4 py-2"
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
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <motion.span 
              className="w-2 h-10 rounded-full bg-gradient-to-b from-green-500 to-green-500/60"
              animate={{ height: [40, 50, 40] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <h2 className="text-4xl font-bold flex items-center gap-4">
              <GraduationCap className="w-8 h-8 text-green-600" />
              Education
            </h2>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              <Star className="w-4 h-4 text-green-600" />
              <Star className="w-4 h-4 text-green-600" />
              <Star className="w-4 h-4 text-green-600" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-green-500/50 to-green-500/20 rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
                
                <div className="flex flex-col md:flex-row gap-10 pl-8">
                  <motion.div 
                    className="md:w-1/4"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-muted-foreground font-medium">{edu.period}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="md:w-3/4 space-y-6"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-4">{edu.institution}</p>
                      {edu.grade && (
                        <p className="text-lg text-muted-foreground mb-3">
                          Grade: <span className="font-bold text-green-600">{edu.grade}</span>
                        </p>
                      )}
                      {edu.activities && (
                        <p className="text-lg text-muted-foreground mb-3">
                          Activities: <span className="font-semibold">{edu.activities}</span>
                        </p>
              )}
            </div>
                    
                    <motion.div 
                      className="flex flex-wrap gap-3 pt-4"
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
                            className="text-sm font-medium hover:bg-green-500 hover:text-white transition-colors cursor-pointer border-green-500/30 px-4 py-2"
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
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <motion.span 
              className="w-2 h-10 rounded-full bg-gradient-to-b from-primary to-primary/60"
              animate={{ height: [40, 50, 40] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <h2 className="text-4xl font-bold flex items-center gap-4">
              <Link2 className="w-8 h-8 text-primary" />
              Featured Projects
            </h2>
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            >
              <Star className="w-4 h-4 text-primary" />
              <Star className="w-4 h-4 text-primary" />
              <Star className="w-4 h-4 text-primary" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group h-full flex flex-col transition-all duration-400 hover:shadow-2xl hover:shadow-primary/15 border-border/50 overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Badge 
                          variant={project.status === "Complete" ? "default" : "secondary"}
                          className="group-hover:scale-110 transition-transform px-3 py-1"
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
                        size="lg"
                        className="w-full group/btn"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-3 h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                        View on GitHub
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
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