// src/components/FeaturesSection.jsx

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeaturesSection = () => {
  const features = [
    {
      title: "Patient Management",
      description: "Manage patient records efficiently.",
    },
    {
      title: "Appointment Scheduling",
      description: "Schedule and manage appointments seamlessly.",
    },
    {
      title: "Billing and Invoicing",
      description: "Automate billing processes for better accuracy.",
    },
  ];

  const containerRef = React.useRef();

  useGSAP(
    () => {
      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: -50,
        stagger: 0.2,
        duration: 0.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <Container id="features" ref={containerRef} className="mt-5">
      <h2 className="text-center">Our Features</h2>
      <Row className="text-center">
        {features.map((feature, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturesSection;
