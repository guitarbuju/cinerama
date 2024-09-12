import { motion } from "framer-motion";
import Header from "../components/Header";
import Movie from "../components/Movie";
import styles from "./movie.module.css";
import angeles from "../assets/LAcrop.001.png";
import Genres from "../components/Genres";
import useMovieSearch from "../hooks/useMovieSearch";
import InputSearch from "../components/InputSearch";
const Search = () => {
  const findMovie = useMovieSearch();

  return (
    <div className=" ">
      <Header />
      <InputSearch findMovie={findMovie} />

      {findMovie.image && (
        <div className="flex justify-center align-middle mt-10">
          <img
            src={angeles}
            // className="w-3/4"
          />
        </div>
      )}

      <div
        className={`sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 ${styles.movie}`}
      >
        {findMovie.movieData.map((movie, index) => (
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
            <Genres movie={movie} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Search;
