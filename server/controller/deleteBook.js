const Book = require("../models/Book");

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    await Book.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Book Deleted Successfully",
    });

    //error handling
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
