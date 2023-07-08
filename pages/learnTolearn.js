import React from "react";
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/blog.module.css";

function learnTolearn() {
  

  return (
    <div className={styles.container}>
      <Meta
        title={"MYCALL DEV"}
        keywords={"Learn To Learn"}
        description={
          "The Blog on How to Learn"
        }
      />

      {/* MAIN SECTION */}
      <main>
        {/* HERO SECTION */}
        <div className={styles.heroContainer}>
            <Image src={"/learnHero.png"} width={1024} height={1024} />
        </div>

        {/* SECTION 2 */}
        <div className={styles.subTitle}>LEARN TO LEARN</div>
        <div className={styles.infoSectionTag}>
            knowledge is power, and with great Power comes great....
        </div>
        

        
        
        {/* FOOTER */}
        <div className={styles.footerContainer}>
          <div className={styles.footerContentContainer}>
            <div className={styles.footerContent}>THE CYBER SECURITY, NETWORKING AND PROGRAMMING BLOG....</div>
          </div>
          <div className={styles.linkedinIconContainer}>
            <Link href={'https://uk.linkedin.com/in/mycall-dev-69aa08271'}>
              <Image src={'/linkedin_white.svg'} width={50} height={50} className={styles.linkedinIcon} />
            </Link>
          </div>
          <div className={styles.emailContact}>contact@mycalldev.com</div>
        </div>
      </main>
    </div>
  );
}

export default learnTolearn;
