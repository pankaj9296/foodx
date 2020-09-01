import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Contact = sequelize.define('Contact', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true,
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