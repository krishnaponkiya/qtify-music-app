import styles from "./Carousel.module.css";

export default function RightNav({ onClick }) {
  return (
    <button className={`${styles.navButton} ${styles.right}`} onClick={onClick} aria-label="next">
      <svg width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="17" fill="#121212" stroke="#34C94B" strokeWidth="1.5" />
        <path d="M15 11l7 7-7 7" fill="none" stroke="#34C94B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
