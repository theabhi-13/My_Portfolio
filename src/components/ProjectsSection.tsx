import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, TrendingUp, Brain, BookOpen } from "lucide-react";

const projects = [
  {
    title: "StudyNotion",
    description:
      "Full-stack Ed-Tech platform enabling students to browse courses, instructors to create content, and seamless payment processing. Built with secure authentication and automated notifications.",
    icon: BookOpen,
    tools: ["MongoDB", "Node.js", "Express.js", "JWT", "Razorpay"],
    highlights: [
      "Responsive & interactive UI for student engagement",
      "Secure APIs for student, instructor & admin roles",
      "Course purchase with Razorpay payment integration",
      "JWT authentication & Nodemailer notifications",
    ],
    color: "from-neon-cyan to-neon-purple",
    github: "https://github.com/theabhi-13/Study-Notion.git",
    url: "https://study-notion-frontend.vercel.app/",
  },
  {
    title: "Sales Data Analysis",
    description:
      "Comprehensive sales trend analysis with data cleaning, aggregation, and visual insights. Identified top products and seasonal patterns to drive business decisions.",
    icon: TrendingUp,
    tools: ["Python", "Pandas", "Matplotlib"],
    highlights: [
      "Sales trend visualization",
      "Data cleaning pipeline",
      "Seasonal pattern analysis",
      "Product performance metrics",
    ],
    color: "from-neon-cyan to-neon-blue",
    github: "https://github.com/theabhi-13/Sales_Data_Analysis.git",
    url: "",
  },
  {
    title: "Character Recognition",
    description:
      "Machine learning model for handwritten character recognition using Convolutional Neural Networks. Achieved high accuracy through optimized preprocessing and model architecture.",
    icon: Brain,
    tools: ["Python", "CNN", "TensorFlow"],
    highlights: [
      "CNN architecture design",
      "Data preprocessing pipeline",
      "Model optimization",
      "High accuracy rate",
    ],
    color: "from-neon-purple to-neon-cyan",
    github: "https://github.com/theabhi-13/Handwritten-character-recognition.git",
    url: "",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="perspective-1000"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card p-8 cursor-default relative group h-full"
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))`,
          }}
        />

        <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
          <div className="flex items-start justify-between mb-6">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-0.5`}
            >
              <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                <project.icon className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div className="flex gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              ) : (
                <button
                  aria-disabled
                  className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground opacity-60 cursor-not-allowed"
                >
                  <Github className="w-5 h-5" />
                </button>
              )}

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              ) : (
                <button
                  aria-disabled
                  className="w-10 h-10 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground opacity-60 cursor-not-allowed"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          <ul className="space-y-2 mb-6">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world applications of full-stack development and machine learning
          </p>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
