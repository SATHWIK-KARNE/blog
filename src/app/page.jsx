import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";



export default function Home() {
  return (
  <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    {/* has 2 children in size ratio 5:2 */}
    <div className={styles.content}>
      <CardList/>
      <Menu/>
    </div>
      
  </div>
  );
}
