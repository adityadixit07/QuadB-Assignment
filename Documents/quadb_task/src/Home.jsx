import React from "react";
import ShowDetail from "./pages/ShowDetail";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl text-gray-700  text-center">All Shows</h1>
      <ShowDetail />
    </div>
  );
};

export default Home;
