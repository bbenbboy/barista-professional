import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../assets";
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

const Hero = () => {
  return (
    <section
      className={`${styles.paddingX} py-[20px] pt-36 md:pt-44 `}
      id="hero"
    >
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center justify-between sm:gap-6 gap-1 h-[300px] sm:mb-[60px] "
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="w-[90%]" variants={stagVariants}>
          <h1 className={`${styles.heading} mb-2 `}>
            The Road <br className="hidden sm:block" /> into the coffee WORLD!
          </h1>
        </motion.div>
        <motion.div className="w-full" variants={stagVariants}>
          <p className={`${styles.paragraph} mb-5`}>
            Learn the art of coffee-making at our barista academy. Our courses
            provide international certification with true Italian and European
            standards. From espresso-based beverages to latte art and coffee
            bean selection, our program covers it all. Start your coffee career
            today and become a skilled professional in the industry with our
            top-notch education
          </p>
          <Link to="/courses">
            <button className="rounded-md bg-orange px-[20px] py-[10px] text-white cursor-pointer w-[200px] h-fit border ease-in duration-100 button">
              View Course
            </button>
          </Link>
        </motion.div>
      </motion.div>
      <div
        className="w-full mt-[40px]  pt-[6rem] sm:pt-16 md:pt-0 "
        variants={stagVariants}
      >
        <img
          src={hero}
          alt="hero"
          className="object-contain w-full rounded-md"
        />
      </div>
    </section>
  );
};

export default Hero;
