const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Category } = require('../../db/models');


router.get('', asyncHandler(async (req, res) => {
  console.log("I MADE IT TO THE REQUEST!!!!!!!!!!!")
  const categories = await Category.findAll();
  console.log("THESE ARE THE CATEGORIES!!", categories)
  res.json(categories);
}));

module.exports = router;