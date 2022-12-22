const mongoose = require("mongoose");
const { SchemaTypes } = require("mongoose");

const gamesModel = mongoose.Schema({
  images: [],
  name: String,
  description: String,
  date: String,
  genres: [],
  reviews: [{ type: SchemaTypes.ObjectId, ref: "Reviews" }],
  publisher: String,
  platform: [],
  price: Number,
  
});

const Games = mongoose.model("Games", gamesModel);

module.exports = Games;
