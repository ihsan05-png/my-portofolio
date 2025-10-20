import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 w-16 h-16 rounded-full border-glow bg-card/50 backdrop-blur-sm flex items-center justify-center overflow-hidden group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Planet with ring effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent box-glow-cyan"
            animate={{ 
              boxShadow: isDark 
                ? '0 0 20px hsl(var(--cyan-neon) / 0.6), 0 0 40px hsl(var(--cyan-neon) / 0.4)' 
                : '0 0 10px hsl(var(--cyan-neon) / 0.3), 0 0 20px hsl(var(--cyan-neon) / 0.2)'
            }}
          >
            {/* Ring around planet */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-3 rounded-full border border-primary/30 rotate-12" />
            </div>
            
            {/* Icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-background">
              {isDark ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.button>
  );
};
