import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/ihsan05-png',
    color: 'hsl(0, 0%, 100%)',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ihsan-pratama-942811286/',
    color: 'hsl(201, 100%, 35%)',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/ihsnpp',
    color: 'hsl(329, 100%, 48%)',
  },
  {
    name: 'Gmail',
    icon: Mail,
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=ihsanprt7@gmail.com',
    color: 'hsl(4, 90%, 58%)',
  },
];

export const Contact = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 glow-cyan"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Mari berkolaborasi dalam perjalanan digital. Hubungi saya untuk diskusi proyek, 
          konsultasi teknologi, atau sekadar berbagi ide inovatif.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 mb-12"
        >
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 ${
                  focused === 'name'
                    ? 'border-primary shadow-[0_0_10px_hsl(var(--cyan-neon)/0.3)]'
                    : 'border-border'
                }`}
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 ${
                  focused === 'email'
                    ? 'border-primary shadow-[0_0_10px_hsl(var(--cyan-neon)/0.3)]'
                    : 'border-border'
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none transition-all duration-300 resize-none ${
                  focused === 'message'
                    ? 'border-primary shadow-[0_0_10px_hsl(var(--cyan-neon)/0.3)]'
                    : 'border-border'
                }`}
                placeholder="Write your message here..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-primary/10 border-glow rounded-lg text-primary font-semibold hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span className="glow-cyan-sm">Send Message</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                boxShadow: `0 0 20px ${social.color}60`,
              }}
              className="group relative w-14 h-14 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center hover:border-primary/50 transition-all duration-300"
            >
              <social.icon 
                className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" 
              />
              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card border border-primary/30 rounded-lg text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {social.name}
              </div>

              {/* Glow on hover */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"
                style={{ 
                  background: `radial-gradient(circle, ${social.color}40, transparent 70%)`,
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
