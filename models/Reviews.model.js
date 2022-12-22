const mongoose = require("mongoose");
const { SchemaTypes } = require("mongoose");

const reviewsModel = mongoose.Schema({
  userId: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
  text: String,
  isPositiveGrade: Boolean,
});

const Reviews = mongoose.model("Reviews", reviewsModel);

module.exports = Reviews;
