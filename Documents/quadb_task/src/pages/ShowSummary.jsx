import React, { useState } from "react";
import TicketForm from "./TicketForm";
import { Link } from "react-router-dom";

const removeHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
};

const ShowSummary = ({ show }) => {
  const [showForm, setShowForm] = useState(false);

  const handleBookTicket = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 border rounded-md shadow-md bg-white">
      <h2 className="text-3xl font-semibold mb-4">{show.name}</h2>
      <p className="text-gray-700">{removeHtmlTags(show.summary)}</p>
      <div className="mt-4">
        <Link
          to={show.url}
          className="text-blue-500 hover:underline transition duration-300"
        >
          View More
        </Link>
      </div>
      <button
        onClick={handleBookTicket}
        className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
      >
        Book Ticket
      </button>

      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <TicketForm show={show} setShowForm={closeModal} />
        </div>
      )}
    </div>
  );
};

export default ShowSummary;
