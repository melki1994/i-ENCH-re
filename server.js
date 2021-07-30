const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();

// Connect to the database (MongoDB)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database was successfully connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/uploads", express.static("uploads"));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use(require("./routes"));

// create the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`The server is running on port ${PORT} `);
});
