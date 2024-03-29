import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { listCourse } from "../constants";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const stagVariants = {
  hidden: { opacity: 0, x: 50, y: 50 },
  show: { opacity: 1, x: 0, y: 0 },
};

const ListCourses = () => {
  return (
    <>
      <Navbar />
      <section
        id="list_Courses"
        className={`${styles.paddingX} ${styles.paddingY} py-[20px] pt-36 md:pt-44 `}
      >
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <h3 className={`${styles.supHead} mb-[20px]`}>Our Courses</h3>
          {listCourse.map((course) => (
            <motion.div
              variants={stagVariants}
              initial="hidden"
              whileInView="show"
              className="flex justify-between flex-col sm:flex-row h-fit mb-[40px] corseCard gap-[40px] max-w-[400px] sm:max-w-full overflow-hidden"
              key={course.id}
            >
              <div className="w-auto h-full ">
                <img
                  src={course.img}
                  alt={course.title}
                  className="rounded object-cover h-[300px] w-[250px]"
                />
              </div>
              <div className="flex flex-col w-[350px] sm:w-full max-w-[400px] sm:max-w-full xl:w-[850px]  ">
                <h4 className={`${styles.supHead}  overflow-hidden `}>
                  {course.title}
                </h4>
                <p className={`${styles.paragraph}  sm:w-full`}>
                  {course.content1}
                  <br />
                  <br />
                  {course.content2}
                </p>
                <br />
                <p className={`${styles.paragraph} w-[350px]`}>
                  {course.date}Program /{" "}
                  <span className="font-bold text-[33px]">${course.price}</span>
                </p>
                <br />
                <Link to="/contact" className="max-w-[350px]">
                  <button className="rounded-md bg-white px-[20px] py-[10px] text-orange cursor-pointer w-[200px] h-fit border ease-in duration-100 button ">
                    Contact
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default ListCourses;
