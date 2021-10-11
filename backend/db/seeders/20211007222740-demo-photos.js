//delete

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Photos', [{
      businessId: 1,
      title: 'Krusty Krab',
      alt: 'Krusty Krab store frot',
      url: 'https://i.imgur.com/qI2NnYR.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
      businessId: 1,
      title: 'Krusty Krab',
      alt: 'Krusty Krab kitchen',
      url: 'https://i.imgur.com/XQy9xqN.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 1,
      title: 'Krusty Krab',
      alt: 'Krusty Krab order window',
      url: 'https://i.imgur.com/DgLWTI5.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 2,
      title: 'Chum Bucket',
      alt: 'Chum Bucket store front',
      url: 'https://i.imgur.com/fcueLXl.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 3,
      title: 'Weenie Hut Franchise',
      alt: 'Weenie hut store front',
      url: 'https://i.imgur.com/yV1pjvy.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 3,
      title: 'Weenie Hut Franchise',
      alt: 'Weenie hut kitchen',
      url: 'https://i.imgur.com/pL7PLMF.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 4,
      title: 'Salty Spitoon',
      alt: 'Salty Spitoon store front',
      url: 'https://i.imgur.com/ypz7jqX.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 5,
      title: "Mrs. Puff's Boating School",
      alt: 'Boating School front',
      url: 'https://i.imgur.com/qVebttv.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 5,
      title: "Mrs. Puff's Boating School",
      alt: 'Boating School',
      url: 'https://i.imgur.com/XF6ZLjo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 5,
      title: "Mrs. Puff's Boating School",
      alt: 'Boating School',
      url: 'https://i.imgur.com/QMnAitg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 6,
      title: 'Shell City',
      alt: 'Shell City',
      url: 'https://i.imgur.com/Ce81dFH.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 6,
      title: 'Shell City',
      alt: 'Shell City',
      url: 'https://i.imgur.com/dKAalMe.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 6,
      title: 'Shell City',
      alt: 'Shell City',
      url: 'https://i.imgur.com/HKomggg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 7,
      title: 'Weenie Hut Jr',
      alt: 'Weenie Hut Jr',
      url: 'https://i.imgur.com/FnpKa0P.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 7,
      title: 'Weenie Hut Jr',
      alt: 'Weenie Hut Jr',
      url: 'https://i.imgur.com/mKXSWRI.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 7,
      title: 'Weenie Hut Jr',
      alt: 'Weenie Hut Jr',
      url: 'https://i.imgur.com/Qw9oOuL.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 8,
      title: 'Krusty Krab 2',
      alt: 'Krusty Krab 2',
      url: 'https://i.imgur.com/g2h1R5K.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 8,
      title: 'Krusty Krab 2',
      alt: 'Krusty Krab 2',
      url: 'https://i.imgur.com/BkM0cH9.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 8,
      title: 'Krusty Krab 2',
      alt: 'Krusty Krab 2',
      url: 'https://i.imgur.com/KFw8ur2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 9,
      title: 'Thug Tug',
      alt: 'Thug Tug',
      url: 'https://i.imgur.com/zUFJuDB.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      businessId: 9,
      title: 'Thug Tug',
      alt: 'Thug Tug',
      url: 'https://i.imgur.com/6IZajj6.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Photos', null, {});

  }
};
