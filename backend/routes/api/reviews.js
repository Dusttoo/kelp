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
  const { userId, businessId, rating, review } = req.body;
  const date = new Date();
  
  const newReview = await Review.create( {userId, businessId, stars: rating, date, review});
  res.json({newReview});
}));

router.put('/:id', 
requireAuth,
asyncHandler(async (req, res) => {
  const reviewId = req.params.id;
  const { userId, businessId, rating, review } = req.body;
  const updatedReview = await Review.update( 
    {userId, businessId, rating, review},
    {where: {id: reviewId}}
    );
  res.json({updatedReview});
}));


router.delete('/:id/delete', asyncHandler(async function (req, res) {
  const reviewId = req.params.id;
  const review = await Review.destroy({
    where: {id: reviewId}});
  res.json({ review });
}));









module.exports = router;