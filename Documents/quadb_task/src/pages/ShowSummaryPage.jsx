import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ShowSumary from "./ShowSummary";

const ShowSummaryPage = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        const data = response.data;
        setShowDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShowDetails();
  }, [id]);

  return (
    <div className="p-4">
      {showDetails ? (
        <ShowSumary show={showDetails} />
      ) : (
        <p>Loading show details...</p>
      )}
    </div>
  );
};

export default ShowSummaryPage;
