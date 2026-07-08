import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { profile, stats } from "../../data/portfolio.js";
import { useTypingEffect } from "../../hooks/useTypingEffect.js";
import styles from "./Hero.module.css";

function Hero() {
  const typedText = useTypingEffect([
    profile.name,
    "Full Stack Developer",
    "React & Node.js Engineer",
  ]);

  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.shell} section-shell`}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Available for full stack projects</p>
          <h1>
            <span className={styles.typing}>{typedText}</span>
            <span className={styles.cursor} aria-hidden="true" />
          </h1>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.summary}>
            I design and build elegant web products with strong frontend craft,
            dependable backend logic, and data models that make applications
            easier to scale.
          </p>

          <div className={styles.actions}>
            <a className="btn btn-primary" href="#contact">
              <Mail size={18} />
              Contact Me
            </a>
            <a className="btn btn-secondary" href="#projects">
              View Projects
              <ArrowRight size={18} />
            </a>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          aria-label="Developer workspace visual"
        >
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.codeBlock}>
              <p>
                <span>const</span> developer = {"{"}
              </p>
              <p>
                {" "}
                name: <em>'Mahmoud Ahmed Ali'</em>,
              </p>
              <p>
                {" "}
                role: <em>'Full Stack Developer'</em>,
              </p>
              <p>
                {" "}
                stack: [<em>'React'</em>, <em>'Node'</em>, <em>'DB'</em>],
              </p>
              <p>{"};"}</p>
            </div>
          </div>

          <div className={styles.metricCard}>
            <Sparkles size={18} />
            <div>
              <strong>Scalable UI</strong>
              <span>Clean architecture, motion, and performance</span>
            </div>
          </div>

          <a
            className={styles.download}
            href="/cv/Eng-Mahmoud-Ahmed-Ali-CV.html"
            download
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
