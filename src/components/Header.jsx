/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import camera from "../assets/icons8-video-64.png";
import { motion } from "framer-motion";

const Header = ({ choose }) => {
  const styles = {
    fontFamily: "Kaushan Script",
  };
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
      <header className= "-mt-10 flex-col navbar sm:w-full text-primary-content rounded-lg z-50 sm:flex sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex justify-center align-middle">
          <div className="flex justify-center align-middle">
            <img src={camera} className="w-10 ml-5 mb-2" />
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              cinerama
            </Link>
          </div>
          <div className="flex justify-center gap-4 text-gray-300 sm:w-full">
            <Link to="/about">
              <button className="ghost">About</button>
            </Link>
            <Link to="/contact">
              <button className="ghost">Contact</button>
            </Link>
            <a>Locations</a>
          </div>

          <Link to="/pag" className="btn btn-secondary btn-xs ">
            <motion.button
              initial="hidden"
              animate="visible"
              variants={blinkVariants}
              transition={{ duration: 1, repeat: Infinity }}
            >
              NOW SHOWING!!
            </motion.button>
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row">
          <h1 className="text-2xl sm:w-full" style={styles}>
            Welcome Back to the Movies...
          </h1>

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
