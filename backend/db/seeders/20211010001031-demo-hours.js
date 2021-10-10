'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Hours', [{
      businessId: 1,
      monHours: '10am - 9pm',
      tueHours: '10am - 9pm',
      wedHours: '10am - 9pm',
      thurHours: '10am - 9pm',
      friHours: '10am - 10pm',
      satHours: '10am - 10pm',
      sunHours: '10am - 9pm',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 2,
      monHours: '9am - 10pm',
      tueHours: '9am - 10pm',
      wedHours: '9am - 10pm',
      thurHours: '9am - 10pm',
      friHours: '10am - 10pm',
      satHours: '10am - 10pm',
      sunHours: '9am - 10pm',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 3,
      monHours: '12pm - 8pm',
      tueHours: '12pm - 8pm',
      wedHours: '12pm - 8pm',
      thurHours: '12pm - 8pm',
      friHours: '12pm - 8pm',
      satHours: '12pm - 8pm',
      sunHours: '12pm - 8pm',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 4,
      monHours: '6pm - 1am',
      tueHours: '6pm - 1am',
      wedHours: '6pm - 1am',
      thurHours: '6pm - 1am',
      friHours: '6pm - 2am',
      satHours: '6pm - 2am',
      sunHours: '6pm - 1am',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 5,
      monHours: '8am - 5pm',
      tueHours: '8am - 5pm',
      wedHours: '8am - 5pm',
      thurHours: '8am - 5pm',
      friHours: '8am - 5pm',
      satHours: 'closed',
      sunHours: 'closed',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 6,
      monHours: '9am - 5pm',
      tueHours: '9am - 5pm',
      wedHours: '9am - 5pm',
      thurHours: '9am - 5pm',
      friHours: '9am - 5pm',
      satHours: '9am - 5pm',
      sunHours: 'closed',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 7,
      monHours: '10am - 6pm',
      tueHours: '10am - 6pm',
      wedHours: '10am - 6pm',
      thurHours: '10am - 6pm',
      friHours: '10am - 6pm',
      satHours: '10am - 6pm',
      sunHours: '10am - 6pm',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 8,
      monHours: 'Permanently Closed',
      tueHours: 'Permanently Closed',
      wedHours: 'Permanently Closed',
      thurHours: 'Permanently Closed',
      friHours: 'Permanently Closed',
      satHours: 'Permanently Closed',
      sunHours: 'Permanently Closed',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      businessId: 9,
      monHours: '6pm - 1am',
      tueHours: '6pm - 1am',
      wedHours: '6pm - 1am',
      thurHours: '6pm - 1am',
      friHours: '6pm - 2am',
      satHours: '6pm - 2am',
      sunHours: '6pm - 1am',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Hours', null, {});
  }
};
