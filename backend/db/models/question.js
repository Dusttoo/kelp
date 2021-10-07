'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    date: DataTypes.DATE,
    upVote: DataTypes.INTEGER,
    downVote: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};