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
      <hr />
      <p>
        ﴿إنّ اللهَ وملائكتَهُ يُصَـلُّونَ على النبي يا أيها الذين آمنوا صَلُّوا
        عليه وسلِّمُوا تسليما﴾.
      </p>
    </div>
  );
}

export default Loader;
