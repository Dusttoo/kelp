const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true})
    .notEmpty()
    .withMessage('Please enter a first name'),

  check('lastName')
    .exists({ checkFalsy: true})
    .notEmpty()
    .withMessage('Please enter a last name'),

  check('email') 
    .exists({ checkFalsy: true})
    .notEmpty()
    .isEmail()
    .withMessage('Please enter a valid email'),
  
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),

  check('profileImg')
    .exists({ checkFalsy: true })
    .withMessage('Please add a profile image'),

  handleValidationErrors,
]

// Sign up
router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, firstName, lastName, profileImg, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password)
        const kelpingSince = new Date();
    const user = await User.create( { email, firstName, lastName, profileImg, hashedPassword, kelpingSince });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


router.get('/', 
asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
}))







module.exports = router;