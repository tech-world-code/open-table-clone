import React from "react";
import styles from "./../page.module.css";

export default function Terms() {
  return (
    <p className={styles.terms}>
      {" "}
      By clicking “Complete reservation” you agree to the OpenTable Terms of Use
      and Privacy Policy. Standard text message rates may apply. You may opt out
      of receiving text messages at any time.
    </p>
  );
}
