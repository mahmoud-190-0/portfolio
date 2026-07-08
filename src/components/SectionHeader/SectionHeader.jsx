import React from "react";
import { motion } from "framer-motion";
import styles from "./SectionHeader.module.css";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      className={styles.header}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default SectionHeader;
