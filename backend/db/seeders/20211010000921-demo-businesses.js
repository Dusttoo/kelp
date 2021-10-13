'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Businesses', [{
      name: 'The Krusty Krab',
      address: "Bikini Bottom",
      description: "The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. It is also the most popular restaurant in Bikini Bottom. Famous for its Krabby Patty burgers, it is a rival to Plankton's highly unpopular across-the-street restaurant called the Chum Bucket.",
      image: 'https://i.imgur.com/qI2NnYR.png',
      categoryId: 1,
      userId: 4,
      longitude: '-91.87911',
      latitude: '26.11367',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'The Chum Bucket',
      address: "Bikini Bottom",
      description: "The Chum Bucket is an unsuccessful fast food restaurant that is located right across the street from the Krusty Krab. It is owned by Sheldon J. and Karen Plankton, where they both reside. ",
      image: 'https://i.imgur.com/fcueLXl.jpg',
      categoryId: 1,
      userId: 7,
      longitude: '-91.72288',
      latitude: '25.88779',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Weenie Hut Franchise',
      address: "Bikini Bottom",
      description: "It is a restaurant intended for wimps and nerds, and has a menu suited for them.",
      image: 'https://i.imgur.com/yV1pjvy.png',
      categoryId: 1,
      userId: 11,
      longitude: '-92.36558',
      latitude: '26.23322',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'The Salty Spitoon',
      address: "Goo Lagoon",
      description: "The Salty Spitoon is a restaurant/bar for tough fish.",
      image: 'https://i.imgur.com/ypz7jqX.jpg',
      categoryId: 2,
      userId: 12,
      longitude: '-92.46995',
      latitude: '25.66025',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Mrs. Puff's Boating School",
      address: "Bikini Bottom",
      description: "Mrs. Puff's Boating School is Bikini Bottom's local boat-driving school, where Mrs. Puff teaches students how to drive. Her school is run more like an elementary school classroom than a driver's education facility.",
      image: 'https://i.imgur.com/qVebttv.png',
      categoryId: 3,
      userId: 9,
      longitude: '-92.02929',
      latitude: '25.81892',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Shell City',
      address: "Shell City",
      description: "Shell City Marine Gifts and Sundries, known primarily as Shell City, is the gift shop that held King Neptune's crown in The SpongeBob SquarePants Movie. It is owned by the Cyclops.",
      image: 'https://i.imgur.com/Ce81dFH.png',
      categoryId: 4,
      userId: 13,
      longitude: '-96.76145',
      latitude: '28.15715',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Weenie Hut Jr.',
      address: "Bikini Bottom",
      description: "Weenie Hut Jr's is a restaurant located in Bikini Bottom. It has two other counterparts, Super Weenie Hut Jr's and Weenie Hut General.",
      image: 'https://i.imgur.com/FnpKa0P.png',
      categoryId: 1,
      userId: 11,
      longitude: '-92.36437',
      latitude: '26.0807',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'The Krusty Krab 2',
      address: "Bikini Bottom",
      description: "The Krusty Krab 2 is a restaurant founded by Eugene H. Krabs that serves as a duplicate of the original Krusty Krab.",
      image: 'https://i.imgur.com/g2h1R5K.png',
      categoryId: 1,
      userId: 4,
      longitude: '-91.84252',
      latitude: '26.10537',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Thug Tug',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 14,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Test',
      address: "Bikini Bottom",
      description: "The Thug Tug is a bar that first appears in The SpongeBob SquarePants Movie. The bar is located outside the city limits of Bikini Bottom and was frequented by hardened criminals.",
      image: 'https://i.imgur.com/zUFJuDB.png',
      categoryId: 2,
      userId: 1,
      longitude: '-94.11706',
      latitude: '26.13191',
      createdAt: new Date(),
      updatedAt: new Date()
    },]
, {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Businesses', null, {});

  }
};
