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
  // useState
  const [speed, setSpeed] = useState(false);
  const [google, setGoogle] = useState(false);
  const [images, setImages] = useState(false);
  const [scalabiltiy, setScalability] = useState(false);

  // ONCLICK HANDLERS
  const handleSpeed = () => {
    setSpeed(true);
    setImages(false);
    setGoogle(false);
    setScalability(false);
  };

  const handleGoogle = () => {
    setGoogle(true);
    setSpeed(false);
    setImages(false);
    setScalability(false);
  };

  const handleImages = () => {
    setImages(true);
    setSpeed(false);
    setGoogle(false);
    setScalability(false);
  };

  const handleScalability = () => {
    setScalability(true);
    setImages(false);
    setSpeed(false);
    setGoogle(false);
  };
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
            <TitleHero title={`SPEED, PERFORMANCE, FEATURE RICH WEB APPS`} />
          </div>
        </div>
        {/* SECTION 2 HOW ITS DONE */}
        <div className={styles.SubTitle}>HIGH PERFORMANCE</div>
        <div className={styles.infoSection2}>
          <p>
            The <span>ULTIMATE</span> objective web app is to increase the reach
            of your companies' audience. It's all a numbers game....
          </p>
        </div>
        <div className={styles.section2Icon}>
          <Image src={"/how_its_done_icon.png"} width={256} height={256} />
        </div>
        <div className={styles.howItsDone}>{`HOW IT\'S DONE`}</div>

        {/* INSTRUCTIONS FOR SELECT */}
        <div className={styles.selectInstructions}>
          SELECT A TOPIC FROM THE DROP DOWN TO SEE HOW ITS DONE
        </div>

        {/* DROP BOX */}
        <div className={styles.selectBoxContainer}>
          <select className={styles.selectBox}>
            <option value="" disabled selected>
              Select an option
            </option>
            <option onClick={(e) => handleSpeed(e)} value="speed">
              SPEED
            </option>
            <option onClick={(e) => handleGoogle(e)} value="google">
              GOOGLE
            </option>
            <option onClick={(e) => handleImages(e)} value="images">
              IMAGES
            </option>
            <option onClick={(e) => handleScalability(e)} value="scalability">
              SCALABILITY
            </option>
          </select>
        </div>

        {/* UL LIST WITH ONCLICK HANDLERS*/}
        <ul className={styles.unorderedList}>
          <li className={speed ? styles.listItem : styles.displayNone}>
            SPEED
            <Link href={"/speed"}>
              <span className={styles.moreInfoBTN}>MORE INFO</span>
            </Link>
            <p className={styles.additionalInfo}>
              OUR WEB APPS ARE RATED 'A' PERFORMANCE FOR SPEED BY REPUTABLE SELF
              VERIFIABLE APPS.{" "}
            </p>
          </li>

          <li className={google ? styles.listItem : styles.displayNone}>
            GOOGLE{" "}
            <Link href={"/#"}>
              <span className={styles.moreInfoBTN}>MORE INFO</span>
            </Link>
            <p className={styles.additionalInfo}>
              GOOGLES SEARCH ENGINE &#91;SERP&#93; REQUIRES IMAGE AND TEXT
              ADHERENCE TO THEIR POLICY.
            </p>
          </li>
          <li className={images ? styles.listItem : styles.displayNone}>
            IMAGES{" "}
            <Link href={"/#"}>
              <span className={styles.moreInfoBTN}>MORE INFO</span>
            </Link>
            <p className={styles.additionalInfo}>
              ALL IMAGES MUST BE UNIQUE AND THE FILE SIZE MUST BE OPTIMISED.
            </p>
          </li>

          <li className={scalabiltiy ? styles.listItem : styles.displayNone}>
            SCALABILITY{" "}
            <Link href={"/#"}>
              <span className={styles.moreInfoBTN}>MORE INFO</span>
            </Link>
            <p className={styles.additionalInfo}>
              DESIGNED TO HANDLE INCREASED WEBSITE TRAFFIC
            </p>
          </li>
        </ul>
        {/* SECTION WHERE TO START */}
        <div className={styles.checkMark}>
          <Image src={"/settings.png"} width={128} height={128} />
        </div>
        <div className={styles.buildTitle}>BUILD YOUR BUSINESS ONLINE</div>
        <div>
          <Image src={"/setup_business.png"} width={1024} height={627} />
        </div>
        <div className={styles.getInTouchBTN}>GET IN TOUCH</div>
        <Footer />
      </main>
    </div>
  );
}

export default Home;
