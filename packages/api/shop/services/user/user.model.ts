import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const User = sequelize.define('User', {
	id: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default User;