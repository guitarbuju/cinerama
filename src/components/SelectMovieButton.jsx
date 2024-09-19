/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'


const SelectMovieButton = ({handleGetTicketsClick,movie}) => {
  return (
    <div>
         <motion.button
                className="btn btn-primary btn-active btn-xs sm:btn-sm w-40 btn-bottom-0.5 sm:mt-2"
                whileHover={{
                  scale: 1,
                  boxShadow: "10px 10px 10px -2px rgba(0,0,0,0.8)   ",
                }}
                transition={{ duration: 0.1 }}
                onClick={() => handleGetTicketsClick(movie)}
              >
                Get Tickets
              </motion.button>
    </div>
  )
}

export default SelectMovieButton