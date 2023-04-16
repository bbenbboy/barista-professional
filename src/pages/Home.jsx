import React from "react";
import Navbar from "../components/Navbar";
import styles from "../style";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Partner from "../components/Partner";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Partner />
      <Footer />
    </>
  );
};

export default Home;
