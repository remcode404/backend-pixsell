const { Router } = require('express')
const router = Router()

router.use(require('./users.route'))
<<<<<<< HEAD
router.use(require('./vacancy.route'))
=======
router.use(require('./games.route'))
router.use(require('./reviews.route'))

>>>>>>> 4642550ec184c7783e9f9111964ddb59daac865e
module.exports = router