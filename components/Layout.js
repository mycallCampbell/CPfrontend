import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

import styles from "./Layout.module.css";
import Navgrid from "./Navgrid";

function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <main className={!open ? styles.layoutContainer : styles.displayTitle}>
          <section>
            {!open ? (
              <div>
                <Link href={"#menuContainer"}>
                  <li
                    className={styles.hamburgerIcon}
                    onClick={(e) => handleOpen(e)}
                  >
                    <Image src="/hamburger.png" width={25} height={25} />
                  </li>
                </Link>
              </div>
            ) : (
              <div
                onClick={(e) => handleOpen(e)}
                className={styles.menuContainer}
                id="menuContainer"
              >
                <Link href="/#">
                  <div className={styles.titleOpen}>
                    <div className={styles.infoOpen}>MYCALL</div>
                    <div className={styles.waveOpen}>DEV</div>
                  </div>
                </Link>

                <nav className={styles.navbar}>
                  <ul>
                    <li>
                      <Link href={"/LandingWebApp"}>
                        <div className={styles.menuGrid}>
                          <div className={styles.menuItem1}>
                            <p>HOME</p>
                          </div>
                          <div className={styles.menuItem2}>{">"}</div>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link href={"/"}>
                        <div className={styles.menuGrid}>
                          <div className={styles.menuItem1}>
                            <p>Place Holder</p>
                          </div>
                          <div className={styles.menuItem2}>{">"}</div>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link href={"/"}>
                        <div className={styles.menuGrid}>
                          <div className={styles.menuItem1}>
                            <p>Place Holder</p>
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

          <section
            className={!open ? styles.logoContainer : styles.displayNone}
          >
            <Link href="/">
              <div className={styles.titleClosed}>
                <div>MYCALL DEV</div>
              </div>
            </Link>
          </section>

          {/* CartIcon */}
          <section>
            <div className={!open ? styles.cartIcon : styles.displayNone}>
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
