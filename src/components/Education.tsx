import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span> Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications that have shaped my technical foundation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-[11px] top-12 w-0.5 h-[calc(100%-48px)] bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <GraduationCap className="w-3 h-3 text-accent-foreground" />
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {edu.duration}
                  </div>
                </div>
                <p className="text-accent font-medium mb-3">{edu.institution}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
