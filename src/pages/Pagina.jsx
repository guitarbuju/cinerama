/* eslint-disable react/prop-types */

import { useMovieContext } from "../../Context";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import SelectMovieButton from "../components/SelectMovieButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./movie.module.css";
import Pager from "../components/Pager";
import MovieListButtons from "../components/MovieListButtons";
import { TMDB_API_KEY, TMDB_URL_ENDPOINT } from "../lib/env_imports";
import Genres from "../components/Genres";
import Times from "../components/Times";

const Pagina = () => {
  const [movieData, setMovieData] = useState([]);
  const [length, setlength] = useState("");
  const [actualPage, setActualPage] = useState(1);
  const [movieList, setMovieList] = useState("now_playing");

  console.log(length);
  console.log(actualPage);

  const nextPage = () => {
    if (actualPage >= 1 && actualPage <= length) {
      setActualPage(actualPage + 1);
    }
    if (actualPage < 1) {
      setActualPage(1);
    }
  };
  const prevPage = () => {
    if (actualPage > 1 && actualPage <= length) {
      setActualPage(actualPage - 1);
    }
    if (actualPage < 1) {
      setActualPage(1);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const url = `${TMDB_URL_ENDPOINT}${movieList}?api_key=${TMDB_API_KEY}&language=esp-MX&page=${actualPage}`;
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

  const { setSelectedMovie, selectedMovie } = useMovieContext();

  const handleGetTicketsClick = (movie) => {
    setSelectedMovie(movie);
    navigate("/pag2");
  };
  console.log(selectedMovie);

  return (
    <div className=" ">
      <Header />
      <MovieListButtons
        setMovieList={setMovieList}
        setActualPage={setActualPage}
      />
      <div
        className={`sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 ${styles.movie}`}
      >
        {movieData.map((movie, index) => (
          <motion.div
            key={index}
            className="rounded-lg"
            style={{ boxShadow: "8px 4px 10px  rgba(0,0,0,0.8)" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "17px 8px 20px -4px rgba(0,0,0,0.8)",
            }}
          >
            <Movie movie={movie} />
            <div className="flex flex-col ">
              <Genres movie={movie}/>
              <Times />
            </div>

            <div className="mb-8 h-10">
              <SelectMovieButton
                handleGetTicketsClick={handleGetTicketsClick}
                movie={movie}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <Pager
        actualPage={actualPage}
        setActualPage={setActualPage}
        prevPage={prevPage}
        nextPage={nextPage}
        length={length}
      />
    </div>
  );
};

export default Pagina;
