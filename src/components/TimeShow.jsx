
import watch from "../assets/watch.png";
import {useTimeShowStore} from '../../store'
import { motion } from 'framer-motion'
export const TimeShow = () => {

  
  const stateTimeShow=useTimeShowStore(((state)=> state.setTimeShow))
  const realTimeShow=useTimeShowStore(((state)=> state.timeShow))

  const handleTimeClick = (time) => {
   
    stateTimeShow(time)
    
  };

  
    const blinkVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    
  }

  return (
    <div>
    {!realTimeShow && <motion.h1
    initial="hidden"
      animate="visible"
      variants={blinkVariants}
      transition={{ duration: 0.5, repeat: Infinity }}
    > 2. Choose Show Time NOW!!!!</motion.h1>}
      
      <div className="mt-2">
        <p className="flex justify-center align-middle gap-1">
          <img src={watch} style={{ width: "35px", opacity: 0.8 }} />
          <label>
            <input
              type="radio"
              name="time"
              onChange={() => handleTimeClick("15-17")}
              className="hidden"
            />
            <span
              className={`badge badge-secondary text-xs ${
                realTimeShow === "15-17" ? "badge badge-warning" : ""
              }`}
            >
              15-17
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="time"
              className="hidden"
              onChange={() => handleTimeClick("17-19")}
            />
            <span
              className={`badge badge-secondary text-xs ${
                realTimeShow === "17-19" ? "badge badge-warning"  : ""
              }`}
            >
              17-19
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="time"
              className="hidden"
              onChange={() => handleTimeClick("19-21")}
            />
            <span
              className={`badge badge-secondary text-xs ${
                realTimeShow === "19-21" ? "badge badge-warning" : ""
              }`}
            >
              19-21
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="time"
              className="hidden"
              onChange={() => handleTimeClick("21-23")}
            />
            <span
              className={`badge badge-secondary text-xs ${
                realTimeShow === "21-23" ? "badge badge-warning"  : ""
              }`}
            >
              21-23
            </span>
          </label>
        </p>
      </div>

      <div>
        {realTimeShow && (
          <h1 className="mt-2">Your Show Time is: {realTimeShow}</h1>
        )}
        
         
        
      </div>
    </div>
  );
};
