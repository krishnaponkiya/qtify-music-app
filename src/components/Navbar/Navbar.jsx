import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

// img.parentElement.parentElement must be this <nav> (the tests measure the logo against it)
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search />
      <Button>Give Feedback</Button>
    </nav>
  );
}
