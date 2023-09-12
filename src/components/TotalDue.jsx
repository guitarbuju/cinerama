/* eslint-disable react/prop-types */
import popicon from "../assets/popicon.png";
import ticket from "../assets/icons8-ticket-48.png";
import money from "../assets/icons8-money-48.png";
import Payment from "./Payment";

const TotalDue = ({ TotalTickets, purchasePop }) => {
    const TotalTotal = parseFloat(TotalTickets + purchasePop).toFixed(2)
  return (
    <div>
      <div className="flex flex-col justified gap-1 mt-20 ml-10">
        <div className="flex gap-1">
          {purchasePop ? (
            <div className="flex">
              <img className="w-5 h-5" src={popicon} />
              <h1 className="text-white ">
                Your Movie Combo Total is {purchasePop}$
              </h1>{" "}
            </div>
          ) : (
            <h1
              className="text-gray-300 "
              style={{ textShadow: "1px 1px 1px black" }}
            >
              No Movie Combo selected yet
            </h1>
          )}
        </div>
        <div className="flex gap-1">
          <img className="w-5" src={ticket} />
          <h1>Your Tickets Total is :{TotalTickets}$</h1>
        </div>
        <div className="flex gap-1">
          <img src={money} className="w-5" />{" "}
          <h1 className="underline text-yellow-400">
            Your Amount Due is: {TotalTotal}$
          </h1>
        </div>
      </div>
       <Payment TotalTotal={TotalTotal}/> 
    </div>
    
  );
};

export default TotalDue;
