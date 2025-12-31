import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, School } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Cochin University of Science and Technology (CUSAT)",
    location: "Kochi, Kerala",
    period: "2024 - 2026",
    grade: "CGPA: 8.17",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "A.N. College",
    location: "Patna, Bihar",
    period: "2020 - 2023",
    grade: "64.6%",
    icon: GraduationCap,
    current: false,
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "S.B. College",
    location: "Patna, Bihar",
    period: "2018 - 2020",
    grade: "74.4%",
    icon: School,
    current: false,
  },
  {
    degree: "Secondary Education (10th)",
    institution: "Jean Paul's High School",
    location: "Arrah, Bihar",
    period: "2018",
    grade: "72.0%",
    icon: School,
    current: false,
  },
];

const certifications = [
  {
    name: "Introduction to Internet of Things",
    issuer: "NPTEL Online Certification",
    icon: Award,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card p-5 relative overflow-hidden group"
              >
                {edu.current && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 animate-glow-pulse">
                      Current
                    </span>
                  </div>
                )}

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <edu.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 pr-20">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground text-xs mb-2">
                      {edu.location}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="text-secondary font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Certifications & Extracurricular */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6 h-fit"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <h4 className="font-medium text-foreground mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>

            {/* Extracurricular */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Extracurricular
              </h3>
              <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                <h4 className="font-medium text-foreground mb-2">
                  NSS Member - CUSAT Unit
                </h4>
                <p className="text-sm text-muted-foreground">
                  Active participation in campus activities focusing on environmental, cultural, and social issues.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
