import axios from "axios";
import { useState } from "react";
import { TMDB_API_KEY, TMDB_URL_ENDPOINT } from "../lib/env_imports"; 

const useMovieSearch = () => {
  const [movieSearch, setMovieSearch] = useState(""); 
  const [movieData, setMovieData] = useState([]); 
  const [image, setImage] = useState(true); 

  const SearchMovie = async () => {
    
    if (!movieSearch) {
      console.error("Search query is empty!");
      return;
    }

    const desiredPathname = "/3/search/movie";
    
    const params={
      api_key: TMDB_API_KEY,
      query:movieSearch,
      include_adult: false,
      language: "en-US",
      page:1

    }

    const urlSearch = new URL(desiredPathname, TMDB_URL_ENDPOINT);
   
    
    Object.entries(params).forEach(([key, value]) => {
      urlSearch.searchParams.append(key, value);
    });
    console.log("Complete URL:", urlSearch.toString()); 

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
