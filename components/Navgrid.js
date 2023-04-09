import React from "react";
import styles from "./Navgrid.module.css";
import Link from "next/link";

function Navgrid() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href={"/"}>
            <div className={styles.menuItem}>
              <div>
                <h5>Place Holder1</h5>
              </div>
            </div>
          </Link>
        </li>

        <li>
          <Link href={"/"}>
            <div className={styles.menuItem}>
              <div>
                <h5>Place Holder2</h5>
              </div>
            </div>
          </Link>
        </li>

        <li>
          <Link href={"/"}>
            <div className={styles.menuItem}>
              <div>
                <h5>Place Holder3</h5>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navgrid;
