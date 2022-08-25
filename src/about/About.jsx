import React from "react";
import "./about.css";
import ME from "../assets/me-abouttt.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresh Graduate </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clinets</h5>
              <small>000 Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>05+ Completed</small>
            </article>
          </div>
          <p>
            Hi, I am a fresh graduate in Software engineering with development
            experience in designing User Interface (UI) applications and
            professional web applications using Node JS, React JS and Bootstrap.
            Experience in developing a web application using React JS, HTML5,
            and CSS3. Experience in using JavaScript Model View Controller (MVC)
            frameworks such as React JS with a good understanding of competing
            frameworks.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
