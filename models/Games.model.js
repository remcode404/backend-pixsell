const mongoose = require('mongoose');
const { SchemaTypes } = require('mongoose');

const gamesModel = mongoose.Schema({
  images: [],
  name: String,
  description: String,
  genres: [],
  reviews: [{ type: SchemaTypes.ObjectId, ref: 'Reviews' }],
  publisher: String,
});

const Games = mongoose.model('Games', gamesModel);

module.exports = Games;
