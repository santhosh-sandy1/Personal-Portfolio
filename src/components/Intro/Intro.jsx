import React, { useContext } from "react";
import "./Intro.css";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/twitter.png";
import devwave from '../../img/dev wave.png';
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Santhosh</span>
          <span>
          Software Engineer with high level of experience in Database designing, development, 
          operation, and maintenance of a software system.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Let's Talk</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href='https://linkedin.com/in/santhosh-s-senthil'><img src={LinkedIn} alt=" " /> </a>
         <a href="https://www.instagram.com/santhosh.s_/"> <img src={Instagram} alt="" /> </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={devwave} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "28%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Software" text2="Engineer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div">
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
