/* eslint-disable react/prop-types */


import { motion } from "framer-motion";
import not_available from '../assets/not available.jpg'


const Movie = ({ movie }) => {
  return (
    <div>
      <div
        key={movie.id}
        className="flex-col justify-center items-center sm:flex-row sm:justify-center sm:align-middle rounded-lg p-4 bg-stone-900"
      >
      <h1 className=" text-zinc-300 font-sans sm:text-md mb-2"
     style={{textShadow:"1px 1px 1px rgb(24, 24, 27)"}}
     >
            {movie.title}
          </h1>
        <motion.div
          className="rounded flex justify-center"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          // exit={{ opacity: 0, scale: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            className="w-60 h-70 md:w-60 md:h-70 rounded-lg"
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`: not_available}
            alt={movie.original_title}
          />
        </motion.div>
        <div className="sm:flex sm:flex-col p-2 justify-center items-center mt-2">
          
          <div className="overflow-hidden -mt-4 justify-center align-middle">
            <p className=" text-white text-sm text-left p-3 w-80  h-20 sm:w-44 md:w-52 lg:w-60 sm:text-xs justify-center align-middle antialiased ">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
