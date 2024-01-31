import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowDetail = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = response.data;
        setShows(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {shows?.map((item) => (
        <div
          key={item.show.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          {item.show.image && (
            <img
              src={item.show.image.medium}
              alt={item.show.name}
              className="w-full h-[35vh] object-cover"
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{item.show.name}</h2>
            <Link to={`/show/${item.show.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Show Summary
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowDetail;
