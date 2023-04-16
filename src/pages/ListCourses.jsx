import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../style";
import { Link } from "react-router-dom";
import { course1, latteart, roasted, brew } from "../assets";
import { motion } from "framer-motion";

const ListCourses = () => {
  return (
    <>
      <Navbar />
      <section
        id="list_Courses"
        className={`${styles.paddingX} ${styles.paddingY} py-[20px] pt-36 md:pt-44 `}
      >
        <motion.div transition={{ delayChildren: 1 }} className="w-full">
          <motion.h3
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`${styles.supHead} mb-[20px]`}
          >
            Our Courses
          </motion.h3>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-between flex-col sm:flex-row h-fit mb-[40px] corseCard gap-[40px] max-w-full overflow-hidden"
          >
            <div className="w-auto h-full">
              <img
                src={course1}
                alt="basic-barista"
                className="rounded object-cover h-[300px]"
              />
            </div>
            <div className="flex flex-col w-[550px] xl:w-[800px]">
              <h4
                className={`${styles.supHead} max-w-full overflow-hidden sm:w-full`}
              >
                Basic Barista
              </h4>
              <p
                className={`${styles.paragraph} w-[400px] max-w-full sm:w-full`}
              >
                Our barista academy offers a comprehensive coffee-making program
                that covers everything from the basics of coffee brewing to the
                intricacies of latte art. Our program is designed to provide
                students with a true Italian and European coffee education, with
                a focus on the artistry and craftsmanship that goes into
                creating the perfect cup of coffee.
                <br />
                <br />
                In our program, students will learn the fundamentals of
                espresso-based beverages, including shot pulling, milk frothing,
                and drink composition. They'll also explore the world of latte
                art, learning how to create beautiful designs using steamed
                milk. Our experienced instructors will guide students through
                the process, providing hands-on instruction and personalized
                feedback to help them hone their skills.
              </p>
              <br />
              <p className={styles.paragraph}>
                2 Days Program /{" "}
                <span className="font-bold text-[33px]">$229</span>
              </p>
              <br />
              <Link to="/contact">
                <button className="rounded-md bg-white px-[20px] py-[10px] text-orange cursor-pointer w-[200px] h-fit border ease-in duration-100 button">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-between flex-col sm:flex-row h-fit mb-[40px] corseCard gap-[40px]"
          >
            <div className="w-auto h-full">
              <img
                src={latteart}
                alt="basic-barista"
                className="rounded object-cover h-[300px] w-[250px] "
              />
            </div>
            <div className="flex flex-col w-[550px] xl:w-[800px]">
              <h4 className={`${styles.supHead} max-w-full`}>Latte Art</h4>
              <p
                className={`${styles.paragraph} w-[400px] max-w-full sm:w-full`}
              >
                Our latte art course is led by experienced baristas who are
                passionate about the art and craft of coffee-making. They will
                guide students through the process of creating latte art, from
                steaming the milk to pouring the perfect design. Students will
                learn the techniques for creating a range of designs, including
                hearts, rosettas, and tulips, as well as more complex designs
                such as swans and dragons.
                <br />
                <br />
                In addition to hands-on instruction, our latte art course also
                covers the science behind latte art, including the chemistry of
                milk and the role of temperature and texture in creating
                beautiful designs. Students will leave the course with a deep
                understanding of the art and science of latte art, as well as
                the skills needed to create stunning designs in their lattes.
              </p>
              <br />
              <p className={styles.paragraph}>
                1 Day Program /{" "}
                <span className="font-bold text-[33px]">$129</span>
              </p>
              <br />
              <Link to="/contact">
                <button className="rounded-md bg-white px-[20px] py-[10px] text-orange cursor-pointer w-[200px] h-fit border ease-in duration-100 button">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-between flex-col sm:flex-row h-fit mb-[40px] corseCard gap-[40px]"
          >
            <div className="w-auto h-full">
              <img
                src={brew}
                alt="basic-barista"
                className="rounded object-cover h-[300px] w-[250px]"
              />
            </div>
            <div className="flex flex-col w-[550px] xl:w-[800px]">
              <h4 className={`${styles.supHead} max-w-full`}>Coffee Brewing</h4>
              <p
                className={`${styles.paragraph} w-[400px] max-w-full sm:w-full`}
              >
                Our brewing course is led by experienced instructors who are
                passionate about the science and art of brewing coffee. They
                will guide students through the process of brewing coffee, from
                selecting the right beans to choosing the perfect brewing
                method. Students will learn about different brewing methods,
                such as pour-over, French press, and AeroPress, and gain a deep
                understanding of the science behind brewing coffee, including
                extraction, grind size, and water temperature.
                <br />
                <br />
                In addition to hands-on instruction, our brewing course also
                covers the history and culture of coffee, from its origins in
                Ethiopia to its role in modern-day society. Students will gain a
                deep appreciation for the art and science of coffee-making and
                leave the course with the skills and knowledge needed to create
                the perfect cup of coffee every time.
              </p>
              <br />
              <p className={styles.paragraph}>
                1 Days Program /{" "}
                <span className="font-bold text-[33px]">$179</span>
              </p>
              <br />
              <Link to="/contact">
                <button className="rounded-md bg-white px-[20px] py-[10px] text-orange cursor-pointer w-[200px] h-fit border ease-in duration-100 button">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-between flex-col sm:flex-row h-fit mb-[40px] corseCard gap-[40px]"
          >
            <div className="w-auto h-full">
              <img
                src={roasted}
                alt="basic-barista"
                className="rounded object-cover h-[300px] w-[250px]"
              />
            </div>
            <div className="flex flex-col w-[550px] xl:w-[800px]">
              <h4 className={`${styles.supHead} max-w-full`}>Coffee Roster</h4>
              <p
                className={`${styles.paragraph} w-[400px] max-w-full sm:w-full`}
              >
                Our coffee roasting course is designed to teach students the art
                and science of coffee roasting. Led by experienced roasters,
                this hands-on course covers everything from green coffee
                selection to roasting profiles and beyond.
                <br />
                <br />
                Students will learn about the different stages of coffee
                roasting, including drying, browning, and development, and gain
                a deep understanding of the chemical reactions that occur during
                the roasting process. They will also learn how to calibrate and
                use roasting equipment, as well as how to analyze roasted coffee
                for flavor and quality.
              </p>
              <br />
              <p className={styles.paragraph}>
                3 Days Program /{" "}
                <span className="font-bold text-[33px]">$549</span>
              </p>
              <br />
              <Link to="/contact">
                <button className="rounded-md bg-white px-[20px] py-[10px] text-orange cursor-pointer w-[200px] h-fit border ease-in duration-100 button">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default ListCourses;
