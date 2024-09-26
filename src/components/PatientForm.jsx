// src/components/PatientForm.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PatientForm = () => {
  const [patient, setPatient] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    dob: "",
  });

  const { id } = useParams(); // Get patient ID from URL params
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchPatient = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/patients/${id}`
          );
          setPatient(response.data);
        } catch (error) {
          console.error("Error fetching patient data:", error);
          alert("Failed to fetch patient data. Please try again.");
        }
      };
      fetchPatient();
    }
  }, [id]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Update existing patient
        await axios.put(`http://localhost:8080/api/patients/${id}`, patient);
        toast.success("Patient updated successfully!");
      } else {
        // Create new patient
        await axios.post("http://localhost:8080/api/patients", patient);
        toast.success("Patient added successfully!");
      }
      navigate("/patients"); // Redirect back to patient list after submission
    } catch (error) {
      console.error("There was an error saving the patient!", error);
      toast.error("Failed to save the patient. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{id ? "Edit Patient" : "Add Patient"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={patient.address}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={patient.phone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={patient.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={patient.dob.split("T")[0]}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>

        <button
          type="submit"
          className={`btn btn-${id ? "warning" : "primary"} me-2`}
        >
          {id ? "Update Patient" : "Add Patient"}
        </button>

        {/* Cancel button */}
        <button
          type="button"
          onClick={() => navigate("/patients")}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
