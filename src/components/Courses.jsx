import React from "react";
import { Link } from "react-router-dom";
import { course1, course2, course3 } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stagVariants = {
  initial: {
    y: 50,
    x: 50,
  },
  animate: {
    y: 0,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Courses = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} `} id="courses">
      <motion.div
        className="w-full"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex items-end justify-between w-full mb-[40px]"
          variants={stagVariants}
        >
          <h3 className={styles.supHead}>Popular Courses</h3>
          <Link to="/courses">
            <p className="text-gray-400 ">More</p>
          </Link>
        </motion.div>
        <div className="relative flex flex-col w-full gap-2 sm:flex-row">
          <Link to="/courses">
            <motion.div
              className="relative cursor-pointer cardHover"
              variants={stagVariants}
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
          <div
            className="relative flex flex-col justify-between gap-2 sm:gap-0"
            variants={stagVariants}
          >
            <Link to="/courses">
              <motion.div
                className="relative cursor-pointer cardHover"
                variants={stagVariants}
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
                className="relative cursor-pointer cardHover"
                variants={stagVariants}
              >
                <img
                  src={course3}
                  alt=""
                  className="object-contain w-full h-auto rounded-md z-2 sm:grayscale"
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
        </div>
      </motion.div>
    </section>
  );
};

export default Courses;
