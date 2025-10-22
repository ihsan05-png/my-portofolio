import { motion } from 'framer-motion';
import { Github } from 'lucide-react';


const projects = [
  {
    title: 'Fire Detection',
    description: 'Sistem deteksi kebakaran berbasis IoT dengan pemantauan real-time menggunakan ESP32 dan sensor suhu.',
    tech: ['Esp32', 'IoT', 'Arduino IDE', 'C'],
    gradient: 'from-blue-500/20 to-purple-500/20',
    github: 'https://github.com/ihsan05-png/Fire-Detection',
  },
  {
    title: 'SkyNusa',
    description: 'Website untuk pemesanan tiket pesawat dengan fitur pencarian, pemesanan, dan pembayaran online.',
    tech: ['Laravel', 'PHP', 'MySQL'],
    gradient: 'from-orange-500/20 to-pink-500/20',
    github: 'https://github.com/ihsan05-png/SkyNusa-Project',
  },
  {
    title: 'IhsAnkasa Portfolio',
    description: 'Website portfolio pribadi bertema futuristik dengan dark/light mode dan animasi interaktif yang menggambarkan eksplorasi digital.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
    github: 'https://github.com/ihsanpratama/my-portfolio',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-cyan"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/50 rounded-lg text-primary hover:bg-primary/20 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">View Repository</span>
                    </motion.a>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-xl group-hover:border-primary/50 transition-colors" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/20 rounded-bl-xl group-hover:border-primary/50 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto italic"
        >
          "Setiap proyek adalah kesempatan baru 
          bagi saya untuk belajar dan mengasah kemampuan di dunia teknologi."
        </motion.p>
      </div>
    </section>
  );
};
