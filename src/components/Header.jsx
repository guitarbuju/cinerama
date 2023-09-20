/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import camera from "../assets/icons8-video-64.png";
import { motion } from "framer-motion";

const Header = ({ choose }) => {
  const styles = {
    fontFamily: "Kaushan Script",
    fontSize: "60px",
  };
  const styles2 = {
    fontFamily: "Kaushan Script",
    fontSize: "50px",
    color: "white",
    textShadow: "1px 1px 1px gray, 3px 3px 3px black",
  };

  const NavClass = {
    nav1: "navbar   w-12/12 -mt-20 text-primary-content rounded-lg z-50 flex justify-between",
    nav2: "navbar w-full -mt-20 text-primary-content rounded-lg z-50 flex justify-between",
  };

  const blinkVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <header className={choose ? NavClass.nav1 : NavClass.nav2}>
        <div className="flex justify-start gap-1">
          <img src={camera} className="w-10 ml-5 mb-2" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            cinerama
          </Link>
        </div>
        <div className="flex justify-center gap-4 text-gray-300">
          <Link to='/about'><button className="ghost">About</button></Link>
          <Link to='/contact'><button className="ghost">Contact</button></Link>
          <a>Locations</a>
          <Link to='/pag' className="btn btn-secondary btn-xs "><motion.button
            initial="hidden"
              animate="visible"
              variants={blinkVariants}
              transition={{ duration: 1, repeat: Infinity }}
          
          >NOW SHOWING!!</motion.button></Link>
        </div>
        <div className="flex flex-col">
           <h1 style={styles}>Welcome Back to the Movies...</h1> 
         
          {choose && (
            <motion.h5
              style={styles2}
              className="-mt-10 z-10"
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
