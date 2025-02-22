import React, { useState } from "react";
import { deleteEmployee, updateEmployee } from "../services/api";

const EmployeeList = ({ employees, loadEmployees }) => {
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    position: "",
    age: "",
    address: "",
    email: "",
    phone: "",
    salary: "",
  });

  // Sort employees by id
  const sortedEmployees = [...employees].sort((a, b) => a.id.localeCompare(b.id));

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees(); // Refresh the list after deletion
  };

  const handleEditClick = (employee) => {
    setEditEmployeeId(employee.id);
    setEditFormData({
      id: employee.id,
      name: employee.name,
      position: employee.position,
      age: employee.age,
      address: employee.address,
      email: employee.email,
      phone: employee.phone,
      salary: employee.salary,
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(editEmployeeId, editFormData);
    setEditEmployeeId(null);
    loadEmployees(); // Refresh the list after update
  };

  const handleCancelClick = () => {
    setEditEmployeeId(null);
  };

  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border text-center">ID</th>
              <th className="py-2 px-4 border text-center">Name</th>
              <th className="py-2 px-4 border text-center">Position</th>
              <th className="py-2 px-4 border text-center">Age</th>
              <th className="py-2 px-4 border text-center">Address</th>
              <th className="py-2 px-4 border text-center">Email</th>
              <th className="py-2 px-4 border text-center">Phone</th>
              <th className="py-2 px-4 border text-center">Salary</th>
              <th className="py-2 px-4 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedEmployees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                {editEmployeeId === employee.id ? (
                  // Edit Mode
                  <>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="text"
                        name="id"
                        value={editFormData.id}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded text-center"
                        disabled // ID should not be editable
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded text-center"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="text"
                        name="position"
                        value={editFormData.position}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded text-center"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="number"
                        name="age"
                        value={editFormData.age}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded text-center"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="text"
                        name="address"
                        value={editFormData.address}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded text-center"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="email"
                        name="email"
                        value={editFormData.email}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded text-center"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="tel"
                        name="phone"
                        value={editFormData.phone}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded text-center"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="number"
                        name="salary"
                        value={editFormData.salary}
                        onChange={handleEditFormChange}
                        className="w-full p-1 border rounded text-center"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        onClick={handleEditFormSubmit}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  // View Mode
                  <>
                    <td className="py-2 px-4 border text-center">{employee.id}</td>
                    <td className="py-2 px-4 border text-center">{employee.name}</td>
                    <td className="py-2 px-4 border text-center">{employee.position}</td>
                    <td className="py-2 px-4 border text-center">{employee.age}</td>
                    <td className="py-2 px-4 border text-center">{employee.address}</td>
                    <td className="py-2 px-4 border text-center">{employee.email}</td>
                    <td className="py-2 px-4 border text-center">{employee.phone}</td>
                    <td className="py-2 px-4 border text-center">${employee.salary}</td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        onClick={() => handleEditClick(employee)}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(employee.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;