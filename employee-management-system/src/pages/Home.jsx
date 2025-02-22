import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Employee Management System</h1>
          <p className="text-lg text-gray-700">
            Manage your employees efficiently with our system. Add, update, and delete employee records with ease.
          </p>
          <div className="mt-8">
            <a
              href="/employees"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              View Employees
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;