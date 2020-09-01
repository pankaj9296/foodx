import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const User = sequelize.define('User', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true,
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