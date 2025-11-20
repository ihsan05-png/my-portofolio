import { motion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';
import logoPlanet from '@/assets/logo-planet.png';


export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

    const downloadCV = () => {
    // File CV harus berada di public/cv/
    const cvPath = '/cv/CV-IhsanPratamaP';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV-IhsanPratamaP.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-12 md:mb-16 flex justify-center"
        >
          <div className="relative">
            <motion.img
              src={logoPlanet}
              alt="IhsAnkasa Logo"
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
              animate={{
                filter: [
                  'drop-shadow(0 0 20px hsl(var(--cyan-neon) / 0.6))',
                  'drop-shadow(0 0 40px hsl(var(--cyan-neon) / 0.8))',
                  'drop-shadow(0 0 20px hsl(var(--cyan-neon) / 0.6))',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Orbital rings */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 dark:border-primary/20 rounded-full -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
            />
            <motion.div
              className="absolute inset-0 border border-primary/20 dark:border-primary/10 rounded-full -z-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
        >
          Welcome to IhsAnkasa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl mb-4 text-muted-foreground font-light"
        >
          Journey Beyond the Digital Horizon
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-lg mb-12 text-muted-foreground max-w-2xl mx-auto italic"
        >
          Membangun Dunia Digital di Antara Cahaya dan Kegelapan
        </motion.p>
      <div className="flex justify-center gap-6">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          onClick={scrollToAbout}
          className="group relative px-8 py-4 bg-primary/10 border-glow rounded-full text-primary dark:text-primary font-semibold text-lg hover:bg-primary/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="dark:glow-cyan-sm">Explore My Universe</span>
          <ArrowDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          onClick={downloadCV}
          className="group relative px-8 py-4 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950 border border-slate-900 dark:border-slate-100 rounded-full font-semibold text-lg hover:bg-slate-800 dark:hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-900/50 dark:hover:shadow-slate-100/50 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="dark:glow-cyan-sm">Download CV</span>
          <FileDown className="inline-block ml-2 w-5 h-5 group-hover:animate-bounce" />
        </motion.button>
      </div>  
    </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full ring-2 ring-foreground/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-3 h-3 bg-primary rounded-full ring-2 ring-foreground/20"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
};
