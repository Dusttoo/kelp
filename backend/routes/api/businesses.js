const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');




const { Business } = require('../../db/models');


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
  
  // check('logitude')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Please enter a longitude'),

  // check('latitude')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Please enter a latitude'),

  handleValidationErrors,
]




router.get('', asyncHandler(async (req, res) => {
  const businesses = await Business.findAll();
  // const hours = await Hour.findAll()
  
  res.json(businesses);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const  id  = req.params.id
  const business = await Business.findByPk(id);
  
  res.json({business});
}))

// router.get('/:id/photos', asyncHandler(async (req, res) => {
//   const  id  = req.params.id
//     const photos = await Photos.findAll(
//     {where: {businessId : id}}
//   )
//   res.json({photos});
// }))

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
asyncHandler(async (req, res) => {
  const businessId = req.params.id;
  const { name, address, categoryId, description, longitude, userId, latitude } = req.body;
  const business = await Business.update( 
    {name, address, categoryId, description, longitude, userId, latitude},
    {where: {id: businessId}}
    );
  res.json({business});
}));

router.delete('/:id/delete', asyncHandler(async function (req, res) {
  console.log("DELETE!!!!!!!!!!!!!!")
  const businessId = req.params.id;
  const business = await Business.destroy({
    where: {id: businessId}});
  res.json({ business });
}));











module.exports = router;