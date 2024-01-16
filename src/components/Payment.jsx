/* eslint-disable react/prop-types */
import { useTimeShowStore, usePopcornStore } from "../../store";
import { useMovieContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const Payment = ({ TotalTotal }) => {
  

  
  
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
    <div>
      <form className="w-full max-w-xs mt-10">
        <div className="md:flex md:items-center mb-4">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Card Holder
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Card Holder"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-4">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Card Number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="Text"
              placeholder="Your Card Number here"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-4">
          <div className="md:w-1/3"></div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            {" "}
            CVV{" "}
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="CVV"
            placeholder="CVV"
            type="Text"
          />
        </div>
        <div className="md:flex md:items-center mb-4">
          <div className="md:w-1/3"></div>
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Amount
          </label>
          <input
            className=" border-2 rounded w-50 py-2 px-4 text-gray-700 text-right"
            value={TotalTotal}
            readOnly
            type="number"
          />
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 flex gap-1 align-middle justify-center mb-4">
          <Link to='/pag3'>
          <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              
            >
              Pay
            </button>
          </Link>
            
            <button
              className="shadow bg-warning hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="Reset"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
