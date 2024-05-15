const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const taskRouter = require("./Routes/task_routes");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", taskRouter);

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
  });
});
