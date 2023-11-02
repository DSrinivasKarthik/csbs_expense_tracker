/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";
import "./style.css";
import photo from './photo.jpg';
import { HelmetProvider } from "react-helmet-async";

function Services() {
  let message = `Hey there! I'm the guy behind this college project. \n I'm all about creativity, learning, and having a great time while working on cool stuff. Join me on this journey`;

  return (
    <HelmetProvider>
    <section className="section-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Meet The Dev</h2>
            <p className="section-subtitle">{message}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="team-item">
              <img
                src={photo}
                className="team-img"
                alt="pic"
              />
              <h3>D Srinivas Karthik</h3>
              <div className="team-info">
                <p>Software Engineer</p>
              </div>
              <p>
                A dedicated lifelong learner, always seeking new horizons to explore and apply innovative concepts.
              </p>
              
              <ul className="team-icon">
                {socialprofils.github && (
                  <li>
                    <a href={socialprofils.github}>
                      <FaGithub />
                    </a>
                  </li>
                )}
                {socialprofils.linkedin && (
                  <li>
                    <a href={socialprofils.linkedin}>
                      <FaLinkedin />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </HelmetProvider>
  );
}

export default Services;
