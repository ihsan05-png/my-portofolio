import { motion } from 'framer-motion';
import { Code2, Database, Palette, Smartphone, Brain, Zap } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Code2 },
  { name: 'CSS', icon: Code2 },
  { name: 'JavaScript', icon: Zap },
  { name: 'React', icon: Code2 },
  { name: 'Next.js', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Tailwind', icon: Palette },
  { name: 'Framer Motion', icon: Zap },
  { name: 'MySQL', icon: Database },
  { name: 'Git', icon: Code2 },
  { name: 'Github', icon: Code2 },
  { name: 'Vercel', icon: Zap },
  { name: 'Deployment', icon: Database },
  { name: 'Node.js', icon: Code2 },
  { name: 'Laravel', icon: Code2 },
  { name: 'PHP', icon: Code2 },
  { name: 'VS Code', icon: Code2 },
  { name: 'Web Development', icon: Code2 },
  { name: 'Team Collaboration', icon: Brain },
  { name: 'Python', icon: Code2 },
  { name: 'IoT', icon: Smartphone },
  { name: 'Machine Learning', icon: Brain },
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
                <skill.icon className="w-4 h-4 text-primary group-hover:text-primary transition-colors" />
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