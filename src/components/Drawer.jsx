/* eslint-disable react/prop-types */
import popcorn3 from "../assets/popcorn3.png";
import ChosenSeats from "../components/ChosenSeats";
import ShowSeat from "../assets/seat.png";
import { TimeShow } from "./TimeShow";
import { usePopcornStore } from "../../store";
import TotalDue from "./TotalDue";


const Drawer = ({ selectedSeats }) => {
  const purchasePop = usePopcornStore((state) => state.popcorn);
  console.log("aqui", purchasePop);

  const TotalTickets = selectedSeats.length * 10;



  return (
    <div className="drawer drawer-end z-50 h-full">
    
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul
          className="menu p-4 w-80 min-h-full text-white flex flex-row gap-1"
          style={{
            backgroundImage: "linear-gradient(315deg, #7a7adb 0%, #170e13 74%)",
          }}
        >
          <div className="flex flex-col">
            <h1>Your chosen seats are:</h1>
            <div className="flex flex-row justify-center align-middle">
              {selectedSeats &&
                selectedSeats.map((seat, index) => (
                  <ChosenSeats key={index} seat={seat} ShowSeat={ShowSeat} />
                ))}
            </div>
            <TimeShow />
          
              <button
                className=" mt-4 btn-xs  ml-10 w-60 mb-8"
                onClick={() => window.my_modal_1.showModal()}
              >
                <img src={popcorn3} />
              </button>
            

            
              <div className="flex flex-col gap-1 ">
                <TotalDue
                  TotalTickets={TotalTickets}
                  purchasePop={purchasePop}
                />
                
              </div>
            
          </div>
        </ul>
      </div>
     
    </div>
  );
};

export default Drawer;
