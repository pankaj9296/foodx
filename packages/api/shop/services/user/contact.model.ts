import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Contact = sequelize.define('Contact', {
	id: {
		type: DataTypes.STRING,
		allowNull: false
	},
	number: {
		type: DataTypes.STRING,
		allowNull: false
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Contact;