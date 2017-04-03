/* jshint indent: 1 */
var sequelize = require('sequelize');
var dbConfig = require('../index');

function user(sequelize, DataTypes) {
	return sequelize.define('user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'user'
	});
};

module.exports = user(dbConfig.sequelize,dbConfig.sequelize.Sequelize);
