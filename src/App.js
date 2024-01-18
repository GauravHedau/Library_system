import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateBook from "./components/createBook";
import PageError from "./pages/PageError";
import PrivateRoute from "./components/privateRoute";

const App = () => {
  return (
    <div className="w-full h-[100vh] bg-[#E9F6FF] ">
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/createBook"
          element={
            <PrivateRoute>
              <CreateBook />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<PageError />} />
      </Routes>
    </div>
  );
};

export default App;
