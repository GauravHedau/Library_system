const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    res.status(200).json({
      success: true,
      data: books,
      message: "Entire Book Data is fetched",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};

exports.getBookByID = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById({ _id: id });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "No Data found with given Id",
      });
    }
    res.status(200).json({
      success: true,
      data: book,
      message: `Book ${id} data successfully fetch`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
