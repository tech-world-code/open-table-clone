import React from "react";
import styles from "./../page.module.css"

export default function Photos() {
  return (
    <><h1>5 Photos</h1><div className={styles.gallery}>
          <img
              src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
              alt="Photos of this restraurant"
          ></img>
          <img
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
              alt="Photos of this restraurant"
          ></img>
          <img
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
              alt="Photos of this restraurant"
          ></img>
          <img
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
              alt="Photos of this restraurant"
          ></img>
          <img
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
              alt="Photos of this restraurant"
          ></img>
      </div></>
  )
}
