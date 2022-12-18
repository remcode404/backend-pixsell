const Games = require("../models/Games.model");

module.exports.gamesController = {
  addImageForGame: async (req, res) => {
    try {
      if(req.files){
        const mapFiles = req.files.map(file => file = file.path)
        res.json(mapFiles)
      }
    } catch (error) {
      res.json({error: error.message})
    }
  },
  addGame: async (req, res) => {
    try {
      const { images, name, description, publisher} = req.body
      const games = await Games.create({images, name, description, publisher})
      res.json(games)
    } catch (error) {
      res.json({error: error.message})
    }
  },
  getGames: async (req, res) => {
    try {
      const games = await Games.find()
      res.json(games)
    } catch (error) {
      res.json({error: error.message})
    }
  }
}