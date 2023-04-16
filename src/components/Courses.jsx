import React from "react";
import { Link } from "react-router-dom";
import { course1, course2, course3 } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";

const Courses = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} `} id="courses">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-end justify-between w-full mb-[40px]"
        >
          <h3 className={styles.supHead}>Popular Courses</h3>
          <Link to="/courses">
            <p className="text-gray-400">More</p>
          </Link>
        </motion.div>
        <motion.div
          transition={{ duration: 1, delayChildren: 0.5 }}
          className="relative flex flex-col w-full gap-2 sm:flex-row"
        >
          <Link to="/courses">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative cursor-pointer cardHover"
            >
              <img
                src={course1}
                alt=""
                className="object-cover rounded-md z-1 sm:grayscale h-[200px] w-full sm:h-auto "
              />
              <div className="absolute sm:top-6 sm:left-4 top-1 left-2 sm:w-[200px]  sm:z-0 sm:opacity-0  duration-300  ">
                <h4 className={`${styles.cardSupHead}`}>Basic Barista</h4>
                <p className={`${styles.cardParagraph}`}>
                  Learn coffee-making, latte art, and espresso-based beverages,
                  all with true Italian and European standards.
                </p>
              </div>
            </motion.div>
          </Link>
          <div className="relative flex flex-col justify-between gap-2 sm:gap-0">
            <Link to="/courses">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative cursor-pointer cardHover"
              >
                <img
                  src={course2}
                  alt=""
                  className="object-contain w-full h-auto rounded-md z-2 sm:grayscale"
                />
                <div className="absolute sm:top-6 sm:left-4 top-1 left-2 sm:w-[200px] w-[200px] sm:z-0 sm:opacity-0  duration-300   ">
                  <h4 className={`${styles.cardSupHead}`}>Latte Art</h4>
                  <p className={`${styles.cardParagraph}`}>
                    Our hands-on latte art course teaches coffee enthusiasts how
                    to create stunning designs in their lattes.
                  </p>
                </div>
              </motion.div>
            </Link>
            <Link to="/courses">
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative cursor-pointer cardHover"
              >
                <img
                  src={course3}
                  alt=""
                  className="object-contain h-auto rounded-md z-2 sm:grayscale"
                />
                <div className="absolute sm:top-6 sm:left-4 top-1 left-2 sm:w-[200px] w-[200px] sm:z-0 sm:opacity-0  duration-300  ">
                  <h4 className={`${styles.cardSupHead}`}>Coffee Brewing</h4>
                  <p className={`${styles.cardParagraph}`}>
                    Master the art of brewing with our hands-on instruction and
                    take your coffee-making skills to the next level.
                  </p>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Courses;
