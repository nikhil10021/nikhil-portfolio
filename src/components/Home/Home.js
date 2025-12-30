import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import profilePhoto from "../../Assets/nikhil.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NIKHIL RAJ GUPTA </strong>
              </h1>

              <p style={{ paddingTop: 10, paddingBottom: 10, fontSize: "1.05em", textAlign: "left" }}>
                Software Engineer building scalable, high-performance web applications
                <br/><br/>
                🟢 Open for Opportunities
              </p>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={profilePhoto}
                alt="Nikhil Raj Gupta"
                className="img-fluid profile-photo"
              />

            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://linkedin.com/in/nikhilgupta31/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
              <p style={{ color: "#bfbfbf", marginTop: 12 }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:nikhilrajgupta195@gmail.com" style={{ color: "#c084f5" }}>
                  nikhilrajgupta195@gmail.com
                </a>
                {"  "}•{"  "}
                <a href="https://linkedin.com/in/nikhilgupta31/" target="_blank" rel="noreferrer" style={{ color: "#c084f5" }}>
                  LinkedIn
                </a>
              </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
