const express = require("express");
require("dotenv").config();
require("./db");

const User = require("./models/User");

//routes mounted

const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", authRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
