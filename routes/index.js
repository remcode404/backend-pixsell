const { Router } = require('express')
const router = Router()

router.use(require('./users.route'))
router.use(require('./games.route'))

module.exports = router