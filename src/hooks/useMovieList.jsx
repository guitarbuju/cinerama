import { useState, useEffect } from "react";
import { TMDB_API_KEY, TMDB_URL_ENDPOINT } from "../lib/env_imports";
import axios from "axios";
import { urlMovieListParams } from "../api/url/urlParams";
import { createUrlWithParams } from "../api/url/createUrlWithParams";


const useMovieList = () => {
  const [movieData, setMovieData] = useState([]);
  const [length, setlength] = useState("");
  const [movieList, setMovieList] = useState("now_playing");
  const [actualPage, setActualPage] = useState(1);

const urlSearch = createUrlWithParams(urlMovieListParams(TMDB_API_KEY, movieList, actualPage), TMDB_URL_ENDPOINT);
  

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
      
        const respuesta = await axios.get(urlSearch.toString());
        const results = respuesta.data.results;
        setlength(results.length);
        console.log(results);
        setMovieData(results);
      } catch (error) {
        console.log(error);
      }
    };

    cargarPeliculas();
  }, [actualPage, movieList,urlSearch]);

  return {
    movieData,
    setMovieData,
    length,
    setlength,
    movieList,
    setMovieList,
    actualPage,
    setActualPage,
  };
};

export default useMovieList;
