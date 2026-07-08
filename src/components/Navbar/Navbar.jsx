import React from "react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/portfolio.js";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`${styles.navbar} ${hasScrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.inner} aria-label="Main navigation">
        <a className={styles.logo} href="#home" onClick={closeMenu}>
          <span>MA</span>
          <strong>Mahmoud</strong>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`${styles.links} ${isOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
