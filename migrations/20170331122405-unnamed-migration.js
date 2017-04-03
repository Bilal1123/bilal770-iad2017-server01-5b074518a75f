'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.createTable('user',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING, 
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      }

    },
    {
      engine: 'InnoDB',                     // default: 'InnoDB'
      charset: 'latin1',                    // default: null
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
    queryInterface.dropTable("user");
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
