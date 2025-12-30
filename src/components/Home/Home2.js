import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <span className="purple">Software Engineer</span> with over <b>3 years</b> of experience building
              scalable, production-ready web applications using the MERN stack, React, Next.js and Python.
              <br />
              <br />
              My focus areas include frontend optimization, backend integration, and test-driven development.
              I enjoy designing performant user experiences and reliable server-side systems.
              <br />
              <br />
              Technologies I work with:
              <i>
                <b className="purple"> JavaScript, React.js, Node.js, Express, MongoDB, Python</b>
              </i>
              <br />
              <br />
              I'm passionate about delivering high-quality software and collaborating with cross-functional teams to ship production features.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
