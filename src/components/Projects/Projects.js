import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Finance Manager Tracker"
              description="Web application to track income, expenses, budgets, and provide financial insights. Built with React.js, TypeScript and Node.js for a responsive, secure UX."
              ghLink={""}
              demoLink={""}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Video Streaming Platform"
              description="Video streaming platform with AI-based recommendations and video processing pipelines. Built using React.js, Tailwind CSS and Flask for backend services."
              ghLink={""}
              demoLink={""}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Health Management System"
              description="Enterprise-level health management web application developed at Urban Aura. Used for managing medical imaging data, patient workflows, and operational dashboards. Focused on performance, scalability, and secure data handling."
              ghLink={""}
              demoLink={""}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
