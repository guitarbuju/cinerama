/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ChosenSeats = ({ seat, ShowSeat }) => {
  return (
    <motion.div className="flex flex-col p-1 "
          initial={{  opacity: 0 }}
          animate={{  opacity: 1}}
          exit={{  scale:1 }}
          >
      <span className=" text-white text-xs absolute mt-1 ml-1 z-1 [text-shadow:_0_2px_0_rgb(0_0_0_/_80%)]">
        {seat}
      </span>
      <img src={ShowSeat} className="w-6 rounded-md mb-1" />
      
    </motion.div>
  );
};

export default ChosenSeats;
