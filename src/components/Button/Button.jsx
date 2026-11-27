
import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button
      className={styles.feedbackButton}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
