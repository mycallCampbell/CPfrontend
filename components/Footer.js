import React from "react";
import styles from "./Footer.module.css";
import Images from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.unorderedList}>
          <li className={styles.listItem}>CONTACT</li>
          <li className={styles.listItem}>ABOUT US</li>
          <li className={styles.listItem}>TERMS AND CONDITIONS</li>
          <li className={styles.listItem}>LEARN</li>
        </ul>
        {/* <Images src={} width={} height={} /> */}
      </div>
    </div>
  );
}
