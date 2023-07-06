import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

import styles from "./Layout.module.css";
import Navgrid from "./Navgrid";

function Layout({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <main
          className={!toggleMenu ? styles.layoutContainer : styles.displayTitle}
        >
          <section>
            {!toggleMenu ? (
              <Link href={"/menuContainer"}>
                <div>
                  <li
                    className={styles.hamburgerIcon}
                    onClick={(e) => handleToggle(e)}
                  >
                    <Image src="/hamburger.png" width={25} height={25} />
                  </li>
                </div>
              </Link>
            ) : (
              <div
                onClick={(e) => handleToggle(e)}
                className={styles.menuContainer}
                id="menuContainer"
              >
                <div className={styles.logoOpenImage}>
                  <Image src={"/teel_logo.png"} width={62.5} height={62.5} />
                </div>

                <nav className={styles.navbar}>
                  <ul>
                    <li>
                      <Link href={"/addAssignment"}>
                        <div className={styles.menuGrid}>
                          <div className={styles.menuItem1}>
                            <p>ADD ASSIGNMENTS</p>
                          </div>
                          <div className={styles.menuItem2}>{">"}</div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className={styles.closeMenu}>
                  <p>CLOSE MENU</p>
                </div>
              </div>
            )}
          </section>

          {/* DESKTOP */}

          <section
            className={!toggleMenu ? styles.logoContainer : styles.displayNone}
          >
            <Link href="/">
              <div className={styles.titleClosed}>
                <div>MYCALL DEV</div>
              </div>
            </Link>
          </section>

          {/* CartIcon */}
          <section>
            <div className={!toggleMenu ? styles.cartIcon : styles.displayNone}>
              <CartIcon />
            </div>
          </section>
        </main>

        {/* NavGrid */}
        <div className={styles.navgrid}>
          <Navgrid />
        </div>

        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
