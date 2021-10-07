'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [{
      userId: 1,
      businessId: 1,
      date: new Date(),
      review: 'The best place to work!',
      stars: 5,
      neptune: 0,
      ready: 0,
      whatever: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 7,
      businessId: 1,
      date: new Date(),
      review: 'Awful establishment.',
      stars: 1,
      neptune: 0,
      ready: 0,
      whatever: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 4,
      businessId: 2,
      date: new Date(),
      review: 'The owner is a thief, and the restuarant has plankton.',
      stars: 1,
      neptune: 0,
      ready: 0,
      whatever: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 12,
      businessId: 9,
      date: new Date(),
      review: 'I saw a few bubble blowing babies in here. The kelp burger is good',
      stars: 3.5,
      neptune: 0,
      ready: 0,
      whatever: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
