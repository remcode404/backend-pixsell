const { Router } = require('express')
const { gamesController } = require('../controllers/games.controller')
const gamesImageMiddleware = require('../middlewares/gamesImage.middleware')
const router = Router()

router.get('/games', gamesController.getGames)
router.post('/games', gamesController.addGame)
router.post('/images', gamesImageMiddleware.array('images', 4), gamesController.addImageForGame)
router.post('/games/reviews/:id', gamesController.addReviewForGame)

module.exports = router
