const Games = require('../models/Games.model');
const Reviews = require('../models/Reviews.model');

module.exports.gamesController = {
  addImageForGame: async (req, res) => {
    try {
      if (req.files) {
        const mapFiles = req.files.map((file) => (file = file.path));
        res.json(mapFiles);
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addGenreForGame: async (req, res) => {
    try {
      const genres = await Games.findByIdAndUpdate(req.params.id, {
        genres: req.body.genre
      })
      res.json(genres)
    } catch (error) {
      res.json({error: error.message})
    }
  },
  addGame: async (req, res) => {
    try {
      const { images, name, description, date, genres, publisher, platform, price } = req.body;
      const games = await Games.create({ images, name, description, date, genres, publisher, platform, price });
      res.json(games);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  addReviewForGame: async (req, res) => {
    try {
      const { userId, text, isPositiveGrade } = req.body;
      const reviews = await Reviews.create({
        userId,
        text,
        isPositiveGrade,
      });
      const games = await Games.findByIdAndUpdate(req.params.id, {
        $addToSet: { reviews: [reviews._id] },
      });
      res.json(games)
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getGames: async (req, res) => {
    try {
      const {page = Math.floor(games.length / 2), limit=2} = req.query; //СДЕЛАТЬ ПРОВЕРКУ НА ЧЕТНОСТЬ
      const games = await Games.find().populate('reviews').limit(limit * 1).skip((page - 1) * limit);
      res.json(games);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
