const { Router } = require('express')
const { gamesController } = require('../controllers/games.controller')
const gamesImageMiddleware = require('../middlewares/gamesImage.middleware')
const router = Router()

router.post('/images', gamesImageMiddleware.array('images', 4), gamesController.addImageForGame)
router.post('/games', gamesController.addGame)
router.get('/games', gamesController.getGames)
router.patch('/games/genre/:id', gamesController.addGenreForGame)

module.exports = router
