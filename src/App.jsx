import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import ListCourses from "../src/pages/ListCourses";
import Contact from "../src/pages/Contact";
import NotFound from "../src/pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<ListCourses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
