'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define('Photos', {
    businessId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    alt: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  Photos.associate = function(models) {
    // associations can be defined here
  };
  return Photos;
};