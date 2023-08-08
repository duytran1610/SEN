'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // image: DataTypes.STRING,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // address: DataTypes.STRING,
    // sex: DataTypes.BOOLEAN,
    // typeRole: DataTypes.STRING,
    // keyRole: DataTypes.STRING
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      password: '123456',
      address: 'USA',
      sex: 'TRUE',
      typeRole: 'ROLE',
      keyRole: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
