/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'


const SelectMovieButton = ({handleGetTicketsClick,movie}) => {
  return (
    <div>
         <motion.button
                className="btn btn-primary btn-active btn-xs w-40 btn-bottom-0.5 mb-4 ml-40"
                whileHover={{
                  scale: 1.2,
                  boxShadow: "17px 8px 20px -4px rgba(0,0,0,0.8)",
                 
                }}
                onClick={() => handleGetTicketsClick(movie)}
              >
                Get Tickets
              </motion.button>
    </div>
  )
}

export default SelectMovieButton