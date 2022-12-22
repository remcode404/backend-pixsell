const mongoose = require("mongoose");

const promoModel = mongoose.Schema({
  text: String,
  discount: Number,
  // userId: {
  //   type: SchemaTypes.ObjectId,
  //   ref: "User",
  // },
});

const Promo = mongoose.model("Promo", promoModel);

module.exports = Promo;
