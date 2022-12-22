const Basket = require("../models/Basket.model");

module.exports.basketController = {
  // ВЫВОД КОРЗИНЫ
  getBasketByUSer: async (req, res) => {
    try {
      const data = await Basket.findOne({ userId: req.user.id });
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ
  addProductBasket: async (req, res) => {
    try {
      const data = await Basket.findByIdAndUpdate(req.params.id, {
        $addToSet: {
          products: product,
        },
      });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  // УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
  deleteBasket: async (req, res) => {
    try {
      const data = await Basket.findByIdAndUpdate(req.user.basket, {
        $pull: {
          products: { productId: req.params.id },
        },
      });
      res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
