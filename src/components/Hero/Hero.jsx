import heroImg from "../../assets/hero.svg";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src={heroImg} alt="headphones" width={212} height={212} />
    </div>
  );
}
