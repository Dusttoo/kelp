'use strict';
module.exports = (sequelize, DataTypes) => {
  const PCategory = sequelize.define('Category', {
    category: DataTypes.STRING,
    numBusinesses: DataTypes.INTEGER
  }, {});
  PCategory.associate = function(models) {
    // associations can be defined here
  };
  return PCategory;
};