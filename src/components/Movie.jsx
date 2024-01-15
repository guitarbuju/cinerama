/* eslint-disable react/prop-types */
import watch from '../assets/watch.png'
import Genres from './Genres'
import ticket from '../assets/icons8-ticket-48.png'
import { motion } from 'framer-motion'


const Movie = ({movie}) => {
  return (
    <div >
        <div
          key={movie.id}
          className="flex-col justify-center items-center sm:flex-row rounded-lg p-4"
         
        >
          <motion.div className="rounded flex justify-center"
            initial={{ opacity: 0, scale: 0.1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            // exit={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 1, delay:0.5 }}
          >
            <img
              className="w-60 h-80 "
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </motion.div>
          <div className="sm:flex sm:flex-col p-2 justify-center items-center mt-2">
            <h1 className=" transform -translate-y-1/2 text-white font-sans text-lg">
              {movie.title}
            </h1>
            <div className="overflow-hidden -mt-4">
              <p className=" text-white text-sm text-left p-5 w-80 h-40 justify-center align-middle antialiased ">
                {movie.overview}
              </p>
              
              
            </div>

            <div className="">
              <Genres genres={movie.genre_ids} />
              <div className='flex justify-center align-middle flex-wrap gap-1 mr-10'>
              <img src={watch} style={{width:'35px',opacity:0.8}}/>
              <span className='badge badge-secondary text-xs '>15-17</span>
              <span className='badge badge-secondary text-xs'>17-19</span>
              <span className='badge badge-secondary text-xs'>19-21</span>
              <span className='badge badge-secondary text-xs'>21-23</span>
              <div className='flex gap-1'>
                <img src={ticket} className='w-5'/><span className='text-white text-xs'>10$</span>
              </div>
              </div>
               
             
              </div>
          </div>
        </div>
    </div>
  )
}

export default Movie