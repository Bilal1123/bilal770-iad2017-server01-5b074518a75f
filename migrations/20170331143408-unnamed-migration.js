'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      queryInterface.addColumn(
        'user',
        'createdAt',{
          type: Sequelize.DATE
        }
      );

      queryInterface.addColumn(
        'user',
        'updatedAt',{
          type: Sequelize.DATE
        }
      );

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {

  queryInterface.removeColumn(
        'user',
        'createdAt');

 queryInterface.removeColumn(
        'user',
        'updatedAt');

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
