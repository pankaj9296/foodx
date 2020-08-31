import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Card = sequelize.define('Card', {
	id: {
		type: DataTypes.STRING,
		allowNull: false
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
		type: DataTypes.NUMBER,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Card;