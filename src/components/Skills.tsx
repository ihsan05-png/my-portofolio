import { motion } from 'framer-motion';


const skills = [
  { 
    name: 'HTML', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' 
  },
  { 
    name: 'CSS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' 
  },
  { 
    name: 'JavaScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
  },
  { 
    name: 'Next.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' 
  },
  { 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' 
  },
  { 
    name: 'Tailwind', 
    icon: 'https://codekitapp.com/images/help/free-tailwind-icon@2x.png' 
  },
  { 
    name: 'MySQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' 
  },
  { 
    name: 'Git', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' 
  },
  { 
    name: 'Github', 
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZfLuviePOqQJ1yuhvxr80AsqV91Btr2rqZw&s' 
  },
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
  },
  { 
    name: 'Laravel', 
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/190px-Laravel.svg.png' 
  },
  { 
    name: 'PHP', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' 
  },
  { 
    name: 'VS Code', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' 
  },
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' 
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-cyan"
        >
          Skills & Tools
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="group relative px-5 py-2.5 rounded-full border-2 border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <img 
                src= {skill.icon}
                alt= {skill.name}
                className="w-4 h-4 text-primary group-hover:text-primary transition-colors"
                />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"
                style={{ 
                  background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.2), transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional decorative text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto text-sm"
        >
         Saya sedang belajar banyak hal tentang teknologi 
         agar bisa membangun sesuatu yang bermanfaat di masa depan.
        </motion.p>
      </div>
    </section>
  );
};