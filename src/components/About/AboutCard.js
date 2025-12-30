import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Software Engineer with <span className="purple">3+ years</span> of experience developing scalable,
            production-ready web applications using the MERN stack, React, Next.js, and Python.
            Strong expertise in frontend optimization, backend integration, and test-driven development.
            Proven ability to deliver reliable solutions across diverse domains while collaborating effectively in Agile teams.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative, inspired and updated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Frontend: React.js, JavaScript, Redux, TypeScript
            </li>
            <li className="about-activity">
              <ImPointRight /> Backend: Node.js, Express.js, REST APIs, Python
            </li>
            <li className="about-activity">
              <ImPointRight /> Database & Tools: MongoDB, MySQL, Docker, AWS, CI/CD
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
