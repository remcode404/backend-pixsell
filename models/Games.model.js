const mongoose = require("mongoose"); 
const { SchemaTypes } = require("mongoose"); 

const gamesModel = mongoose.Schema({
  images: [],
  name: String,
  description: String,
  reviews: {
    type: SchemaTypes.Array
  },
  publisher: String
}) 

const Games = mongoose.model('Games', gamesModel)

module.exports = Games