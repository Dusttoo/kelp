const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { requireAuth } = require('../../utils/auth');
const { Question } = require('../../db/models');

router.get('/', asyncHandler(async (req, res) => {
  const questions = await Question.findAll();  
  res.json(questions);
}));

router.post('/add', 
requireAuth,
asyncHandler(async (req, res) => {
  const { userId, businessId, question } = req.body;
  const date = new Date();
  
  const newQuestion = await Question.create( {userId, businessId, question, date});
  res.json({newQuestion});
}));

router.put('/:id', 
requireAuth,
asyncHandler(async (req, res) => {
  const questionId = req.params.id;
  const { userId, businessId, question } = req.body;
  const updatedQuestion = await Question.update( 
    {userId, businessId, question},
    {where: {id: questionId}}
    );
  res.json({updatedQuestion});
}));


router.delete('/:id/delete', asyncHandler(async function (req, res) {
  const questionId = req.params.id;
  const question = await Question.destroy({
    where: {id: questionId}});
  res.json({ question });
}));









module.exports = router;