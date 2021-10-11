'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    review: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    // neptune: DataTypes.INTEGER,
    // ready: DataTypes.INTEGER,
    // whatever: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};