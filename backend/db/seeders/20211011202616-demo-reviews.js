'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Stars', [{
      businessId: 1,
      quantity: 3.5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 1,
      quantity: 1.5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      businessId: 1,
      quantity: 4.5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      businessId: 1,
      quantity: 3.7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      businessId: 1,
      quantity: 2.3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Stars', null, {});

  }
};
