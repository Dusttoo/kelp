'use strict';
module.exports = (sequelize, DataTypes) => {
  const Star = sequelize.define('Star', {
    quantity: DataTypes.INTEGER,
    businessId: DataTypes.INTEGER
  }, {});
  Star.associate = function(models) {
    // associations can be defined here
  };
  return Star;
};