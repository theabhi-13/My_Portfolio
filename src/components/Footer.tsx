import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/theabhi13",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/theabhi-13",
    color: "hover:text-foreground",
  },
  {
    name: "LeetCode",
    icon: Code,
    href: "https://leetcode.com/u/theabhi_13/",
    color: "hover:text-[#FFA116]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:as9261747@gmail.com",
    color: "hover:text-primary",
  },
];

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="text-2xl font-bold gradient-text">
              Abhishek<span className="text-foreground">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Data Analyst & Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className={`w-12 h-12 rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 ${link.color}`}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abhishek Kumar Singh. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
