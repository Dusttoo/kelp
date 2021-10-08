const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();


const { Business, Photos } = require('../../db/models');




router.get('', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  res.json(businesses);
}));

router.get('/photos'), asyncHandler(async (req, res) => {
  const photos = await Photos.findAll();
  res.json(photos);
})



module.exports = router;