
import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import  styles from "./Navbar.module.css";

const Navbar = () => {
  const handleFeedback = () => {
    alert("Thank you for your feedback!");
  };

  return (
    <nav className="{styles.navbar}">
      <Logo />

      <Search />

      <Button
        text="Give Feedback"
        onClick={handleFeedback}
      />
    </nav>
  );
};

export default Navbar;
