import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import camera from '../assets/icons8-video-64.png'
import { useTimeShowStore, usePopcornStore } from "../../store";
import { useMovieContext } from "../../Context";
import { useNavigate } from "react-router-dom";



const Spinner = () => {
 
  const [showSpinner, setShowSpinner] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  

  
  const clearTimeShow = useTimeShowStore.getState().clearTimeShow;
  const clearCombo = usePopcornStore.getState().clearPopcorn;

  const resetSeats = useMovieContext();
  const navigate = useNavigate();

  const handleReset = () => {
    clearTimeShow();
    clearCombo();
    resetSeats.resetContext();
      navigate('/')
   
  };

  return (
    <div className="flex justify-center items-center mt-4 mb-4 h-96 ml-50">
      <div
        className="card w-96 shadow-xl"
        style={{
          backgroundImage: "linear-gradient(315deg, #7a7adb 0%, #170e13 74%)",
        }}
      >
        <div className="flex gap-1 justify-center align-middle mt-4">
          <img src={camera} className="w-10 ml-5 mb-2" />
          <h1 className="btn btn-ghost normal-case text-xl text-primary-content">
            cinerama
          </h1>
        </div>
  
        <div className="card-body">
          <div className="flex justify-center">
            {showSpinner ? (
              <span className="loading loading-spinner loading-lg bg-yellow-400"></span>
            ) : (
              <div>
                <h2 className="card-title text-white mb-2">
                  ¡¡THANK YOU FOR YOUR PURCHASE!!
                </h2>
                <div className="card-actions justify-center">
                  <Link to="/">
                    <button
                      className="btn btn-wide btn-secondary"
                      onClick={handleReset}
                    >
                      Home
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Spinner;
