// src/components/TestimonialsSection.jsx

import React from "react";
import { Container } from "react-bootstrap";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This system has transformed our hospital's operations!",
    },
    {
      name: "Jane Smith",
      feedback: "An invaluable tool for managing patient care.",
    },
    {
      name: "Mark Johnson",
      feedback: "Highly recommend for any healthcare facility!",
    },
  ];

  return (
    <Container id="testimonials" className="mt-5">
      <h2 className="text-center">What Our Clients Say</h2>
      <div className="d-flex flex-column align-items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mb-3 text-center"
            style={{ maxWidth: "600px" }}
          >
            <blockquote className="blockquote">
              <p>{testimonial.feedback}</p>
              <footer className="blockquote-footer">{testimonial.name}</footer>
            </blockquote>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
