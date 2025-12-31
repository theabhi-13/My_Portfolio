import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Java (Core)", level: 75 },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "SQL", level: 92 },
      { name: "Power BI", level: 88 },
      { name: "Excel", level: 90 },
      { name: "Pandas", level: 85 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Next.js", level: 82 },
      { name: "NestJS", level: 78 },
      { name: "HTML/CSS", level: 90 },
      { name: "Prisma ORM", level: 75 },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Machine Learning", level: 70 },
      { name: "Data Structures", level: 78 },
      { name: "DBMS", level: 85 },
    ],
  },
];

const SkillCard = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card p-6 group perspective-1000"
    >
      <motion.div
        className="preserve-3d transition-transform duration-300"
        whileHover={{ rotateY: 5, rotateX: -5 }}
      >
        <h3 className="text-xl font-semibold gradient-text mb-6">
          {category.title}
        </h3>
        <div className="space-y-5">
          {category.skills.map((skill, skillIndex) => (
            <div
              key={skill.name}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between mb-2">
                <span className="text-foreground font-medium">{skill.name}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredSkill === skill.name ? 1 : 0.7,
                  }}
                  className="text-primary text-sm font-medium"
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + index * 0.15 + skillIndex * 0.1,
                    ease: "easeOut",
                  }}
                />
              </div>
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-primary animate-glow-pulse"
                />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/2 left-0 w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of analytical prowess and development expertise
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
