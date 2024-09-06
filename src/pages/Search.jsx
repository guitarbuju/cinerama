import { motion } from "framer-motion";
import SelectMovieButton from "../components/SelectMovieButton";
import Header from "../components/Header";
import Movie from "../components/Movie";
import axios from "axios";
import { useState } from "react";
import styles from "./movie.module.css";

const Search = () => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieData, setMovieData] = useState([]);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=7c93a29133df64c786e0131de31c666c&query=${movieSearch}&include_adult=false&language=en-US&page=1`;

  const SearchMovie = async () => {
    try {
      const fetchedMovie = await axios.get(url);
      const response = fetchedMovie.data; 
      setMovieData(response.results || response); 
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };
  const ClearSearch = () => {
    setMovieSearch(""); 
    setMovieData([]);
      
  };

  return (
    <div className="mt-10 ">
      <Header />
      <div className="flex flex-wrap justify-center gap-2 align-middle">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={movieSearch}
            onChange={(e) => setMovieSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        
        <div className="flex gap-1">
          <button className="btn btn-secondary" onClick={() => SearchMovie()}>
          {" "}
          SEARCH
        </button>
        <button className="btn btn-warning" onClick={()=>ClearSearch()}>
          {" "}
          CLEAR
        </button>  
        </div>
        
      </div>

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

            <div className="mb-8 h-10">
              <SelectMovieButton movie={movie} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Search;
