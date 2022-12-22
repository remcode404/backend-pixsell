const { Router } = require('express')
const router = Router()

router.use(require('./users.route'))
router.use(require('./vacancy.route'))
router.use(require('./games.route'))
router.use(require('./reviews.route'))
router.use(require('./basket.route'))

module.exports = router