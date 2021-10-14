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
    }, {
      userId: 8,
      businessId: 2,
      date: new Date(),
      review: 'The owner is a genius.',
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 5,
      businessId: 3,
      date: new Date(),
      review: "I love going here with my friends after school! Cheap enough since my daddy won't give me any money.",
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 14,
      businessId: 4,
      date: new Date(),
      review: "The thugs here are just a bunch of bubble blowin' babies.",
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      businessId: 5,
      date: new Date(),
      review: 'I passed my test in one try!',
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      businessId: 6,
      date: new Date(),
      review: 'Not enough water and the lamps are too hot.',
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      businessId: 6,
      date: new Date(),
      review: 'The owner is scary!',
      stars: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      businessId: 7,
      date: new Date(),
      review: "I'm a goofy goober, yeah!",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      businessId: 7,
      date: new Date(),
      review: "You're a goofy goober, yeah",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      businessId: 7,
      date: new Date(),
      review: "The barnacle brains here won't keep it down.",
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      businessId: 8,
      date: new Date(),
      review: 'I should have been manager!',
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 6,
      businessId: 9,
      date: new Date(),
      review: 'Not like Texas, but it will do',
      stars: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 10,
      businessId: 4,
      date: new Date(),
      review: 'Meow meow. Meow.',
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      businessId: 3,
      date: new Date(),
      review: 'The inner machinations of my mind are an enigma.',
      stars: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      businessId: 5,
      date: new Date(),
      review: "I'm ready, I'm ready.",
      stars: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      businessId: 3,
      date: new Date(),
      review: 'Two words, SpongeBob. Na. Chos.',
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      businessId: 2,
      date: new Date(),
      review: "I'm ugly and I'm proud!",
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 6,
      businessId: 6,
      date: new Date(),
      review: "Don’t you DARE take the name of Texas in vain.",
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 7,
      businessId: 1,
      date: new Date(),
      review: "Holographic Meatloaf? My favorite!",
      stars: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 4,
      businessId: 1,
      date: new Date(),
      review: "A five letter word for happiness…money.",
      stars: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      businessId: 5,
      date: new Date(),
      review:  "Fortunately, I have enough talent for all of you.",
      stars: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      businessId: 1,
      date: new Date(),
      review:  "I order the food, you cook the food. The customer gets the food. We do that for 40 years, and then we die.",
      stars: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
