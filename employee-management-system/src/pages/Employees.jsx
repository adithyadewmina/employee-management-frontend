import React, { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";
import AddEmployeeForm from "../components/AddEmployeeForm";
import { fetchEmployees } from "../services/api";

const Employees = () => {
  const [showAddForm, setShowAddForm] = useState(false); // State to toggle between form and table
  const [employees, setEmployees] = useState([]); // State to store employee data

  // Function to load employees
  const loadEmployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
  };

  // Load employees on component mount
  useEffect(() => {
    loadEmployees();
  }, []);

  const handleEmployeeAdded = () => {
    setShowAddForm(false); // Switch back to the table after adding an employee
    loadEmployees(); // Refresh the employee list
  };

  return (
    <div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Employee Management</h1>
        
        {/* Button to toggle between form and table */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        >
          {showAddForm ? "View Employee List" : "Add Employee"}
        </button>

        {/* Conditionally render either the form or the table */}
        {showAddForm ? (
          <AddEmployeeForm onEmployeeAdded={handleEmployeeAdded} />
        ) : (
          <EmployeeList employees={employees} loadEmployees={loadEmployees} />
        )}
      </div>
    </div>
  );
};

export default Employees;