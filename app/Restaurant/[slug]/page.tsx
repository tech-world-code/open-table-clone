import React from "react";
import Description from "./Components/Description";
import Nav from "./Components/Nav";
import Photos from "./Components/Photos";
import Reserve from "./Components/Reserve";
import Reviews from "./Components/Reviews";
import Title from "./Components/Title";
import styles from "./page.module.css";

export default function RestaurantDetails() {
  return (
    <>
      <Reserve></Reserve>
      <Title></Title>
      <Description></Description>
      <Photos></Photos>
      <Reviews></Reviews>
    </>
  );
}
