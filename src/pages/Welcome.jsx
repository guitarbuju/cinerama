import poster3 from "../assets/‎poster.png";
// import camera from "../assets/icons8-video-64.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    document.body.classList.add("page-background");

   
    return () => {
      document.body.classList.remove("page-background");
    };
  }, []);

  return (
    <div className="flex-col items-center align-center">
<header>
<div className=" flex justify-start gap-4 text-gray-300 w-full">
          <Link to='/pag'>Now Playing</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/search'>Search</Link>
         
        </div>
</header>
      <motion.div
        className=" "
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 10, opacity: 1 }}
        transition={{
          duration: 2,
        }}
      >
        <img src={poster3} />
      </motion.div>

      <motion.div
        className="flex justify-end mr-20 -mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          delay: 0.8,
        }}
      >
       
      </motion.div>
    </div>
  );
};

export default Welcome;
