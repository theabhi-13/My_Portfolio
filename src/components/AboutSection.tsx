import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Code2, Brain, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Analytics",
    description: "SQL, Python, Power BI expertise",
  },
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Next.js, NestJS, PostgreSQL",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "CNN, Data preprocessing",
  },
  {
    icon: TrendingUp,
    title: "Business Insights",
    description: "Actionable data-driven decisions",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm{" "}
              <span className="text-foreground font-medium">
                Abhishek Kumar Singh
              </span>{" "}
              a software developer specializing in backend systems, RESTful APIs, and scalable web applications. I have hands-on experience building production-ready applications using Node.js, NestJS, PostgreSQL, MongoDB, and TypeScript, with a strong focus on clean architecture, performance, and reliability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans from{" "}
              <span className="text-primary">exploratory data analysis</span> to{" "}
              <span className="text-secondary">
                building production-grade applications
              </span>
              . I believe in the power of data to drive business decisions and
              the elegance of clean, maintainable code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not diving into datasets or debugging code, you'll find
              me contributing to community service through NSS and staying
              updated with the latest in AI/ML.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {["Python", "SQL", "Power BI", "Next.js", "NestJS", "PostgreSQL"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="glass-card p-6 group cursor-default neon-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
