const { Router } = require("express");
const { basketController } = require("../controllers/basket.controller");
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router();

router.get("basket/user", authMiddleware, basketController.getBasketByUSer);
router.patch("basket/:id", basketController.addProductBasket);
router.patch("basket/delete/:id", authMiddleware, basketController.deleteBasket);

module.exports = router;
