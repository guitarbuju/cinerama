/* eslint-disable react/prop-types */
import watch from '../assets/watch.png'
import Genres from './Genres'
import ticket from '../assets/icons8-ticket-48.png'


const Movie = ({movie}) => {
  return (
    <div >
        <div
          key={movie.id}
          className=" flex rounded-lg p-2"
         
        >
          <div className="rounded">
            <img
              className="w-40 h-60"
              src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className="flex flex-col p-2 justify-center items-center ">
            <h1 className=" transform -translate-y-1/2 text-white font-sans text-lg">
              {movie.title}
            </h1>
            <div className="overflow-hidden">
              <p className=" text-white text-sm text-left p-5 w-80 h-40 justify-center align-middle antialiased ">
                {movie.overview}
              </p>
              
              
            </div>

            <div className="">
              <Genres genres={movie.genre_ids} />
              <div className='flex justify-center align-middle gap-1 mr-10'>
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