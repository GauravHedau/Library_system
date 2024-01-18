const express = require("express");
const router = express.Router();

const { createBook } = require("../controller/createBook");
const { getBooks, getBookByID } = require("../controller/getBooks");
const { updateBook } = require("../controller/updateBooks");
const { deleteBook } = require("../controller/deleteBook");

router.post("/createBook", createBook);
router.get("/getBooks", getBooks);
router.get("/getBook/:id", getBookByID);
router.put("/updateBook/:id", updateBook);
router.delete("/deleteBook/:id", deleteBook);

module.exports = router;
