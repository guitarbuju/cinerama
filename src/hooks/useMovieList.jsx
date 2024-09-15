import { useState, useEffect } from "react";
import { TMDB_API_KEY, TMDB_URL_ENDPOINT } from "../lib/env_imports";
import axios from "axios";

const useMovieList = () => {
  const [movieData, setMovieData] = useState([]);
  const [length, setlength] = useState("");
  const [movieList, setMovieList] = useState("now_playing");
  const [actualPage, setActualPage] = useState(1);

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const url = `${TMDB_URL_ENDPOINT}/movie/${movieList}?api_key=${TMDB_API_KEY}&language=esp-MX&page=${actualPage}`;
        //const url= `https://api.themoviedb.org/3/movie/${movieList}?api_key=7c93a29133df64c786e0131de31c666c&language=esp-MX&page=${actualPage}`

        const respuesta = await axios.get(url);
        const results = respuesta.data.results;
        setlength(results.length);
        console.log(results);
        setMovieData(results);
      } catch (error) {
        console.log(error);
      }
    };

    cargarPeliculas();
  }, [actualPage, movieList]);

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
