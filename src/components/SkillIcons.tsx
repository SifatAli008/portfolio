import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'MongoDB',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  },
  {
    name: 'Firebase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Google Colab',
    icon: 'https://colab.research.google.com/img/colab_favicon_256px.png',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

const SkillIcons = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 p-2 rounded-lg bg-background border hover:border-primary transition-colors">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback for failed image loads
                const target = e.target as HTMLImageElement;
                if (skill.name === 'TypeScript') {
                  target.src = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg';
                } else if (skill.name === 'MongoDB') {
                  target.src = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg';
                }
              }}
            />
          </div>
          <span className="text-sm font-medium">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillIcons; 