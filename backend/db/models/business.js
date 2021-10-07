'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    reviewCount: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    isOpen: DataTypes.BOOLEAN,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
  };
  return Business;
};