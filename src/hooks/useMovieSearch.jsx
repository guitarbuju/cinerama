import axios from "axios";
import { useState } from "react";
import { TMDB_API_KEY, TMDB_URL_ENDPOINT } from "../lib/env_imports";
import { urlParams } from "../api/url/urlParams";
import { createUrlWithParams } from "../api/url/createUrlWithParams";

const useMovieSearch = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [image, setImage] = useState(true);

  const SearchMovie = async () => {
    if (!movieSearch) {
      console.error("Search query is empty!");
      return;
    }

    const urlSearch = createUrlWithParams(
      urlParams(TMDB_API_KEY, movieSearch),
      TMDB_URL_ENDPOINT
    );

    try {
      const fetchedMovie = await axios.get(urlSearch.toString());
      const response = fetchedMovie.data;

      setMovieData(response.results || response);
      setImage(false);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  const ClearSearch = () => {
    setMovieSearch("");
    setMovieData([]);
  };

  return {
    movieData,
    setMovieData,
    movieSearch,
    setMovieSearch,
    image,
    setImage,
    SearchMovie,
    ClearSearch,
  };
};

export default useMovieSearch;
