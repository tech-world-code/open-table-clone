import Link from "next/link";
import React from "react";
import styles from "./../page.module.css";

export default function RestaurantCard() {
  return (
    <Link href="/Restaurant/milestones-grill">
      <div className={styles.card}>
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
          alt="Restruant photo"
        ></img>
        <h1>Milestones Grill</h1>
        <div className="rating">
          <span>★★★★★</span> <span>777 Reviews</span>
        </div>
        <div className="info">
          <span>Mexican</span> <span>$$$$</span> <span>Orange County</span>
        </div>
      </div>
    </Link>
  );
}
