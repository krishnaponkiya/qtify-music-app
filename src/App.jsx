import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import SongsSection from "./components/SongsSection/SongsSection";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";

export default function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    fetchTopAlbums().then(setTopAlbums).catch(console.error);
    fetchNewAlbums().then(setNewAlbums).catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <SongsSection />
    </>
  );
}
