import Head from "next/head";
import styles from "../styles/addAssignment.module.css";
import InputField from "../components/InputField";

export default function addAssignment() {
  return (
    <div className={styles.container}>
      {/*  META DATA */}
      <Head>
        <title>CONTROL PANEL</title>
        <meta name="description" content="Boiler Plate" />
        <meta property="og:image" content="" />

        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/" />
      </Head>

      {/* MAIN SECTION */}
      <main>
        <div className={styles.heroContainer}>
          <div>
            
          </div>
          <div className={styles.titleHeroContainer}>
        
          </div>
        </div>

        <div className={styles.subTitle}>TASK ASSIGNMENT</div>
        <InputField />
      </main>
    </div>
  );
}
