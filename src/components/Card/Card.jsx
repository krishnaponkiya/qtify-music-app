import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

// type "album" -> "<n> Follows", type "song" -> "<n> Likes"
export default function Card({ data, type = "album" }) {
  const { image, title, follows, likes } = data;
  const label = type === "song" ? `${likes} Likes` : `${follows} Follows`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.image} src={image} alt={title} loading="lazy" />
        <div className={styles.banner}>
          <Chip
            label={label}
            size="small"
            sx={{ backgroundColor: "var(--color-black)", color: "var(--color-white)", fontFamily: "Poppins", fontSize: 10, height: 22 }}
          />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}
