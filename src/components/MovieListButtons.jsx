/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const MovieListButtons = ({ setMovieList, setActualPage }) => {
  return (
    <div className="flex justify-center align-middle gap-2 text-sm">
      <motion.button
        className="ghost text-gray-300 btn-xs"
        //   style={{ boxShadow: "0.5px 0.5px 0.5px rgb(245, 208, 254)" }}
        onClick={() => {
          setMovieList("now_playing");
          setActualPage(1);
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "2px 2x 2px -1px rgb(134, 25, 143)",
        }}
      >NOW PLAYING
      </motion.button>
      <motion.button
        className="ghost text-gray-300 btn-xs"
        //   style={{ boxShadow: "8px 4px 10px  rgba(0,0,0,0.8)" }}
        onClick={() => {
          setMovieList("popular");
          setActualPage(1);
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "2px 2x 2px -1px rgb(134, 25, 143)",
        }}
      >
        POPULAR
      </motion.button>
      <motion.button
        className="ghost text-gray-300 btn-xs"
        //   style={{ boxShadow: "8px 4px 10px  rgba(0,0,0,0.8)" }}
        onClick={() => {
          setMovieList("top_rated"), setActualPage(1);
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "2px 2x 2px -1px rgb(134, 25, 143)",
        }}
      >
        TOP RATED
      </motion.button>
      <motion.button
        className="ghost text-gray-300 btn-xs"
        //   style={{ boxShadow: "8px 4px 10px  rgba(0,0,0,0.8)" }}
        onClick={() => {
          setMovieList("upcoming");
          setActualPage(1);
        }}
        whileHover={{
          scale: 1.01,
          boxShadow: "2px 2x 2px -1px rgb(134, 25, 143)",
        }}
      >
       UPCOMING
      </motion.button>
    </div>
  );
};

export default MovieListButtons;
