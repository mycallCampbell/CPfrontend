import React from "react";
import styles from "../styles/speed.module.css";
import InputField from "../components/InputField";
import Hero from "../components/Hero";
import TitleHero from "../components/TitleHero";
import Meta from "../components/Meta";

export default function speed() {
  return (
    <div>
      {/* META SECTION */}
      <Meta
        title={"SPEED"}
        keywords={"HIGH PERFORMANCE"}
        description={
          "HIGH PERFOROMING, UNIQUE WEB APPLICATION BUILT ALONGSIDE AI"
        }
      />

      {/* MAIN SECTION */}
      <main>
        <div className={styles.heroContainer}>
          <Hero src={"/speed_hero.png"} width={1342} height={682} />
        </div>
        <div className={styles.titleHeroContainer}>
          <TitleHero title={`HIGH PERFORMANCE`} />
        </div>
        <div className={styles.content}>
          In today's fast-paced world, people have become more and more
          impatient when it comes to waiting for websites to load. A website's
          speed is now more critical than ever, and there are many reasons why
          website owners should focus on optimizing their site's loading time.
          In this blog, we will discuss why speed is essential for websites and
          why you should prioritize it.
        </div>
      </main>
    </div>
  );
}
