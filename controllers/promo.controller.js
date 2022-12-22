const Promo = require("../models/Promo.model");

module.exports.promoController = {
  addPromo: async (req, res) => {
    try {
      const { text, discount } = req.body;
      const promo = await Promo.create({ text, discount });
      res.json(promo);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getPromo: async (req, res) => {
    try {
      const promo = await Promo.find();
      res.json(promo);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
