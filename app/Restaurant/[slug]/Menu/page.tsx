import Nav from "../Components/Nav";
import Reserve from "../Components/Reserve";
import styles from "../page.module.css";
import MenuCard from "./Components/MenuCard";
import localStyles from "./page.module.css";

export default function Menu() {
  return (
    <>
      <Reserve></Reserve>
      <h1>Menu</h1>
      <MenuCard></MenuCard>
    </>
  );
}
