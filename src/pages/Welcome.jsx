import poster3 from "../assets/‎poster.png";
import camera from "../assets/icons8-video-64.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div style={{ width: "100vw" }}>

      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
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
        <div className="flex justify-center align-middle">
          <div className="flex flex-col gap-1 ">
            <Link to="pag">
              <button
                className="bg-secondary w-40 h-8 btn-xs text-xs text-white ml-12"
                style={{ boxShadow: "1px 1px 1px black" }}
              >
                NOW SHOWING!!
              </button>
            </Link>

            <div className="flex ml-5">
              <img src={camera} className="w-10 ml-5 mb-2" />
              <h1
                className="btn btn-ghost normal-case text-4xl"
                style={{ color: "#e0d2fe " }}
              >
                cinerama
              </h1>
            </div>
            <div className="flex ">
              <h1 className="text-white text-xs -mt-2 ml-5">
                3250 Old Greensboro Road, Apaloosa, AL 35905
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Welcome;
