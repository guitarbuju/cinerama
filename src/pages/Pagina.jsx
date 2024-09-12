/* eslint-disable react/prop-types */

import { useMovieContext } from "../../Context"
import Movie from "../components/Movie";
import SelectMovieButton from "../components/SelectMovieButton";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./movie.module.css";
import Pager from "../components/Pager";
import MovieListButtons from "../components/MovieListButtons";
import Genres from "../components/Genres";
import Times from "../components/Times";
import useMovieList from "../hooks/useMovieList";

const Pagina = () => {
 

  const navigate = useNavigate();
  
  const {movieData, length, setMovieList, actualPage, setActualPage} = useMovieList();

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
        length={length}
      />
    </div>
  );
};

export default Pagina;
