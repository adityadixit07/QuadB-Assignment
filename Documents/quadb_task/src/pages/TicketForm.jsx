import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const TicketForm = ({ show, setShowForm }) => {
  const [formData, setFormData] = useState({
    movieName: show.name,
    fullName: "",
    email: "",
    seatNumber: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming the API call is successful
      localStorage.setItem("ticketFormData", JSON.stringify(formData));

      toast.success("Ticket booked successfully");
      setShowForm(false);
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-8  w-[30%] mx-auto">
      <div className="flex justify-end">
        <button
          onClick={() => setShowForm(false)}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          &times;
        </button>
      </div>
      <Toaster position="top-right" />
      <h3 className="text-xl font-semibold mb-4">Book Ticket</h3>
      {/* Movie name and language */}
      <p className="mb-4">
        Movie: {show.name} ({show.language})
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name:
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Seat Number:
          </label>
          <input
            type="text"
            name="seatNumber"
            value={formData.seatNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address:
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="3"
            required
          ></textarea>
        </div>

        {/* Add more relevant form fields here */}

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
