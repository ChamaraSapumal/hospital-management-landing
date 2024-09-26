// src/components/HeroSection.jsx

import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroSection = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(containerRef.current, { opacity: 0, duration: 1 });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      style={{ background: "#f8f9fa", padding: "100px 0" }}
    >
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="display-4">
              Welcome to Our Hospital Management System
            </h1>
            <p className="lead">
              Streamline your operations and enhance patient care.
            </p>
            <Button variant="primary" href="#features">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
