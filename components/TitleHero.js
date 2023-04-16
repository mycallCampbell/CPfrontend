import React from "react";
import styles from "./TitleHero.module.css";

export default function TitleHero({ title }) {
  return (
    <div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
