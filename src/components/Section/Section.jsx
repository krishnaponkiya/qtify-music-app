
import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top"
        );

        setAlbums(response.data);
      } catch (err) {
        console.error("Error fetching albums:", err);
        setError("Unable to load albums. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopAlbums();
  }, []);

  return (
    <section className="{styles.section-container}">
      <div className="{styles.section-header}">
        <h2>Top Albums</h2>

        <button
          className="{styles.collapse-button}"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {!isCollapsed && (
        <div className="{styles.album-grid}">
          {loading && <p>Loading albums...</p>}

          {error && <p className="error-message">{error}</p>}

          {!loading && !error &&
            albums.map((album) => (
              <Card key={album.id} album={album} />
            ))}
        </div>
      )}
    </section>
  );
};

export default Section;
