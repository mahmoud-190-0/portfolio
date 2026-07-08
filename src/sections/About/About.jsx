import React from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap } from "lucide-react";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import { profile } from "../../data/portfolio.js";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About me"
          title="A full stack developer with product-minded engineering habits."
          description={profile.bio}
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <GraduationCap size={28} />
            <h3>Education</h3>
            <p>{profile.education}</p>
          </motion.div>

          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3>Skills Summary</h3>
            <p>
              React interfaces, reusable components, RESTful APIs, Node.js
              services, authentication patterns, MongoDB and MySQL database
              work, Git workflow, and responsive UI implementation.
            </p>
            <a
              className="btn btn-primary"
              href="/cv/Eng-Mahmoud-Ahmed-Ali-CV.pdf"
              download
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
