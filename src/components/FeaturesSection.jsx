// src/components/FeaturesSection.jsx

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaUserMd, FaCalendarCheck, FaFileInvoiceDollar } from "react-icons/fa"; // Importing icons

const FeaturesSection = () => {
  const features = [
    {
      title: "Patient Management",
      description: "Manage patient records efficiently.",
      icon: <FaUserMd size={50} className="text-primary mb-3" />, // Icon for Patient Management
    },
    {
      title: "Appointment Scheduling",
      description: "Schedule and manage appointments seamlessly.",
      icon: <FaCalendarCheck size={50} className="text-primary mb-3" />, // Icon for Appointment Scheduling
    },
    {
      title: "Billing and Invoicing",
      description: "Automate billing processes for better accuracy.",
      icon: <FaFileInvoiceDollar size={50} className="text-primary mb-3" />, // Icon for Billing and Invoicing
    },
  ];

  const containerRef = React.useRef();

  // GSAP animation for the features section
  useGSAP(
    () => {
      gsap.from(containerRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.5,
      });
    },
    { scope: containerRef }
  );

  return (
    <Container id="features" ref={containerRef} className="mt-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row className="text-center">
        {features.map((feature, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-sm border-0 rounded-lg feature-card">
              <Card.Body>
                {feature.icon}
                <Card.Title className="font-weight-bold">
                  {feature.title}
                </Card.Title>
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
