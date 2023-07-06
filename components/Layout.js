import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.containerGrid}>
        <div className={styles.imageItem}>
          <Image src={"/hamburger.png"} width={32} height={32} />
        </div>

        {/* TITLE */}
        <Link href={'/'}>
          <h3 className={styles.titleItem}>MYCALL DEV</h3>
        </Link>

        {/* MESSAGE ICON */}
        <div className={styles.messageIconContainer}>
          <div>
            <Image src={"/teel_logo.png"} width={64} height={64} />
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className={styles.nav}>
        
      </nav>

      <div className={styles.container}>{children}</div>
    </>
  );
}

export default Layout;
