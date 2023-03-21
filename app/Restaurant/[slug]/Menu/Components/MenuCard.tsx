import React from 'react'
import localStyles from "./../page.module.css"

export default function MenuCard() {
  return (
    <div className={localStyles.menuItems}>
          <div className={localStyles.menuCard}>
            <h1>Surf and Turf</h1>
            <p>A well done steak with lobster and rice</p>
            <b>80.00</b>
          </div>
        </div>
  )
}
