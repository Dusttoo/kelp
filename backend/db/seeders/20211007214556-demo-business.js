'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Businesses', [{
      name: 'The Krusty Krab',
      address: "Bikini Bottom",
      reviewCount: 0,
      stars: 0,
      categoryId: 1,
      isOpen: true,
      userId: 4,
      longitude: '-91.87911',
      latitude: '26.11367',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'The Chum Bucket',
      address: "Bikini Bottom",
      reviewCount: 0,
      stars: 0,
      categoryId: 1,
      isOpen: true,
      userId: 7,
      longitude: '-91.72288',
      latitude: '25.88779',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Weenie Hut Franchise',
      address: "Bikini Bottom",
      reviewCount: 0,
      stars: 0,
      categoryId: 1,
      isOpen: true,
      userId: 11,
      longitude: '-92.36558',
      latitude: '26.23322',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'The Salty Spitoon',
      address: "Goo Lagoon",
      reviewCount: 0,
      stars: 0,
      categoryId: 2,
      isOpen: true,
      userId: 12,
      longitude: '-92.46995',
      latitude: '25.66025',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Mrs. Puff's Boating School",
      address: "Bikini Bottom",
      reviewCount: 0,
      stars: 0,
      categoryId: 3,
      isOpen: true,
      userId: 9,
      longitude: '-92.02929',
      latitude: '25.81892',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Shell City',
      address: "Shell City",
      reviewCount: 0,
      stars: 0,
      categoryId: 4,
      isOpen: true,
      userId: 13,
      longitude: '-96.76145',
      latitude: '28.15715',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Weenie Hut Jr.',
      address: "Bikini Bottom",
      reviewCount: 0,
      stars: 0,
      categoryId: 1,
      isOpen: true,
      userId: 11,
      longitude: '-92.36437',
      latitude: '26.0807',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'The Krusty Krab 2',
      address: "Bikini Bottom",
      reviewCount: 0,
      stars: 0,
      categoryId: 1,
      isOpen: true,
      userId: 4,
      longitude: '-91.84252',
      latitude: '26.10537',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Thug Tug',
      address: "Bikini Bottom",
      reviewCount: 0,
      stars: 0,
      categoryId: 2,
      isOpen: true,
      userId: 14,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Businesses', null, {});

  }
};
