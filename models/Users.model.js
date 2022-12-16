const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  usersName: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      ref: "Role",
    },
  ],
  walletAmount: {
    type: Number,
    default: 0,
  },
  favourites: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Games",
    },
  ],
  purchasedGames: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Games",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
