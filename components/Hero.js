import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src={"/hero_waves_stars.png"} width={1024} height={682} />
        <div className={styles.title}>
          WELCOME TO YOUR PERSONAL <span>AI</span> ORGANSIER
        </div>
      </div>
    </div>
  );
}
