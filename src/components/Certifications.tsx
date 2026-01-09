import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { certifications } from "@/data/portfolioData";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32">
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
            <span className="gradient-text">Certifications</span> & Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my skills and continuous learning journey.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-semibold mb-1 text-foreground line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-2">
                    {cert.organization}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {cert.year}
                    </div>
                    {cert.credentialLink && (
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
