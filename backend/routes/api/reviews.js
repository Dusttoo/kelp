const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const { Review, Star } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll();  
  res.json(reviews);
}));

router.post('/add', 
requireAuth,
asyncHandler(async (req, res) => {
  const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
  const { userId, businessId, rating, review } = req.body;
  console.log(businessId);
  const starCount = await Star.findAll({
    where: {businessId}
  })
  const totalStars = [];
  totalStars.push(rating)
  Object.values(starCount).map((star) => (totalStars.push(star)))
  const stars = average(totalStars);
  console.log('AVERAGE OF STARS', stars)

  const date = new Date();
  
  
  const newReview = await Review.create( {userId, businessId, stars, date, review});
  res.json({newReview});
}));







module.exports = router;