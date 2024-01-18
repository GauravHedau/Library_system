import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateBook from "../components/updateBook";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../services/operations/authAPI";

const Dashboard = () => {
  const [bookData, setBookData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      }
    };

    fetchUserFromLocalStorage();
  }, []);

  // console.log(user.role)
  const getAllData = async () => {
    try {
      const getBook = await fetch(`http://localhost:4000/api/v1/getBooks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await getBook.json(); // Extract only the 'data' property
      setBookData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  console.log(bookData);

  const handleDelete = async (bookId) => {
    try {
      await fetch(`http://localhost:4000/api/v1/deleteBook/${bookId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // After deletion, refresh the book list
      getAllData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = (book) => {
    setSelectedBook(book);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = async (updatedBookData) => {
    try {
      await fetch(
        `http://localhost:4000/api/v1/updateBook/${selectedBook._id}`,
        {
          method: "PUT", // or "PATCH" depending on your API
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBookData),
        }
      );
      // After update, refresh the book list
      getAllData();
      // Close your update modal here
      setSelectedBook(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const handleModalClose = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <>
      {isUpdateModalOpen && (
        <UpdateBook
          selectedBook={selectedBook}
          onUpdate={handleUpdateSubmit}
          onClose={handleModalClose}
        />
      )}
      <div className="flex items-center justify-end p-8">
        <button
          onClick={handleLogout}
          className="border border-gray-300 rounded-md p-2 px-2"
        >
          Logout
        </button>
      </div>

      <section className="container px-4 mx-auto py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-800">Books</h2>
            <p className="mt-1 text-sm text-gray-500">
              This is a list of all books.
            </p>
          </div>
          {user && user.role === "Admin" && (
            <Link to="/createBook">
              <div>
                <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500">
                  Add Book
                </button>
              </div>
            </Link>
          )}
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-lg font-semibold text-left text-gray-500 "
                      >
                        <span>Book Name</span>
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-lg font-semibold text-left text-gray-500 "
                      >
                        Book Author
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-semibold text-left text-gray-500"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-semibold text-left text-gray-500"
                      >
                        Created At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookData.map((book) => (
                      <tr key={book._id}>
                        <td className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          {book.bookName}
                        </td>
                        <td className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          {book.bookAuthor}
                        </td>
                        <td className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                          {book.desc}
                        </td>
                        <td className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 flex gap-4 justify-between">
                          {new Date(book.createdAt).toLocaleDateString()}
                          {user && user.role === "Admin" && (
                            <div className="flex gap-6 justify-evenly items-center">
                              <button
                                onClick={() => handleDelete(book._id)}
                                className="text-red-400 text-3xl"
                              >
                                <MdDelete />
                              </button>
                              <button
                                onClick={() => handleUpdate(book)}
                                className="text-blue-400 text-3xl"
                              >
                                <FaEdit />
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8">
          <p className="text-xl font-semibold">
            Number of Books: {bookData.length}
          </p>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
