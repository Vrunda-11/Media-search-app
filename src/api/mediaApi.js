import axios from "axios";

const UNPLASH_KEY = import.meta.env.VITE_UNPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 30) {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query, page, per_page },
      headers: { Authorization: `Client-ID ${UNPLASH_KEY}` },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
    return null;
  }
}

export async function fetchVideos(query, per_page = 50) {
  try {
    const res = await axios.get("https://api.pexels.com/videos/search", {
      params: { query, per_page },
      headers: { Authorization: PEXELS_KEY },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching videos from Pexels:", error);
    return null;
  }
}

export async function fetchGIFs(query, limit = 50) {
  try {
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: { q: query, api_key: GIPHY_KEY, limit },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching GIFs from Giphy:", error);
    return null;
  }
}
