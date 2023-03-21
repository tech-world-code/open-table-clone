import React from "react";
import styles from "./../page.module.css"

export default function Header() {
  return (
    <>
      <h2>You're almost there!</h2>
      <div className={styles.restaurant}>
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
          alt="Restruant"
        ></img>
        <h3>Milestones Grill</h3>
        <div></div>
        <span>Friday, 17 2023 </span> <span> 9:30 </span> <span> 3 people</span>
      </div>
      <br></br>
    </>
  );
}
