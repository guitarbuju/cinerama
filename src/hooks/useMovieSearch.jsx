import axios from "axios";
import { useState } from "react";



const useMovieSearch = () => {

    const [movieSearch, setMovieSearch] = useState("");
    const [movieData, setMovieData] = useState([]);
    const [ image, setImage ]= useState(true)
  
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7c93a29133df64c786e0131de31c666c&query=${movieSearch}&include_adult=false&language=en-US&page=1`;
  
    const SearchMovie = async () => {
      try {
        const fetchedMovie = await axios.get(url);
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
    }
  
    
  
    return {movieData, setMovieData,movieSearch,setMovieSearch, image, setImage,SearchMovie, ClearSearch  }
      
        
    };


export default useMovieSearch