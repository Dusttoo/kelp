'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      businessId: 1,
      date: new Date(),
      stars: 5,
      review: 'The best place to work!',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 7,
      businessId: 1,
      date: new Date(),
      stars: 1,
      review: 'Awful establishment.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 4,
      businessId: 2,
      date: new Date(),
      stars: 1,
      review: 'The owner is a thief, and the restuarant has plankton.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 12,
      businessId: 9,
      date: new Date(),
      review: 'I saw a few bubble blowing babies in here. The kelp burger is good',
      stars: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
