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
      <h1>Abo Ali</h1>
    </div>
  );
}

export default Loader;
