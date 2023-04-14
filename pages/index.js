import Head from "next/head";
import styles from "../styles/Home.module.css";
import InputField from "../components/InputField";
import Hero from "../components/Hero";

export default function Home() {
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
        <Hero />
        <div className={styles.title}>TASK ASSIGNMENT</div>
        <InputField />
      </main>
    </div>
  );
}
