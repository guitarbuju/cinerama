/* eslint-disable react/prop-types */


import { useMovieContext } from "../../Context";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import SelectMovieButton from "../components/SelectMovieButton";
import { motion } from "framer-motion";
import { useNavigate} from "react-router-dom";
import Header from "../components/Header";
import styles from './movie.module.css'

const Pagina = () => {
  const [movieData, setMovieData] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    const cargarPeliculas = async () => {
      try {
        const respuesta = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=7c93a29133df64c786e0131de31c666c&language=esp-MX&page=1"
        );
        const results = respuesta.data.results;
        console.log(results);
        setMovieData(results);
      } catch (error) {
        console.log(error);
      }
    };

    cargarPeliculas();
  }, []);

  const { setSelectedMovie, selectedMovie } = useMovieContext();

  const handleGetTicketsClick = (movie) => {
    setSelectedMovie(movie);
    navigate("/pag2");
  };
  console.log(selectedMovie);

  
  
  return (
    <div className="mt-10" >
      <Header/>
      <div className={`sm:grid grid-cols-3 gap-4 mt-10 ${styles.movie}`}>
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
              <SelectMovieButton 
              handleGetTicketsClick={handleGetTicketsClick}
              movie={movie}
            />
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pagina;
