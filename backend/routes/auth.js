const express = require("express");
const router = express.Router();
const User = require("../models/User");

// create a new user
router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);

    const username = req.body.username;
    const email = req.body.email;

    const newUser = new User({ username, email });
    await newUser.save();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// check if a user exists
router.post("/exists", async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findOne({
      $or: [{ username }, { email }],
    });
    res.json({ exists: user.username });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// login

module.exports = router;
