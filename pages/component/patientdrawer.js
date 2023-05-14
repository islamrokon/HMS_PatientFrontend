import React, { useState } from "react";
import SessionCheck from '@/pages/component/sessioncheck'
const Dashboard = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex h-screen">
      <SessionCheck/>
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 p-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <ul className="mt-6 space-y-2">
        <li>
            <a
              href="../patient/dashboard/profile"
              className= "text-white text-gray-300"
             
              
            >
             Profile
            </a>
          </li>
          <li>
            <a
              href="../"
              className= "text-white text-gray-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="../patient/dashboard/doctors"
              className= "text-white text-gray-300"
            >
              Doctors
            </a>
          </li>
          <li>
            <a
              href="../patient/dashboard/takeappointment"
              className= "text-white text-gray-300"
            >
             Take Appointment
            </a>
          </li>

          <li>
            <a
              href="#"
              className= "text-white text-gray-300"
            >
              Appointments
            </a>
          </li>
          <li>
            <a
              href="#"
              className= "text-white text-gray-300"
            >
              Book Lab
            </a>
          </li>

          <li>
            <a
              href="../patient/dashboard/labs1"
              className= "text-white text-gray-300"
            >
              Booked Labs
            </a>
          </li>
          <li>
            <a
              href="../patient/dashboard/deletelab"
              className= "text-white text-gray-300"
            >
              Delete Lab
            </a>
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-semibold mb-4">
          Welcome to the Dashboard!
        </h1>
       
      </div>
    </div>
  );
};

export default Dashboard;
