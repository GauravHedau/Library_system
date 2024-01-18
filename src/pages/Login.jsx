import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/operations/authAPI";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };
  return (
   <div className="flex justify-center items-center pt-20">
     <div className="flex flex-col gap-6 items-center justify-between bg-white p-8 rounded-lg">
      <h2 className="text-5xl font-semibold ">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col p-8">
        <label className="flex  gap-10 items-start text-2xl justify-between">
          <span className="font-semibold">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-black rounded-lg p-1 w-[300px]"
          />
        </label>
        <br />
        <label className="flex  gap-10 items-start text-2xl justify-between">
          <span className="font-semibold">Password:</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-black rounded-lg p-1 w-[300px]"
          />
        </label>
        <br />
        <div className="flex justify-evenly items-center">
          <button
            type="submit"
            className=" flex items-center justify-center  bg-cyan-600 text-white p-2 px-8 border rounded-lg font-semibold text-2xl"
          >
            Login
          </button>
          <Link
            to="/register"
            className="border border-black underline p-2 px-8 rounded-lg text-2xl"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Login;
