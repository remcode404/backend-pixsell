const mongoose = require("mongoose");
const { SchemaTypes } = require("mongoose");

const basketSchema = mongoose.Schema({
  userId: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
  products: [
    {
      productId: {
        type: SchemaTypes.ObjectId,
        ref: "Games",
      },
    },
  ],
  total: Number,
});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;
