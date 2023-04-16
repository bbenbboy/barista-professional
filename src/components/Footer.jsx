import styles from "../style";
import { Link } from "react-router-dom";
import { logoFooter } from "../assets";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} ${styles.paddingY} bg-dimBlack`}>
      <div className="flex items-center justify-between">
        <div>
          <img src={logoFooter} alt="barista-academy" />
        </div>
        <div className="w-[300px]">
          <p className={`${styles.footer} text-white`}>
            CentralWorld, 5Floor, 4, 5 Ratchadamri Rd, Khwaeng Pathum Wan, Khet
            Pathum Wan, Krung Thep Maha Nakhon 10330
          </p>
          <br />
          <p className={`${styles.footer} text-[16px] text-white`}>
            +669-999-9999
          </p>
        </div>
        <div>
          <ul>
            <li className="ml-[50px]  pb-6">
              <a
                href="#hero"
                className={`font-[300] font-anuphan cursor-pointer text-white`}
              >
                Home
              </a>
            </li>
            <li className="ml-[50px]  pb-6">
              <a
                href="#courses"
                className={`font-[300] font-anuphan cursor-pointer text-white`}
              >
                Courses
              </a>
            </li>
            <li className="ml-[50px] pb-6">
              <Link
                className={`font-[300] font-anuphan cursor-pointer text-white`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      <p className="text-center text-white">
        @ 2023 Copyright Ratchapon Ngamdan
      </p>
    </footer>
  );
};

export default Footer;
