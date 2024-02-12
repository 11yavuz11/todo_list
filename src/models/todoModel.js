const mongoose = require("mongoose");

const todoShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    descprition: {
      type: String,
      required: true,
      trim: true,
    },
    complated: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "Todo",
    timestamps: true,
  }
);

const todo = mongoose.model("Todo", todoShema);

module.exports = todo;
