import React, { useState } from "react";

const UpdateBook = ({ selectedBook, onUpdate, onClose }) => {
  const [updatedBook, setUpdatedBook] = useState({
    bookName: selectedBook.bookName,
    bookAuthor: selectedBook.bookAuthor,
    desc: selectedBook.desc,
    createdAt: selectedBook.createdAt,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onUpdate(updatedBook);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="update-modal">
        <h2 className="text-base md:text-lg lg:text-xl font-medium text-gray-800 mb-4">
          Update Book
        </h2>
        <label htmlFor="bookName">Book Name</label>
        <input
          type="text"
          id="bookName"
          name="bookName"
          value={updatedBook.bookName}
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="bookAuthor">Book Author</label>
        <input
          type="text"
          id="bookAuthor"
          name="bookAuthor"
          value={updatedBook.bookAuthor}
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          name="desc"
          value={updatedBook.desc}
          onChange={handleChange}
          className="input-field"
        />
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
          value={updatedBook.createdAt}
          onChange={handleChange}
          className="border border-gray-400 rounded-lg p-1 md:w-[300px] lg:w-[400px]"
        />
        <div className="modal-buttons pt-4 space-x-4">
          <button
            onClick={handleSubmit}
            className="update-button bg-indigo-600 text-white p-2 md:p-3 rounded-md hover:bg-indigo-500"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="cancel-button bg-gray-400 text-white p-2 md:p-3 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
