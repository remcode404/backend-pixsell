const { Router } = require("express");
const { promoController } = require("../controllers/promo.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = Router();

router.get("/promo", promoController.getPromo);
router.post("/promo", promoController.addPromo);

module.exports = router;
