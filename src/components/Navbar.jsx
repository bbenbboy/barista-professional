import { logo, close, menu } from "../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../style";
import { useState } from "react";
import { animate } from "framer-motion";
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

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.header
      variants={variants}
      initial="initial"
      animate="animate"
      className={`${styles.paddingX} ${styles.paddingY} fixed z-20 bg-white w-full `}
    >
      <nav className="flex items-center justify-between max-w-[100vw] overflow-hidden over">
        <motion.div variants={stagVariants}>
          <Link className="cursor-pointer" to="/">
            <img
              src={logo}
              alt="barista-academy"
              className="h-[50px] sm:h-auto"
            />
          </Link>
        </motion.div>
        <div>
          <ul className="relative justify-between hidden sm:flex">
            <motion.li variants={stagVariants}>
              <Link
                to="/"
                className={`ml-[50px] font-[500] font-anuphan cursor-pointer ${styles.navHover}`}
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={stagVariants}>
              <Link
                to="/courses"
                className={`ml-[50px] relative font-[500] font-anuphan cursor-pointer ${styles.navHover}`}
              >
                Courses
              </Link>
            </motion.li>
            <motion.li variants={stagVariants} className="ml-[50px]">
              <Link
                className={`font-[500] font-anuphan cursor-pointer ${styles.navHover}`}
                to="/contact"
              >
                Contact
              </Link>
            </motion.li>
          </ul>
          <div className="flex items-center justify-end flex-1 sm:hidden">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] text-black "
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 absolute top-14 right-0 mx-2  min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="flex flex-col items-center justify-center flex-1 p-4 list-none bg-white rounded-xl">
                <li>
                  <Link
                    to="/"
                    className={` mb-2 font-[500] font-anuphan cursor-pointer ${styles.navHover}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/courses"
                    className={` mb-2 relative font-[500] font-anuphan cursor-pointer ${styles.navHover}`}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className={`mb-2 font-[500] font-anuphan cursor-pointer ${styles.navHover}`}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
