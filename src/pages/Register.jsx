import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/operations/authAPI";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [roleType, setRoleType] = useState("User");

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "User",
  });

  const { userName, email, password, role } = formData;

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", formData);

    dispatch(
      signUp(
        formData.userName,
        formData.email,
        formData.password,
        formData.role,
        navigate
      )
    );
    setFormData({
      userName: "",
      email: "",
      password: "",
      role: "",
    });
    setRoleType("User");
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex  flex-col gap-6 items-center justify-between bg-white p-8 rounded-lg">
        <h2 className="text-5xl font-semibold ">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col p-8">
          <label className="flex  gap-10 items-start text-2xl justify-between">
            <span className="font-semibold">User Name:</span>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
              required
              className="border border-black rounded-lg p-1 w-[300px]"
            />
          </label>
          <br />
          <label className="flex  gap-10 items-start text-2xl justify-between">
            <span className="font-semibold">Email:</span>

            <input
              type="email"
              name="email"
              value={email}
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
              value={password}
              onChange={handleChange}
              required
              className="border border-black rounded-lg p-1 w-[300px]"
            />
          </label>
          <br />
          <label className="flex  gap-10 items-start text-2xl justify-between">
            <span className="font-semibold">Role:</span>
            <select
              name="role"
              value={role}
              onChange={handleChange}
              className="border border-black rounded-lg p-1 w-[300px]"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
          <br />
          <div className="flex justify-evenly items-center">
            <button
              type="submit"
              className=" flex items-center justify-center  bg-cyan-600 text-white p-2 px-8 border rounded-lg font-semibold text-2xl"
            >
              Register
            </button>
            <Link
              to="/"
              className="border border-black  p-2 px-8 rounded-lg text-2xl underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
