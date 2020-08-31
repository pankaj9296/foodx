import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Author = sequelize.define('Author', {
	id: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	avatar: {
		type: DataTypes.STRING,
		allowNull: false
	},
	bio: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	website: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Author;