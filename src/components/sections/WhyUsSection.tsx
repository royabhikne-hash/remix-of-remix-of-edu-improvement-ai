import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Heart, Flag, Users, Shield, Award } from "lucide-react";

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: BookOpen,
      title: "Encourages Disciplined Self-Study",
      description: "Promotes consistent, focused study habits that build lasting academic skills.",
    },
    {
      icon: Heart,
      title: "Builds Accountability Without Pressure",
      description: "Creates healthy transparency without adding stress or surveillance anxiety.",
    },
    {
      icon: Flag,
      title: "Designed for Indian Education",
      description: "Built with deep understanding of Indian curriculum, exam patterns, and learning culture.",
    },
    {
      icon: Users,
      title: "School-Aligned & Parent-Friendly",
      description: "Works with existing school systems and keeps parents meaningfully informed.",
    },
    {
      icon: Shield,
      title: "Privacy-First & Student-Safe",
      description: "Student data protection is foundational—never compromised, always respected.",
    },
    {
      icon: Award,
      title: "Institution-Ready Platform",
      description: "Scalable, reliable, and built for deployment across schools of all sizes.",
    },
  ];

  return (
    <section id="why-us" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wide">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-3 mb-6">
            Why Edu Improvement AI?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We've built more than a product—we've built a philosophy around responsible, 
            effective education technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
