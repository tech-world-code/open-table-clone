import React from "react";
import Nav from "./Components/Nav";
import styles from "./page.module.css"

export default function RestaurantLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <>
      <Nav></Nav>
      <div className={styles.imageBg}>
        <img src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"></img>
      </div>
      <div className={styles.restraurantInfo}>
        {children}
      </div>
    </>
  );
}
