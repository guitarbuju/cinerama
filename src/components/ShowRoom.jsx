/* eslint-disable react/prop-types */
import ShowSeat from "../assets/seat.png";
import camera from "../assets/icons8-video-64.png"
import { motion } from "framer-motion";
import ChosenSeats from "./ChosenSeats";

const ShowRoom = ({ handleSelectedSeats, selectedSeats}) => {
  function generateArray(rows, columns) {
    const array = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const cell = `${String.fromCharCode(65 + row)}${col + 1}`;
        array.push(cell);
      }
    }

    return array;
  }

  const rows = 10;
  const columns = 10;

  const resultArray = generateArray(rows, columns);
     console.log("hey",selectedSeats);

  return (
    <div className=" grid grid-cols-10 grid-rows-5 sm:w-7/12">
      {resultArray.map((seat, id) => (
        <div
          key={id}
          className="flex justify-center align-middle flex-row rounded "
        >
          <motion.button
            className="flex flex-row"
            whileHover={{
              scale: 1.25,
              boxShadow: "17px 8px 20px -1px rgba(87,13,248)",
            }}
            onClick={() => handleSelectedSeats(seat)}>

            <span className=
            "text-white text-xs absolute mt-1 ml-1 z-1 [text-shadow:_0_2px_0_rgb(0_0_0_/_60%)]"
           >
              {seat}
            </span>
            <img src={!selectedSeats.includes(seat) ? ShowSeat : camera} className="w-10 sm:w-40 rounded-md mb-1" />
          </motion.button>
        </div>
      ))}
      <div className="flex flex-col">
        <div className="flex justify-center align-middle flex-col">
          <h1 className="text-white text-3xl mx-32 mt-2 ">Screen</h1>
          
        </div>
        <div className="flex w-80 justify-center align-middle ">
          {
            selectedSeats.map((seat, index) => (
              <ChosenSeats key={index} seat={seat}  ShowSeat={ShowSeat} />
            ))}
        </div>
        
        <div className="flex justify-center align-middle ml-40 mt-4">
        {selectedSeats.length > 0 ?  <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Continue</label>

        : ''}
       
         
    </div> 
      </div>
      
    </div>
  );
};

export default ShowRoom;
