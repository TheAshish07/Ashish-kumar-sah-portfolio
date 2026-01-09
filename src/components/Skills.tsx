import { motion } from "framer-motion";
import { skills } from "@/data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
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
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and skills I've developed through coursework, projects, and self-learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
