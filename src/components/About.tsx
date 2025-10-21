import { motion } from 'framer-motion';
import { Code2, Cpu} from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-cyan"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Orbital glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                style={{ width: '110%', height: '110%', top: '-5%', left: '-5%' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ width: '125%', height: '125%', top: '-12.5%', left: '-12.5%' }}
              />
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 box-glow-cyan">
                <img
                  src={profilePhoto}
                  alt="Ihsan Pratama Putra"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating particles */}
              <motion.div
                className="absolute -top-4 -right-4 w-4 h-4 bg-primary rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-3 h-3 bg-accent rounded-full"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary glow-cyan-sm">
              Ihsan Pratama Putra
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Saya adalah seorang mahasiswa <span className="text-primary font-semibold">Teknik Informatika</span> yang sedang belajar Backend dan
              ingin menjadi Fullstack Developer.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
              >
                <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Web Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Membangun aplikasi web yang responsif dan interaktif dengan teknologi modern
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
              >
                <Cpu className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Machine Learning & IoT</h4>
                  <p className="text-sm text-muted-foreground">
                    Mengeksplorasi kecerdasan buatan dan Internet of Things untuk solusi cerdas
                  </p>
                </div>
              </motion.div>
            </div>

            <p className="text-base text-muted-foreground italic border-l-4 border-primary pl-4">
              "Perjalanan saya baru dimulai, dan saya terus belajar untuk menciptakan sesuatu lewat teknologi."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
