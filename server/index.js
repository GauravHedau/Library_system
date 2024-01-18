const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

require("./config/database").connect();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const user = require("./routes/user");
const book = require("./routes/books");
app.use("/api/v1", book);
app.use("/api/v1", user);

app.listen(PORT, () => {
  console.log("Server Run at ", PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Library System</h1>");
});
