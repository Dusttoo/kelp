'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      businessId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Businesses', key: 'id' }
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      review: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stars: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      // neptune: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER
      // },
      // ready: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER
      // },
      // whatever: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER
      // },
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
    return queryInterface.dropTable('Reviews');
  }
};