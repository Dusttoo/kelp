const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');




const { Business, Review} = require('../../db/models');


const validateBusiness = [
  check('name')
    .exists({ checkFalsy: true})
    .notEmpty()
    .withMessage('Please enter a business name'),

  check('description')
    .exists({ checkFalsy: true})
    .notEmpty()
    .withMessage('Please enter a description'),

  check('address') 
    .exists({ checkFalsy: true})
    .notEmpty()
    .withMessage('Please enter an address'),

  handleValidationErrors,
]




router.get('', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  
  res.json(businesses);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const  id  = req.params.id
  const business = await Business.findByPk(id);
  
  res.json({business});
}))

router.post('/add', 
requireAuth,
validateBusiness,
asyncHandler(async (req, res) => {
  const { name, address, categoryId, description, longitude, userId, latitude, image } = req.body;
  
  const business = await Business.create( {name, address, categoryId, description, longitude, userId, latitude, image});
  res.json({business});
}));

router.put('/:id', 
requireAuth,
validateBusiness,
asyncHandler(async (req, res) => {
  const businessId = req.params.id;
  const { name, address, categoryId, description, longitude, userId, latitude, image } = req.body;
  const business = await Business.update( 
    {name, address, categoryId, description, longitude, userId, latitude, image},
    {where: {id: businessId}}
    );
  res.json({business});
}));

router.delete('/:id/delete', asyncHandler(async function (req, res) {
  const businessId = req.params.id;
  console.log(businessId)
  const businessReviews = await Review.findAll({
    where: {businessId}
  })

  businessReviews.forEach(async(review) => {
    await Review.destroy({
      where: {id: review.id}
    })
  })

  console.log("THESE ARE THE REVIEWS FOR THIS BUSINESS", businessReviews)

  const business = await Business.destroy({
    where: {id: businessId}});
  res.json({ businessId });
}));













module.exports = router;