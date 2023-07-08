import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>santhosh.senthil0910@gmail.com</span>
        <div className="f-icons">
          <Insta color="teal" size={"3rem"} />
          <Facebook color="teal" size={"3rem"} />
          <Gitub color="teal" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
