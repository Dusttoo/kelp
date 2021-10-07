'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comments', {
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
      questionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Questions', key: 'id'}
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      comment: {
        allowNull: false,
        type: Sequelize.STRING
      },
      upVote: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      downVote: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      complimentCount: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Comments');
  }
};