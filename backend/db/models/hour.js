'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hour = sequelize.define('Hour', {
    businessId: DataTypes.INTEGER,
    monHours: DataTypes.STRING,
    tueHours: DataTypes.STRING,
    wedHours: DataTypes.STRING,
    thurHours: DataTypes.STRING,
    friHours: DataTypes.STRING,
    satHours: DataTypes.STRING,
    sunHours: DataTypes.STRING
  }, {});
  Hour.associate = function(models) {
    // associations can be defined here
  };
  return Hour;
};