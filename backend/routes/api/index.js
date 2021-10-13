const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessRouter = require('./businesses.js');
const reviewRouter = require('./reviews');
const categoryRouter = require('./categories.js')
const questionRouter = require('./questions')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/businesses', businessRouter);

router.use('/reviews', reviewRouter)

router.use('/categories', categoryRouter);

router.use('/questions', questionRouter);



module.exports = router;