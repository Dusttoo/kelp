'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
  };
  return Question;
};