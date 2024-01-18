const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { login, signup } = require("../controller/Auth");
const { auth, isAdmin, isUser } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
