import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EyeOff, HelpCircle, BarChart3 } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: EyeOff,
      title: "Progress Remains Invisible",
      description:
        "Students put in hours of study, but there's no clear way to measure or communicate their actual understanding and progress.",
    },
    {
      icon: HelpCircle,
      title: "Parents Lack Reliable Proof",
      description:
        "Without tangible evidence, parents are left wondering whether their child is truly engaged or just going through the motions.",
    },
    {
      icon: BarChart3,
      title: "Schools Need Better Data",
      description:
        "Institutions lack consistent, meaningful data about student engagement during self-study hours, making intervention difficult.",
    },
  ];

  return (
    <section id="problem" className="section-padding bg-muted/50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wide">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-3 mb-6">
            The Real Problem with Self-Study
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every day, millions of students sit down to study. But the gap between 
            studying and truly learning remains invisible to everyone who matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover"
            >
              <div className="icon-container mb-6">
                <problem.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
