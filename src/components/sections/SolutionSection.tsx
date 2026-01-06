import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Share2, CheckCircle2 } from "lucide-react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Lightbulb,
      title: "Digital Study Companion",
      description: "A supportive presence during self-study that helps students stay focused and engaged.",
    },
    {
      icon: Target,
      title: "Structured Self-Study",
      description: "Encourages disciplined, methodical study habits that lead to better understanding.",
    },
    {
      icon: CheckCircle2,
      title: "Reflection & Clarity",
      description: "Helps students assess their own understanding and identify areas that need attention.",
    },
    {
      icon: Share2,
      title: "Meaningful Progress Signals",
      description: "Shares clear, actionable insights with schools and parents—no confusion, no guesswork.",
    },
  ];

  return (
    <section id="solution" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-light/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wide">
              Our Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-3 mb-6">
              A Smarter Way to Support Student Learning
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Edu Improvement AI is not a teaching platform or online tuition. It's a thoughtful 
              study companion that enhances self-study while creating transparency for everyone invested 
              in a student's success.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-2xl p-8 shadow-elevated border border-border">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 gap-4 h-full">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="border-r border-foreground" />
                  ))}
                </div>
              </div>

              <div className="relative z-10 space-y-6">
                {/* Mock Dashboard */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Study Progress</p>
                    <p className="text-2xl font-heading text-foreground">This Week</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-primary bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">78%</span>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-4">
                  {["Mathematics", "Science", "English"].map((subject, i) => (
                    <div key={subject}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground">{subject}</span>
                        <span className="text-muted-foreground">{[85, 72, 90][i]}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${[85, 72, 90][i]}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Insight Card */}
                <div className="bg-primary-light rounded-xl p-4 mt-6">
                  <p className="text-sm font-medium text-primary">Weekly Insight</p>
                  <p className="text-foreground mt-1">
                    Focus improved by 15% compared to last week. Great progress in Mathematics!
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-card text-sm font-medium"
            >
              Real-time Updates ✓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
