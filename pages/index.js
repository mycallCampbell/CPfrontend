import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import TitleHero from "../components/TitleHero";
import Footer from "../components/Footer";

function Home() {
  // const [selectedOption, setSelectedOption] = useState("");

  // ONCHANGE HANDLERS
  // const handleSelect = (e) => {
  //   const optionValue = e.target.value;
  //   setSelectedOption(optionValue);
  // };

  return (
    <div className={styles.container}>
      <Meta
        title={"WEB APP"}
        keywords={"WEB APPLICATION, HIGH PERFORMANCE, RESPONSIVE"}
        description={
          "HIGH PERFOROMING, UNIQUE WEB APPLICATION BUILT ALONGSIDE AI"
        }
      />

      {/* MAIN SECTION */}
      <main>
        {/* HERO SECTION */}
        <div className={styles.heroContainer}>
          <div>
            <Hero src={"/landing_Web_App.png"} width={1024} height={695} />
          </div>
          <div className={styles.titleHeroContainer}>
            <TitleHero title={`CYBER SECURITY, NETWORKING, PROGRAMMING`} />
          </div>
        </div>

        {/* SECTION 2 HOW ITS DONE */}
        <div className={styles.SubTitle}>ETHERIC TRIANGLE</div>
        <div className={styles.infoSection2}>
          <p>
            Each Discipline is suppourted and underpinned by the other. 
          </p>
        </div>
        <div className={styles.section2Icon}>
          <Image src={"/how_its_done_icon.png"} width={256} height={256} />
        </div>
        <div className={styles.howItsDone}>{`LEARN HOW TO LEARN`}</div>

        
        {/* SECTION WHERE TO START */}
        <div className={styles.settingsGear}>
          <Image src={"/settings.png"} width={128} height={128} />
        </div>
        <div className={styles.buildTitle}>
          CHECK OUT MY ARTICLE WHICH SETS OUT A PROTOCOL ON HOW TO ABSORB NEW INFORMATION IN A STRUCTURED AND PROFICIENT WAY.
        </div>
        <div className={styles.getInTouchBTN}>LETS GO</div>

        <div>
          <Image src={"/index_hero.png"} width={1024} height={627} />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Home;
