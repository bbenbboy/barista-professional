import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../style";
import { profile } from "../assets";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [eMail, setEMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <>
      <Navbar />

      <section
        className={`xl:px-[300px] md:px-[166px] sm:px-[50px] px-3  py-[20px] pt-36 md:pt-44 xl:pt-[150px]`}
      >
        <h2 className={`${styles.supHead} mb-[20px]`}>Contact Us</h2>
        <div className="flex flex-wrap items-center gap-5 pl-1 text-center rounded w-fit sm:justify-between sm:flex-row h-fit bg-dimBlack">
          <div className="w-[300px]  overflow-hidden ">
            <img
              src={profile}
              alt=""
              className="object-cover sm:h-[400px] sm:block hidden"
            />
          </div>
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="sm:pr-[50px] xl:pr-[20%] p-1"
            >
              <div className="flex flex-col w-[350px]">
                <div className="flex flex-col w-full mb-2 ">
                  <label className="mb-2 text-white text-start">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-auto p-1 border rounded sm:p-2"
                    placeholder="John"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="mb-2 text-white text-start">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="flex-1 w-auto p-1 border rounded sm:p-2"
                    placeholder="Doe"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <label className="text-white text-start">Email</label>
                <input
                  type="email"
                  className="p-2 mb-2 rounded"
                  placeholder="barista@email.com"
                  required
                  onChange={(e) => setEMail(e.target.value)}
                />
                <label className="text-white text-start">Phone Number</label>
                <input
                  type="number"
                  className="p-2 mb-2 rounded"
                  placeholder="+555 555 5555"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <div className="flex flex-row ">
                  <div className="flex flex-col w-full mb-2 mr-4">
                    <label className="text-white text-start">
                      Interested Course
                    </label>
                    <select
                      name=""
                      id=""
                      className="p-2 rounded"
                      onChange={(e) => setCourse(e.target.value)}
                    >
                      <option value="" className="text-gray-200">
                        None
                      </option>
                      <option value="">Basic Barista</option>
                      <option value="">Latte Art</option>
                      <option value="">Coffee Brewing</option>
                      <option value="">Coffee Roster</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full text-center text-white bg-orange h-[36px] rounded mt-[24px]"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="p-10 text-center text-white">
              <h3 className={`${styles.supHead} text-white text-bold mb-5`}>
                Thank you for contacting us {firstName}.
              </h3>
              <p className={` text-white text-[18px] w-[400px] font-anuphan`}>
                We will contact you within the business day as fast as we can.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
