import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, UserCheck, Lock, Building2 } from "lucide-react";

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trustPillars = [
    {
      icon: Handshake,
      title: "Built for Schools, Not Against Them",
      description: "We work alongside educational institutions, enhancing rather than disrupting their processes.",
    },
    {
      icon: UserCheck,
      title: "Teacher-Supportive, Not Teacher-Replacing",
      description: "Teachers remain central to education. We support their work with better student insights.",
    },
    {
      icon: Lock,
      title: "Student Safety & Data Privacy Focused",
      description: "Comprehensive data protection policies ensure student information is always secure.",
    },
    {
      icon: Building2,
      title: "Institution-Ready Platform",
      description: "Enterprise-grade infrastructure designed for schools and educational boards.",
    },
  ];

  return (
    <section className="section-padding bg-foreground text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wide">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mt-3 mb-6">
            Trust & Responsibility
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Education technology comes with responsibility. We take that seriously in everything we build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-xl border border-primary-foreground/10 hover:border-primary-foreground/20 bg-primary-foreground/5 transition-colors"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center">
                <pillar.icon className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-heading mb-2">{pillar.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
