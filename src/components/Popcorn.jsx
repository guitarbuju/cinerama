import { useState } from "react";
import popcorn2 from "../assets/‎popcorn2.png";
import { AnimatePresence, motion } from "framer-motion";

const Popcorn = () => {
  const [rotate, setRotate] = useState(0);
  const onAnimationComplete = () => {
    setRotate(0);
  };
  return (
    <div className="mt-1">
      <AnimatePresence>
        <motion.div
          style={{ width: "280px" }}
          initial={{ y: -1000, opacity: 0, rotate: 360 }}
          animate={{ y: 0, opacity: 1, width: 280, rotate: rotate }}
          exit={{ y: 1000, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            duration: 3,
            delay: 0.3,
          }}
          onAnimationComplete={onAnimationComplete}
        >
          <img src={popcorn2} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Popcorn;
