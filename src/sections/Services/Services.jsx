import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import { services } from "../../data/portfolio.js";
import styles from "./Services.module.css";

function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="What I can build for your next product."
          description="Focused full stack services for professional websites, web apps, dashboards, APIs, and database-backed platforms."
        />

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className={styles.card}
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <Icon size={26} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
