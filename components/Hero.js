import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import TitleHero from "./TitleHero";

export default function Hero({ src, width, height }) {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src={src} width={width} height={height} />
      </div>
    </div>
  );
}
