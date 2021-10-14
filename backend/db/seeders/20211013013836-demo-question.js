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
    }, {
      businessId: 9,
      userId: 14,
      question: "Who blew that bubble!?",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 3,
      userId: 2,
      question: "Hello? Where’d everybody go? Did I miss something? Did you see my butt?",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 8,
      userId: 2,
      question: "Is mayonnaise an instrument?",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 2,
      userId: 6,
      question: "What in tarnation?",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 1,
      userId: 7,
      question: "It’s evil. It’s diabolical. It’s lemon-scented. This Plan Z can’t possibly fail! Can it?",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 6,
      userId: 2,
      question: "We should take Bikini Bottom and push it somewhere else!",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 3,
      userId: 1,
      question: "Look at all the hip young people eating sal-ads.",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 1,
      userId: 1,
      question: "You don’t need a license to drive a sandwich",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 8,
      userId: 3,
      question: "One hundred and one dollars for a Krabby Patty? ",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 6,
      userId: 3,
      question: "Do you have to stand so close? You’re making me claustrophobic!",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 8,
      userId: 2,
      question: "Oh come on SpongeBob! You know, I wumbo, You wumbo, He she me wumbo, wumbo, Wumboing, We'll have thee wumbo, Wumborama, Wumbology, The study of wumbo? It's first grade SpongeBob!",
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    } ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Questions', null, {});

  }
};
