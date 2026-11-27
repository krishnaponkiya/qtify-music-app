
import React, { useEffect, useState } from "react";
import axios from "axios";

import Carousel from "../Carousel/Carousel";
import Album from "../Album/Album";

const NewAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const fetchNewAlbums = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/new"
        );

        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching new albums:", error);
      }
    };

    fetchNewAlbums();
  }, []);

  return (
    <section>
      <div className="section-header">
        <h2>New Albums</h2>

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

export default NewAlbums;
