import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBookForm = () => {
  const navigate = useNavigate();

  const createBook = async (data) => {
    try {
      const savedBookRes = await fetch(
        "http://localhost:4000/api/v1/createBook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (savedBookRes.ok) {
        console.log("Book created successfully!");

        setFormData({
          bookName: "",
          bookAuthor: "",
          desc: "",
          createdAt: "",
        });
        navigate("/dashboard");
      } else {
        console.error("Failed to create book:", savedBookRes.statusText);
      }
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  const [formData, setFormData] = useState({
    bookName: "",
    bookAuthor: "",
    desc: "",
    createdAt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(formData);
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="flex flex-col gap-6 items-center justify-between bg-white p-4 md:p-8 rounded-lg">
        <h2 className="text-2xl md:text-5xl font-semibold">Create Entry</h2>
        <p className="text-sm md:text-base">Create a new book entry</p>
        <form onSubmit={handleSubmit} className="flex flex-col p-4 md:p-8">
          <div className="mb-4">
            <label
              htmlFor="bookName"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="font-semibold">Book Name:</span>
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              value={formData.bookName}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg p-1 w-[300px]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bookAuthor"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="font-semibold">Book Author:</span>
            </label>
            <input
              type="text"
              id="bookAuthor"
              name="bookAuthor"
              value={formData.bookAuthor}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg p-1 w-[300px]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="font-semibold">Description:</span>
            </label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg p-1 w-[300px]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="createdAt"
              className="block text-sm font-medium text-gray-700"
            >
              <span className="font-semibold">Created At:</span>
            </label>
            <input
              type="date"
              id="createdAt"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg p-1 w-[300px]"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-500"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBookForm;
