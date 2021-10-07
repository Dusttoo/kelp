'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    comment: DataTypes.STRING,
    upVote: DataTypes.INTEGER,
    downVote: DataTypes.INTEGER,
    complimentCount: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};