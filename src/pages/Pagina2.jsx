import { useMovieContext } from "../../Context";
import Popcorn from "../components/Popcorn";
import Movie from "../components/Movie";
import ShowRoom from "../components/ShowRoom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Drawer from '../components/Drawer'
import Modal from '../components/Modal'
import { useModalStore } from "../../store"
import Spinner from '../components/Spinner'

const Pagina2 = () => {
  const { selectedMovie } = useMovieContext();
  const movie = selectedMovie;

  const [selectedSeats, setSelectedSeats] = useState([]);
 
  const handleSelectedSeats = (seat) => {
    const uniqueSeatsSet = new Set(selectedSeats);
    uniqueSeatsSet.add(seat);
    setSelectedSeats([...uniqueSeatsSet]);
  };
  
  

  useEffect(() => {
    console.log(selectedSeats);
  }, [selectedSeats]);
  

  const choose=true

  const { showFinalModal } = useModalStore();
  console.log(showFinalModal)
  return (
    <div>
     
      <Header choose={choose} />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
      {showFinalModal && <Spinner/>}
        <div className="md:col-span-1">
          <Movie movie={movie} />
        </div>
        <div className="md:col-span-1 md:row-span-2 ml-20">
          <ShowRoom
          
            handleSelectedSeats={handleSelectedSeats}
            selectedSeats={selectedSeats}
            
          />
        </div>
        <div className="md:col-span-1">
          <Popcorn />
        </div>
      </div>
      <Drawer selectedSeats={selectedSeats}/>
      <Modal/>
    
    </div>
  );
};

export default Pagina2;
