const express = require("express");
require("dotenv").config();
require("./src/config/databaseConnection");
const app = express();
const port = process.env.PORT || 5002;
const todoRouter = require("./src/routers/todoRouter");

app.use(express.json());

app.use("/api", todoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
