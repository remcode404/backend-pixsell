const Vacancy = require("../models/Vacancy.model");

module.exports.vacancyController = {
  addVacancy: async (req, res) => {
    try {
      const {
        name,
        tasksWork,
        vacancyDescription,
        keyRequirements,
        weOffer,
        wage,
      } = req.body;
      const vacancy = await Vacancy.create({
        name,
        tasksWork,
        vacancyDescription,
        keyRequirements,
        weOffer,
        wage,
      });
      res.json(vacancy);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  deleteVacancy: async (req, res) => {
    try {
      await Vacancy.findByIdAndDelete(req.params.id);
      res.json("DELETED");
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getAllVacancy: async (req, res) => {
    try {
      const vacancy = await Vacancy.find();
      res.json(vacancy);
    } catch (erroe) {
      res.json({ error: error.message });
    }
  },

  getVacancy: async (req, res) => {
    try {
      const vacancy = await Vacancy.findById(req.params.id);
      res.json(vacancy);
    } catch (erroe) {
      res.json({ error: error.message });
    }
  },
};
