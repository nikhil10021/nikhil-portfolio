import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Resume file (served from public/)
const pdf = "/resume/NIKHIL_RESUME.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* ===== RESUME VIEWER ONLY ===== */}
      <Row className="resume d-flex justify-content-center">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Document file={pdf}>
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.8}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </Row>
    </Container>
  );
}

export default ResumeNew;
