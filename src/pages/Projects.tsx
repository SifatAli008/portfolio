import React from 'react';
import { Github } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { BookOpen, Brain, Wrench, Gamepad2, Link2 } from 'lucide-react'
import { useState } from 'react'
import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  status: "Complete" | "Ongoing";
  date?: string;
  image?: string;
}

interface Section {
  title: string;
  icon: React.ReactNode;
  projects: Project[];
  id: string;
}

const webProjects = [
  {
    title: 'shop-data-control',
    description: 'E-commerce Data Management System with comprehensive features for product management, inventory control, and sales tracking.',
    tech: ['React', 'Node.js', 'MongoDB'],
    date: 'Jun 12, 2025',
    status: 'Complete',
    githubUrl: 'https://github.com/SifatAli008/shop-data-control',
  },
  {
    title: 'shuttle-bot',
    description: 'Social bot for dev decision making with algorithm designed to help facebook-style social apps.',
    tech: ['React', 'Node.js', 'AI'],
    date: 'Apr 16, 2025',
    status: 'Ongoing',
    githubUrl: 'https://github.com/SifatAli008/shuttle-bot',
  },
  {
    title: 'cofounder-matching-platform',
    description: 'Platform for connecting potential co-founders and entrepreneurs.',
    tech: ['React', 'Node.js', 'MongoDB'],
    date: 'Jun 10, 2025',
    status: 'Ongoing',
    githubUrl: 'https://github.com/SifatAli008/cofounder-matching-platform',
  },
]

const aiProjects = [
  {
    title: 'StudAI-1',
    description: 'AI-powered Study Assistant for enhanced learning experience with personalized recommendations.',
    tech: ['Python', 'TensorFlow', 'NLP'],
    date: 'May 16, 2025',
    status: 'Ongoing',
    githubUrl: 'https://github.com/SifatAli008/StudAI-1',
  },
  {
    title: 'StudAI',
    description: 'Collaborative AI Study System for group learning and knowledge sharing.',
    tech: ['Python', 'AI/ML', 'React'],
    date: 'Mar 16, 2025',
    status: 'Ongoing',
    githubUrl: 'https://github.com/SifatAli008/StudAI',
  },
]

const studyMaterial = [
  {
    title: 'DSA_Final',
    description: 'Comprehensive Data Structures and Algorithms implementation and practice problems.',
    tech: ['C++', 'Python'],
    date: 'Dec 3, 2023',
    status: 'Complete',
    githubUrl: 'https://github.com/SifatAli008/DSA_Final',
  },
  {
    title: 'DSA_QNA',
    description: 'Question and answer repository for DSA concepts and interview preparation.',
    tech: ['C++', 'Python'],
    date: 'Dec 2, 2023',
    status: 'Complete',
    githubUrl: 'https://github.com/SifatAli008/DSA_QNA',
  },
  {
    title: 'UIU_OOP_Final',
    description: 'Object-Oriented Programming final project with comprehensive implementations.',
    tech: ['Java'],
    date: 'Aug 25, 2023',
    status: 'Complete',
    githubUrl: 'https://github.com/SifatAli008/UIU_OOP_Final',
  },
]

const tools = [
  {
    title: 'PyDItor',
    description: 'A simple Python IDE with debugging, auto-completion, and syntax highlighting for efficient coding.',
    tech: ['Python', 'PyQt5'],
    date: 'Oct 13, 2024',
    status: 'Complete',
    githubUrl: 'https://github.com/UIU-Developers-Hub/PyDitor',
  },
  {
    title: 'YouTube-Shorts-Blocker',
    description: 'Chrome extension to block YouTube Shorts and improve productivity.',
    tech: ['JavaScript', 'Chrome Extension'],
    date: 'Apr 16, 2025',
    status: 'Complete',
    githubUrl: 'https://github.com/SifatAli008/YouTube-Shorts-Blocker',
  },
]

const games = [
  {
    title: 'Echo-Quest',
    description: 'Interactive Quest/Game Application with engaging gameplay mechanics.',
    tech: ['React', 'Node.js', 'WebGL'],
    date: 'Jun 9, 2025',
    status: 'Ongoing',
    githubUrl: 'https://github.com/SifatAli008/Echo-Quest',
  },
]

const Projects = () => {
  const [filter, setFilter] = useState<'All' | 'Complete' | 'Ongoing'>('All')

  const sections: Section[] = [
    { 
      title: "Web & App Projects", 
      icon: <Link2 className="w-6 h-6" />, 
      projects: webProjects.map(p => ({ ...p, status: p.status as "Complete" | "Ongoing" })), 
      id: 'web' 
    },
    { 
      title: "AI & Data Science", 
      icon: <Brain className="w-6 h-6" />, 
      projects: aiProjects.map(p => ({ ...p, status: p.status as "Complete" | "Ongoing" })), 
      id: 'ai' 
    },
    { 
      title: "Study Material", 
      icon: <BookOpen className="w-6 h-6" />, 
      projects: studyMaterial.map(p => ({ ...p, status: p.status as "Complete" | "Ongoing" })), 
      id: 'study' 
    },
    { 
      title: "Tools & Utilities", 
      icon: <Wrench className="w-6 h-6" />, 
      projects: tools.map(p => ({ ...p, status: p.status as "Complete" | "Ongoing" })), 
      id: 'tools' 
    },
    { 
      title: "Games", 
      icon: <Gamepad2 className="w-6 h-6" />, 
      projects: games.map(p => ({ ...p, status: p.status as "Complete" | "Ongoing" })), 
      id: 'games' 
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my work, from web applications to AI projects.
          </p>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-8 rounded-full bg-primary" />
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Link2 className="w-5 h-5" />
              Projects
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex gap-2 mb-12 justify-center">
            {['All', 'Complete', 'Ongoing'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status as 'All' | 'Complete' | 'Ongoing')}
                className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-150 \
                  ${filter === status ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-primary/10'}`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {sections.map((section, sectionIndex) => {
              const filteredProjects = filter === 'All'
                ? section.projects
                : section.projects.filter(p => p.status === filter)

              if (filteredProjects.length === 0) return null;

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-8 rounded-full bg-primary" />
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <span className="w-5 h-5">{section.icon}</span>
                      {section.title}
                    </h2>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, i) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card className="group h-full flex flex-col transition-all duration-200 hover:shadow-lg">
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                {project.title}
                              </CardTitle>
                              <Badge variant={project.status === "Complete" ? "default" : "secondary"}>
                                {project.status}
                              </Badge>
                            </div>
                            <CardDescription className="text-base">
                              {project.description}
                            </CardDescription>
                            {project.date && (
                              <div className="text-sm text-muted-foreground mt-2">{project.date}</div>
                            )}
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              variant="outline"
                              className="w-full"
                              onClick={() => window.open(project.githubUrl, "_blank")}
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View on GitHub
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects 