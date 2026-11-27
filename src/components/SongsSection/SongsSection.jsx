import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Section from "../Section/Section";
import { fetchSongs, fetchGenres } from "../../api/api";

const tabSx = {
  color: "var(--color-white)",
  textTransform: "none",
  fontFamily: "Poppins, sans-serif",
  fontSize: 16,
  "&.Mui-selected": { color: "var(--color-white)" },
};

export default function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [value, setValue] = useState("all");

  useEffect(() => {
    fetchSongs().then(setSongs).catch(console.error);
    fetchGenres()
      .then((res) => setGenres([{ key: "all", label: "All" }, ...res.data]))
      .catch(console.error);
  }, []);

  const filtered = value === "all" ? songs : songs.filter((s) => s.genre?.key === value);

  return (
    <Section title="Songs" data={filtered} type="song" showToggle={false} resetKey={value}>
      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        sx={{ mb: 3 }}
        TabIndicatorProps={{ style: { backgroundColor: "var(--color-primary)", height: 3 } }}
      >
        {genres.map((g) => (
          <Tab key={g.key} value={g.key} label={g.label} sx={tabSx} />
        ))}
      </Tabs>
    </Section>
  );
}
