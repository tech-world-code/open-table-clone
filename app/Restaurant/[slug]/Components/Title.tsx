import React from "react";
import styles from "./../page.module.css"

export default function Title() {
  return (
    <>
      <h1 className={styles.title}>Milestones Grill</h1>
      <div>
        <span>★★★★★ </span> <span>777 Reviews </span>
        <br></br>
        <span>$50 and over </span> <span>Mexican </span>
      </div>
    </>
  );
}
