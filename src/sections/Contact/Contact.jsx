import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import { profile, socials } from "../../data/portfolio.js";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something sharp and scalable."
          description="Send a message for full stack development, portfolio work, dashboards, APIs, or modern React interfaces."
        />

        <div className={styles.grid}>
          <motion.form
            className={styles.form}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
          >
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project"
                required
              />
            </label>
            <button className="btn btn-primary" type="submit">
              <Send size={18} />
              Send Message
            </button>
          </motion.form>

          <motion.aside
            className={styles.info}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3>Contact Details</h3>
            <a className={styles.email} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className={styles.socials}>
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noreferrer"
                  >
                    <Icon size={19} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;
