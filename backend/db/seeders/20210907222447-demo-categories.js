'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Categories', [{
      category: 'Fast Food',
      numBusinesses: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Bar',
      numBusinesses: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Education',
      numBusinesses: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category: 'Gift Shop',
      numBusinesses: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Categories', null, {});

  }
};
