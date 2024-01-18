const Book = require("../models/Book");

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { bookName, bookAuther, desc } = req.body;

    const book = await Book.findByIdAndUpdate(
      { _id: id },
      { bookName, bookAuther, desc }
    );
    res.status(200).json({
      success: true,
      data: book,
      meassage: "Updated Successfully",
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
