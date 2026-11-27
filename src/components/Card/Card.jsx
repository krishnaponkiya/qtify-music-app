
import React from "react";
import { Card as MuiCard, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import styles from  "./Card.module.css";

const Card = ({ album }) => {
  return (
    <MuiCard className="{styles.album-card}">
      <div className="{styles.album-image-container}">
        <CardMedia
          component="img"
          image={album.image}
          alt={album.title}
          className="album-image"
        />
      </div>

      <CardContent className="{styles.album-card-content}">
        <Chip
          label={`${album.follows} Follows`}
          size="small"
          className="{styles.album-chip}"
        />

        <Typography
          variant="body1"
          className="{styles.album-title}"
        >
          {album.title}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
