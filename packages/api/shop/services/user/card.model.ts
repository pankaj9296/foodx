import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Card = sequelize.define('Card', {
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
	cardType: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastFourDigit: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Card;