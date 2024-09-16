import { useMovieContext } from "../../Context";
import Movie from "../components/Movie";
import ShowRoom from "../components/ShowRoom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Modal from "../components/Modal";
import { useModalStore } from "../../store";
import Spinner from "../components/Spinner";

import Genres from "../components/Genres";
import Times from "../components/Times";

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

  const choose = true;

  const { showFinalModal } = useModalStore();
  console.log(showFinalModal);
  return (
    <div>
      <Header choose={choose} />
      <div className="grid grid-cols-1 sm:flex justify-center align-middle mt-6">
        {showFinalModal && <Spinner />}
        <div className="sm:col-span-1 mb-2 w-4/4 ">
          <Movie movie={movie} />
          <Genres movie={movie} />
          <Times />
        </div>
        <div className="flex-col items-center justify-center">
          <ShowRoom
            handleSelectedSeats={handleSelectedSeats}
            selectedSeats={selectedSeats}
          />
        </div>
        {/* <div className="md:col-span-1">
          <Popcorn />
        </div> */}
      </div>
      <Drawer selectedSeats={selectedSeats} />
      <Modal />
    </div>
  );
};

export default Pagina2;
