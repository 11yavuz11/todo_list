const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Coonnect DB");
  })
  .catch(() => {
    console.log("Not Connect DB");
  });
