
'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [{
      firstName: 'SpongeBob',
      lastName: 'SquarePants',
      email: 'SpongePants@email.com',
      hashedPassword: bcrypt.hashSync('Garry1!'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/qBuSu03.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
{
      firstName: 'Patrick',
      lastName: 'Star',
      email: 'Patrick@example.com',
      hashedPassword: bcrypt.hashSync('Star'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/kGHGVeW.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Squidward',
      lastName: 'Tentacles',
      email: 'ClarietGenius@email.com',
      hashedPassword: bcrypt.hashSync('SpongeBob!'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/TvDiEc5.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Eugene',
      lastName: 'Krabs',
      email: 'Money$$@email.com',
      hashedPassword: bcrypt.hashSync('MeMoney$$'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/5Gg1YPS.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Pearl',
      lastName: 'Krabs',
      email: 'DaddysGirl@email.com',
      hashedPassword: bcrypt.hashSync('WhaleLyfe'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/cgMsGLy.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Sandy',
      lastName: 'Cheeks',
      email: 'TexasSquirrel@email.com',
      hashedPassword: bcrypt.hashSync('TexasGirl!'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/HC6gd36.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Sheldon',
      lastName: 'Plankton',
      email: 'ChumBucket@email.com',
      hashedPassword: bcrypt.hashSync('SecretFormula!'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/0ziQR06.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Karen',
      lastName: 'Plankton',
      email: 'GreatestWife@email.com',
      hashedPassword: bcrypt.hashSync('Sheldon!'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/gf5DWAk.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Mrs. Poppy',
      lastName: 'Puff',
      email: 'BikiniBoatingSchool@email.com',
      hashedPassword: bcrypt.hashSync('BoatLyfe!'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/FMJQSvx.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Garold',
      lastName: 'Wilson',
      email: 'Meow@email.com',
      hashedPassword: bcrypt.hashSync('WorldDomination!'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/Gh2H2TF.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Mister',
      lastName: 'Weiner',
      email: 'M.Weiners@email.com',
      hashedPassword: bcrypt.hashSync('GoofyGoober!'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/NzjDats.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Reg',
      lastName: 'Spitoon',
      email: 'NoWeiniesAllowed!@email.com',
      hashedPassword: bcrypt.hashSync('SaltnNails'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/7p5YOUs.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Cyclops',
      lastName: 'Monster',
      email: 'Shell_City@email.com',
      hashedPassword: bcrypt.hashSync('GotTheCrown'),
      kelpingSince: new Date(),
      profileImg: 'https://i.imgur.com/Emg7If5.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Victor',
      lastName: 'Doe',
      email: 'Bubble-blowin-babies@email.com',
      hashedPassword: bcrypt.hashSync('NoBabies!'),
      kelpingSince: new Date(),
      profileImg: 'https://imgur.com/VBkAJsf',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },



  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      firstName: { [Op.in]: ['SpongeBob', 'Patrick', 'Squidward', 'Eugene', 'Pearl', 'Sandy', 'Sheldon', 'Karen',
       'Mrs. Poppy', 'Garold', 'Mister', 'Reg', 'Cyclops', 'Victor'] }
    }, {});
  }
};
