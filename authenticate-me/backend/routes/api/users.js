const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { email, firstName, lastName, profileImg, password } = req.body;
        //   console.log(firstName, lastName, email,  password, profileImg)
        const hashedPassword = bcrypt.hashSync(password)
        const kelpingSince = new Date();
    const user = await User.create( { email, firstName, lastName, profileImg, hashedPassword, kelpingSince });

    // console.log("This is the user: ", user)
    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

//   fetch('/api/users', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `2ncMIrgp-GSB_DqBjZFnDAdNC2OWeOB7hQvM`
//   },
//   body: JSON.stringify({
//     firstName:'Peter',
//     lastName:'Parker',
//     email:'spidey@spider.man',
//     password:'Spidey',
//     profileImg: 'https://static.wikia.nocookie.net/marveldatabase/images/a/a0/Peter_Parker_%28Earth-199999%29_from_Spider-Man_Far_from_Home_promotional_004.jpg/revision/latest?cb=20191002161238'
//   })
// }).then(res => res.json()).then(data => console.log(data));


module.exports = router;