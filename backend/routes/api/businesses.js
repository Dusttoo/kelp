const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();


const { Business, Photos } = require('../../db/models');




router.get('', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  res.json(businesses);
}));

router.get('/photos', asyncHandler(async (req, res) => {
  const photos = await Photos.findAll();
  res.json(photos);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const  id  = req.params.id
  const business = await Business.findByPk(id);
  const photos = await Photos.findAll(
    {where: {businessId : id}}
  )
  res.json({business, photos});
}))





module.exports = router;