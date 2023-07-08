import React from "react";
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";
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
        title={"MYCALL DEV"}
        keywords={"CYBER SECURITY, NETWORKING AND PROGRAMMING"}
        description={
          "THE ETHERIC TRIANGLE"
        }
      />

      {/* MAIN SECTION */}
      <main>
        {/* HERO SECTION */}
        <div className={styles.heroContainer}>
            <Image src={"/landing_Web_App.png"} width={1024} height={695} />
            <div className={styles.heroContent}>
              <div className={styles.heroContentItem}>
                CYBER SECURITY 
              </div> 
              <div className={styles.heroContentItem}>
                NETWORKING
              </div>
            <div className={styles.heroContentItem}>
              PROGRAMMING
            </div> 
            </div>
            
        </div>

        {/* SECTION 2 */}
        <div className={styles.subTitle}>ETHERIC TRIANGLE</div>
        <div className={styles.infoSectionTag}>
            Each Technical Discipline is suppourted and underpinned by the other. 
        </div>
        <div className={styles.section2Icon}>
          <Image src={"/how_its_done_icon.png"} width={256} height={256} />
        </div>
        <div className={styles.howItsDone}>{`LEARN HOW TO LEARN`}</div>

        
        {/* SECTION WHERE TO START */}
        
        <div className={styles.articleTag}>
          CHECK OUT MY ARTICLE WHICH SETS OUT A PROTOCOL ON HOW TO ABSORB NEW INFORMATION IN A STRUCTURED AND PROFICIENT WAY.
        </div>
        <div className={styles.letsGoBTN}>LETS GO</div>

        <div className={styles.thinkingImageContainer}>
          <Image src={"/thinking.png"} width={1024} height={1024} className={styles.thinkingImage} />
          <div className={styles.techStackTitle}>THE <span>TECH STACK</span> FOR MYCALL DEV </div>
        </div>

        <div className={styles.listItemsContainer}>
          <ul className={styles.unorderedList}>
            <li className={styles.listItem}>Django for the Backend</li>
            <li className={styles.listItem}>Next JS for the Frontend</li>
            <li className={styles.listItem}>Vanilla CSS for Design</li>
            <li className={styles.listItem}>Virtual Private Server for Speed</li>
            <li className={styles.listItem}>Postgresql for the Database</li>
            <li className={styles.listItem}>Midjourney AI generated for Images</li>

          </ul>
        </div>

        {/* FOOTER */}
        <div className={styles.footerContainer}>
          <div className={styles.footerContentContainer}>
            <div className={styles.footerContent}>THE CYBER SECURITY, NETWORKING AND PROGRAMMING BLOG....</div>
          </div>
          <div className={styles.linkedinIconContainer}>
            <Link href={'/https://uk.linkedin.com/in/mycall-dev-69aa08271'}>
              <Image src={'/linkedin_white.svg'} width={50} height={50} className={styles.linkedinIcon} />
            </Link>
          </div>
          <div className={styles.emailContact}>contact@mycalldev.com</div>
        </div>
      </main>
    </div>
  );
}

export default Home;
