import axios from "axios";

// Keep these URLs exactly as-is: the Cypress tests intercept them.
const BASE = "https://qtify-backend.labs.crio.do";

export const fetchTopAlbums = async () => (await axios.get(`${BASE}/albums/top`)).data;
export const fetchNewAlbums = async () => (await axios.get(`${BASE}/albums/new`)).data;
export const fetchSongs = async () => (await axios.get(`${BASE}/songs`)).data;
export const fetchGenres = async () => (await axios.get(`${BASE}/genres`)).data; // { data: [{key,label}] }
