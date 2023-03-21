import Link from "next/link";
import React from "react";
import styles from "./../page.module.css";

export default function Nav() {
  return (
    <nav className={styles.menuNav}>
      <ul>
        <Link href="/Restaurant/milestones-grill">
          <button className={styles.selected}>Overview</button>
        </Link>
      </ul>
      <ul>
        <Link href="Restaurant/milestones-grill/Menu">
          <button>Menu</button>
        </Link>
      </ul>
    </nav>
  );
}
