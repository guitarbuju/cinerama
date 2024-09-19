/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import camera from "../assets/icons8-video-64.png";
import { motion } from "framer-motion";

const Header = ({ choose }) => {
  const styles2 = {
    fontFamily: "Kaushan Script",
    color: "white",
    textShadow: "1px 1px 1px gray, 3px 3px 3px black",
  };

  const blinkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <header className="flex-col  w-full text-primary-content rounded-lg z-50 sm:flex sm:justify-between mt-10">
        <div className="flex flex-col gap-1 sm:flex justify-center align-middle">
          <div className="flex justify-center align-middle gap-4 text-gray-300 sm:w-full">
            <div className="flex justify-center align-middle">
            <Link to="/">
              <img src={camera} className="w-8 h-8  " />
              </Link>
            </div>
            <div  className="flex justify-center align-middle gap-4 text-gray-300 sm:w-[300px] mt-1">
              <Link to="/pag">
                <button className="ghost">Billboard</button>
              </Link>
              <Link to="/about">
                <button className="ghost">About</button>
              </Link>
              <Link to="/contact">
                <button className="ghost">Contact</button>
              </Link>
              <Link to="/search">
                <button className="ghost">Search</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          {choose && (
            <motion.h5
              style={styles2}
              className=" z-10 sm:w-full text-2xl"
              initial="hidden"
              animate="visible"
              variants={blinkVariants}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              1.Choose your seats NOW...
            </motion.h5>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
