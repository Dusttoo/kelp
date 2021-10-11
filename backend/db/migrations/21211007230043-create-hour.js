'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Businesses', key: 'id' }
      },
      monHours: {
        type: Sequelize.STRING
      },
      tueHours: {
        type: Sequelize.STRING
      },
      wedHours: {
        type: Sequelize.STRING
      },
      thurHours: {
        type: Sequelize.STRING
      },
      friHours: {
        type: Sequelize.STRING
      },
      satHours: {
        type: Sequelize.STRING
      },
      sunHours: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hours');
  }
};