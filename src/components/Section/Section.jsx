import { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

/**
 * Props:
 *  title      - heading text
 *  data       - array of albums or songs
 *  type       - "album" | "song" (chip says Follows vs Likes)
 *  showToggle - false for Songs: no Show All button, always a carousel
 *  resetKey   - change it to remount the carousel at slide 0 (e.g. on tab change)
 *  children   - optional content between header and list (e.g. genre tabs)
 */
export default function Section({ title, data = [], type = "album", showToggle = true, resetKey, children }) {
  const [expanded, setExpanded] = useState(false); // default view is the carousel

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {showToggle && (
          <button className={styles.toggle} onClick={() => setExpanded((p) => !p)}>
            {expanded ? "Collapse" : "Show All"}
          </button>
        )}
      </div>
      {children}
      {expanded && showToggle ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel key={resetKey} data={data} renderComponent={(item) => <Card data={item} type={type} />} />
      )}
    </section>
  );
}
