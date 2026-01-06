import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, School, Users, Check } from "lucide-react";

const WhoWeServeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const audiences = [
    {
      icon: GraduationCap,
      title: "For Students",
      description: "Build confidence and clarity in your self-study journey",
      benefits: [
        "Confidence during self-study sessions",
        "Better clarity of concepts",
        "Awareness of strengths and improvement areas",
        "Structured approach to learning",
      ],
      color: "primary" as const,
    },
    {
      icon: School,
      title: "For Schools",
      description: "Gain visibility into student engagement and progress",
      benefits: [
        "Visibility into student study behavior",
        "Academic progress insights at scale",
        "Centralized and simple monitoring",
        "Data-driven intervention support",
      ],
      color: "accent" as const,
    },
    {
      icon: Users,
      title: "For Parents",
      description: "Stay informed and connected to your child's learning",
      benefits: [
        "Transparent proof of study effort",
        "Regular progress updates",
        "Peace of mind about engagement",
        "Clear communication with schools",
      ],
      color: "secondary" as const,
    },
  ];

  const colorVariants = {
    primary: {
      bg: "bg-primary/10",
      icon: "text-primary",
      check: "text-primary",
    },
    accent: {
      bg: "bg-accent/10",
      icon: "text-accent",
      check: "text-accent",
    },
    secondary: {
      bg: "bg-secondary/20",
      icon: "text-secondary",
      check: "text-secondary",
    },
  };

  return (
    <section id="who-we-serve" className="section-padding bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wide">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-3 mb-6">
            Built for Everyone in the Education Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Edu Improvement AI bridges the gap between students, schools, and parents—creating 
            a unified approach to better academic outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 card-hover relative overflow-hidden"
            >
              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${colorVariants[audience.color].bg} rounded-bl-[100%] opacity-50`} />

              <div className={`w-16 h-16 rounded-2xl ${colorVariants[audience.color].bg} flex items-center justify-center mb-6`}>
                <audience.icon className={`w-8 h-8 ${colorVariants[audience.color].icon}`} />
              </div>

              <h3 className="text-2xl font-heading text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {audience.description}
              </p>

              <ul className="space-y-3">
                {audience.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colorVariants[audience.color].check}`} />
                    <span className="text-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
