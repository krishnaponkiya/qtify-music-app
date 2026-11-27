import styles from "./Search.module.css";

export default function Search({ placeholder = "Search a album of your choice" }) {
  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <input className={styles.search} placeholder={placeholder} required />
      <button className={styles.searchButton} type="submit" aria-label="search">
        {/* inline svg (not <img>) so the navbar contains exactly one img: the logo */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </button>
    </form>
  );
}
