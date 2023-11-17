import React, { useState } from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me2.png";
import HeaderSocials from "./HeaderSocials";
import Greet from "./greet";

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Soumajit Das</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div
          className="me"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && <Greet />}
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
