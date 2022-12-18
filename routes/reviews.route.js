const { Router } = require('express')
const { reviewsController } = require('../controllers/reviews.controller')
const router = Router()

router.get('/reviews', reviewsController.getReviews)
router.patch('/reviews/:id', reviewsController.updateReview)
router.delete('/reviews/:id', reviewsController.deleteReview)

module.exports = router
