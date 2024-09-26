// src/components/PatientList.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const response = await axios.get("http://localhost:8080/api/patients");
    setPatients(response.data);
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/patients/${id}`);
      toast.success("Patient deatailes has been deleted!");
      fetchPatients(); // Refresh the list after deletion
    } catch (error) {
      console.error("There was an error deleting the patient!", error);
      toast.error("Action incomplete!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Patient List</h2>
      <Link to="/add" className="btn btn-primary mb-3">
        Add Patient
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.address}</td>
              <td>{patient.phone}</td>
              <td>{patient.email}</td>
              <td>{new Date(patient.dob).toLocaleDateString()}</td>
              <td>
                <Link
                  to={`/edit/${patient.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePatient(patient.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
