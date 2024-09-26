// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
import CustomNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import PatientList from "./components/PatientList"; // Import PatientList component
import PatientForm from "./components/PatientForm"; // Import PatientForm component

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/features" element={<FeaturesSection />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/add" element={<PatientForm />} />
        <Route path="/edit/:id" element={<PatientForm />} />
      </Routes>
      <FeaturesSection />}
      <Footer />
      <ToastContainer /> {/* Add ToastContainer here */}
    </Router>
  );
};

export default App;
