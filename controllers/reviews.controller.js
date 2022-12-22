const Reviews = require("../models/Reviews.model");

module.exports.reviewsController = {
  getReviews: async (req, res) => {
    try {
      const reviews = await Reviews.find();
      res.json(reviews);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteReview: async (req, res) => {
    try {
      const reviews = await Reviews.findByIdAndRemove(req.params.id);
      res.json(reviews);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  updateReview: async (req, res) => {
    try {
      const { text, isPositiveGrade } = req.body;
      const reviews = await Reviews.findByIdAndUpdate(req.params.id, {
        text,
        isPositiveGrade,
      });
      res.json(reviews);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
