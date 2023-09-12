/* eslint-disable react/prop-types */
import { createContext,useContext,useState } from "react";

const movieContext=createContext()

export const useMovieContext=()=>{
   return  useContext(movieContext)
}


export const MovieProvider = ({children})=>{

    const [selectedMovie,setSelectedMovie]= useState('');
    
    const resetContext = () => {
      return  setSelectedMovie(""); 
      };

    return (
        <movieContext.Provider value={{selectedMovie,setSelectedMovie, resetContext}}>
            {children}
        </movieContext.Provider>
    );

};

