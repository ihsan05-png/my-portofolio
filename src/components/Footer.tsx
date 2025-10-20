import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Copyright */}
          <p className="text-muted-foreground text-sm md:text-base">
            © {new Date().getFullYear()} Ihsan Pratama Putra
          </p>

          {/* Made with love */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.div>
            <span>among the stars</span>
          </div>

          {/* Tagline */}
          <p className="text-primary/80 text-xs md:text-sm italic glow-cyan-sm">
            "IhsAnkasa — Membangun Dunia Digital di Antara Cahaya dan Kegelapan"
          </p>

          {/* Decorative stars */}
          <div className="flex justify-center gap-4 pt-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-primary rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-10" />
    </footer>
  );
};
