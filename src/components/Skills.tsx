import { motion } from 'framer-motion';
import { Code2, Database, Palette, Smartphone, Brain, Zap } from 'lucide-react';

const skills = [
  {
    name: 'HTML & CSS',
    icon: Code2,
    color: 'hsl(15, 100%, 60%)',
    description: 'Struktur & styling web modern',
  },
  {
    name: 'Python',
    icon: Code2,
    color: 'hsl(207, 51%, 44%)',
    description: 'AI, ML & backend development',
  },
  {
    name: 'Laravel',
    icon: Database,
    color: 'hsl(0, 100%, 48%)',
    description: 'PHP framework untuk web apps',
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    color: 'hsl(199, 89%, 48%)',
    description: 'Utility-first CSS framework',
  },
  {
    name: 'IoT',
    icon: Smartphone,
    color: 'hsl(177, 70%, 70%)',
    description: 'Embedded systems & sensors',
  },
  {
    name: 'Machine Learning',
    icon: Brain,
    color: 'hsl(271, 76%, 53%)',
    description: 'AI models & data science',
  },
  {
    name: 'React & Next.js',
    icon: Code2,
    color: 'hsl(193, 95%, 68%)',
    description: 'Modern frontend frameworks',
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
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 20px ${skill.color}40, 0 0 40px ${skill.color}30, 0 0 60px ${skill.color}20`,
              }}
              className="group relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ 
                  background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mb-4 rounded-full flex items-center justify-center border-2 group-hover:border-opacity-80 transition-all"
                  style={{ 
                    borderColor: skill.color,
                    backgroundColor: `${skill.color}10`,
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon 
                    className="w-8 h-8" 
                    style={{ color: skill.color }}
                  />
                </motion.div>

                {/* Skill name */}
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>

                {/* Floating particle */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          Setiap teknologi adalah bintang dalam galaksi pengetahuan saya. 
          Bersama-sama, mereka membentuk konstelasi yang memandu perjalanan digital.
        </motion.p>
      </div>
    </section>
  );
};
