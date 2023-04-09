import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/*  META DATA */}
      <Head>
        <title>Boiler Plate</title>
        <meta name="description" content="Boiler Plate" />
        <meta property="og:image" content="" />

        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0 user-scalable=0" />

        <link rel="icon" href="/" />
      </Head>
      <main></main>
    </div>
  );
}
