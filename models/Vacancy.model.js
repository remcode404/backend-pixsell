const mongoose = require("mongoose");
const vacancyShema = mongoose.Schema({
  name: String,
  tasksWork: String,
  vacancyDescription: String,
  keyRequirements: String,
  weOffer: String,
  wage: Number,
});

const Vacancy = mongoose.model("Vacancy", vacancyShema);

module.exports = Vacancy;
