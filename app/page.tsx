import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import RestaurantCard from "./Components/RestaurantCard";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <RestaurantCard></RestaurantCard>
    </>
  );
}
