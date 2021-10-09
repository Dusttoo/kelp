'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
  };
  return Business;
};