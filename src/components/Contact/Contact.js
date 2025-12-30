import React from "react";
import "./Contact.css";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-heading">Contact Me</h1>

        <p className="contact-text">
          Feel free to reach out for job opportunities, collaborations or
          queries.
        </p>

        <div className="contact-details">
          <p>
            <strong>Name:</strong> Nikhil Raj Gupta
          </p>
          <p>
            <strong>Role:</strong> Software Full Stack Engineer
          </p>

          <p>
            <MdLocationOn /> Pune, India
          </p>

          <p>
            <MdEmail /> nikhilrajgupta195@gmail.com
          </p>

          <p>
            <FaLinkedinIn /> linkedin.com/in/nikhilgupta31
          </p>
            <br/> <br/>
          <p style={{ color: "#7CFF7A", marginTop: "15px" }}>
            🟢 Open for Opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
