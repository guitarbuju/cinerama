/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { pageSelector } from "../lib/pageSelector";

const {nextPage, prevPage}=pageSelector();

const Pager = ({  length, setActualPage, actualPage }) => {
  const buttons = Array.from({ length: length });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="flex flex-col ">
      <div className="mt-8 flex justify-center align-middle gap-2">
        <motion.button
         whileHover={{
              scale: 1.05,
              boxShadow: "17px 8px 20px -4px rgba(0,0,0,0.8)",
            }}
          onClick={() => {
            nextPage();
            scrollToTop(); // Scroll to top on next page
          }}
          className="btn btn-warning btn-active btn-xs h-10 w-20 btn-bottom-0.5 "
        >
          Next
        </motion.button>
        <motion.button
         whileHover={{
              scale: 1.05,
              boxShadow: "17px 8px 20px -4px rgba(0,0,0,0.8)",
            }}
          onClick={() => {
            prevPage();
            scrollToTop(); // Scroll to top on next page
          }}
          className="btn btn-secondary btn-active btn-xs  h-10 w-20 btn-bottom-0.5 "
        >
          Prev
        </motion.button>
      </div>
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {buttons.map((button, index) => (
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "17px 8px 20px -4px rgba(0,0,0,0.8)",
            }}
            key={index + 1}
            className={ actualPage === index + 1 ? "btn btn-warning btn-active btn-xs w-10 h-10 btn-bottom-0.5 "
            : "btn btn-primary btn-active btn-xs w-10 h-10 btn-bottom-0.5 "}
            onClick={() => {
              setActualPage(index + 1);
              scrollToTop();
            }}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Pager;
