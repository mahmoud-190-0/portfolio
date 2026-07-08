import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import { projects } from "../../data/portfolio.js";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="projects">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected builds with real product thinking."
          description="A portfolio-ready project set covering commerce, productivity, education, and service workflows."
        />

        <div className={styles.grid}>
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                className={styles.card}
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className={styles.icon}>
                  <Icon size={24} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.stack}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github size={17} />
                    GitHub
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
