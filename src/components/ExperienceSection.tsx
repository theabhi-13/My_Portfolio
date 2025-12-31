import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Layout, Database, CreditCard, Package, MessageSquare } from "lucide-react";

const experiences = [
  {
    role: "Software Development Intern",
    company: "Ecomz.store",
    period: "2024",
    type: "Internship",
    description: "Multi-tenant ecommerce SaaS platform development",
    achievements: [
      {
        icon: Layout,
        text: "Merchant-specific subdomain isolation architecture",
      },
      {
        icon: Server,
        text: "Backend REST APIs using NestJS + Prisma",
      },
      {
        icon: Database,
        text: "PostgreSQL database design and optimization",
      },
      {
        icon: Layout,
        text: "Frontend development with Next.js 14 & TypeScript",
      },
      {
        icon: CreditCard,
        text: "Payment gateway integration",
      },
      {
        icon: Package,
        text: "Order lifecycle management system",
      },
      {
        icon: MessageSquare,
        text: "Customer review and rating system",
      },
    ],
    technologies: ["Next.js 14", "NestJS", "Prisma", "PostgreSQL", "TypeScript"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building real-world solutions that scale
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 gap-8 mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow z-10" />

              {/* Content */}
              <div className="md:text-right md:pr-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30 mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-primary text-lg font-medium">{exp.company}</p>
                  <p className="text-muted-foreground mt-2">{exp.description}</p>
                </motion.div>
              </div>

              <div className="md:pl-12 mt-6 md:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="glass-card p-6"
                >
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Key Contributions
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <achievement.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {achievement.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/50">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
