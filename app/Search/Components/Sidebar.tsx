import React from 'react'
import styles from "./../page.module.css"

export default function Sidebar() {
  return (
    <div className={styles.sideBar}>
        <h4>Dining Options</h4>
        <ul>
          <li>
            <input type="checkbox"></input> All dining options{" "}
          </li>
          <li>
            <input type="checkbox"></input> Delivery only{" "}
          </li>
          <li>
            <input type="checkbox"></input> Takeout only{" "}
          </li>
        </ul>
        <line></line>

        <h4>Expeirences</h4>
        <ul>
          <li>
            <input type="checkbox"></input> Special menu{" "}
          </li>
          <li>
            <input type="checkbox"></input> Happy hour{" "}
          </li>
          <li>
            <input type="checkbox"></input> Complimentry item{" "}
          </li>
        </ul>
        <line></line>

        <h4>Seating Options</h4>
        <ul>
          <li>
            <input type="checkbox"></input> Bar{" "}
          </li>
          <li>
            <input type="checkbox"></input> Counter{" "}
          </li>
          <li>
            <input type="checkbox"></input> Standard{" "}
          </li>
          <li>
            <input type="checkbox"></input> High top{" "}
          </li>
          <li>
            <input type="checkbox"></input> Outdoor{" "}
          </li>
        </ul>
        <line></line>

        <h4>Price</h4>
        <div>
          <button title="$30 and under">$$</button>
          <button title="$31 to $50">$$$</button>
          <button title="$50 and over">$$$</button>
        </div>

        <h4>Region</h4>
        <ul>
          <li>
            <input type="checkbox"></input> South Orange County{" "}
          </li>
          <li>
            <input type="checkbox"></input> North Orange County{" "}
          </li>
          <li>
            <input type="checkbox"></input> LA{" "}
          </li>
        </ul>

        <h4>Cuisine</h4>
        <ul>
          <li>
            <input type="checkbox"></input> American{" "}
          </li>
          <li>
            <input type="checkbox"></input> Chineese{" "}
          </li>
          <li>
            <input type="checkbox"></input> Mexican{" "}
          </li>
        </ul>
      </div>
  )
}
