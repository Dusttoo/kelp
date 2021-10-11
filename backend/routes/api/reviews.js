const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const { Review } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll();  
  res.json(reviews);
}));







module.exports = router;