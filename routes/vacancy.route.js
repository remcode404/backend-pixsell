const { vacancyController } = require("../controllers/vacancy.controller");
const { Router } = require("express");

const router = Router()

router.get('/vacancy', vacancyController.getAllVacancy)
router.post('/vacancy', vacancyController.addVacancy)
router.delete('/vacancy/:id', vacancyController.deleteVacancy)
router.get('/vacancy/:id', vacancyController.getVacancy)

module.exports = router;