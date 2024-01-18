const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  try {
    const { bookName, bookAuthor, desc, createdAt } = req.body;

    const response = await Book.create({
      bookName,
      bookAuthor,
      desc,
      createdAt,
    });

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });

    //error handling
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
