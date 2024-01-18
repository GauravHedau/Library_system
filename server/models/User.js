const mongoose = require("mongoose");

const userShcema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("User", userShcema);
