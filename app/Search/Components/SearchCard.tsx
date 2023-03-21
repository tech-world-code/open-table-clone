import Link from "next/link";
import React from "react";
import styles from "./../page.module.css";

export default function SearchCard() {
  return (
    
    <div className={styles.searchCard}>
        
      <img
        src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
        alt="Restruant photo"
      ></img>
      <h1>Milestones Grill</h1>
      <div className="rating">
        <span> ★★★★★ </span> <span>Awesome</span> <span>(777)</span>
      </div>
      <br></br>
      <div className="info">
        <span>Mexican</span> <span>$$$$</span> <span>Orange County</span>
      </div>
      <Link href="/Restaurant/milestones-grill" className={styles.StandardLink}>View more information</Link>
    </div>   
  );
}
