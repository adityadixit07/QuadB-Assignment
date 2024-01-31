import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowSummaryPage from "./pages/ShowSummaryPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<ShowSummaryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
