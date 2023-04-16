import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../style";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <>
      <Navbar />
      <section
        className={`${styles.paddingX} ${styles.paddingY} py-[20px] pt-36 md:pt-44 `}
      >
        <div className="flex flex-col items-center w-full py-16 text-center px-26 h-fit bg-dimBlack">
          <h1 className={`${styles.heading} text-white`}>404</h1>
          <h3 className={`${styles.heading} text-white`}>
            Oops! Page Not Found
          </h3>
          <p className="w-[500px] text-white">
            Sorry, We couldn’t find the page that you are looking for please go
            back to the homepage.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
