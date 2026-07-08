import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import { skills } from "../../data/portfolio.js";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Balanced capability across interface, server, and data."
          description="A focused stack for building reliable full stack applications with strong user experience and practical architecture."
        />

        <div className={styles.grid}>
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                className={styles.card}
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className={styles.cardHeader}>
                  <span>
                    <Icon size={22} />
                  </span>
                  <h3>{group.category}</h3>
                </div>

                <div className={styles.list}>
                  {group.items.map((skill) => (
                    <div className={styles.skill} key={skill.name}>
                      <div>
                        <strong>{skill.name}</strong>
                        <span>{skill.level}%</span>
                      </div>
                      <div className={styles.track}>
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.15 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
