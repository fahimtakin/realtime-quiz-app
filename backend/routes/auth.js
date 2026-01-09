const express = require("express");
const router = express.Router();
const User = require("../models/User");


// create a new user
router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// login user



module.exports = router;
