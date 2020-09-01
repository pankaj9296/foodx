import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Address = sequelize.define('Address', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	info: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Address;