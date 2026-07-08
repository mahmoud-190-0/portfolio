import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader} aria-label="Loading portfolio">
      <div className={styles.mark}>
        <span />
        <span />
        <span />
      </div>
      <p>Mahmoud.dev</p>
    </div>
  );
}

export default Loader;
