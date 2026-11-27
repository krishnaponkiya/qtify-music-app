
import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Album from "../Album/Album";

const TopAlbums = ({ albums }) => {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <section>
      <div className="section-header">
        <h2>Top Albums</h2>

        <button onClick={() => setShowCarousel(!showCarousel)}>
          {showCarousel ? "Show All" : "Collapse"}
        </button>
      </div>

      {showCarousel ? (
        <Carousel
          items={albums}
          renderItem={(album) => <Album album={album} />}
        />
      ) : (
        <div className="album-grid">
          {albums.map((album) => (
            <Album key={album.id || album.slug} album={album} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TopAlbums;
