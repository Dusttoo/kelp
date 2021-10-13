'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Questions', [
    {
      businessId: 1,
      userId: 7,
      question: "What is the secret formula?",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 3,
      userId: 1,
      question: "Do you allow weenies?",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },  ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Questions', null, {});

  }
};
