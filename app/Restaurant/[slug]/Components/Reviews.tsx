import React from 'react'
import styles from "./../page.module.css"

export default function Reviews() {
  return (
    <div className={styles.reviews}>
    <h1>What 777 people are saying</h1>
    <div className={styles.review}>
      <div className={styles.profile}>BT</div>
      <h2>Bobby Thomas</h2>
      Laurie was on top of everything! Slow night due to the snow storm so
      it worked in our favor to have more one on one with the staff.
      Delicious and well worth the money.
    </div>
  </div>
  )
}
