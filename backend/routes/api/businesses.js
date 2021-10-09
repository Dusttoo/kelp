const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');



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
  console.log("THIS IS THE ID: ", id)
  const business = await Business.findByPk(id);
  res.json({business});
}))

router.get('/:id/photos', asyncHandler(async (req, res) => {
  const  id  = req.params.id
    const photos = await Photos.findAll(
    {where: {businessId : id}}
  )
  res.json({photos});
}))

router.get('/add', 
requireAuth,
asyncHandler(async (req, res) => {

}));







module.exports = router;