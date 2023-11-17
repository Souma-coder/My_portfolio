import React from "react";
import "./about.css";
import aboutImg from "../../assets/about_img.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={aboutImg} alt="aboutImg" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>4 completed</small>
            </article>
          </div>
          <p>
            I am Soumajit, a fresher junior web devoloper. After become a BCA
            graduate, I have given my hardwork to programming. I know HTML5,
            CSS3 and JavaScipt very well. I worked on React JS projects. I am
            also working on Node.JS. I am finding some opportunity to upskill
            myself.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
