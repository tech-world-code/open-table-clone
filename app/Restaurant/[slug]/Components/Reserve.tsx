"use client"

import React from "react";
import styles from "./../page.module.css"

export default function Reserve() {
  return (
    <div className={styles.reserveContainer}>
      <div className={styles.reservation}>
        <h1>Make a reservation</h1>
        <label>Party size: </label>
        <input
          placeholder="Enter the # of people"
          className="standard-input-2"
        ></input><br></br>
        <label>Date: </label>
        <input
          placeholder="Enter a valid date"
          className="standard-input-2"
        ></input>
        <br></br>
        <label>Time: </label>
        <select>
          <option>7:30</option>
          <option>9:30</option>
        </select>
        <br></br>
        <button className="standard-btn">Find a spot</button>
      </div>
    </div>
  );
}
