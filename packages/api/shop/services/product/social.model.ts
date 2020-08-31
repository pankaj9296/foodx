import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Social = sequelize.define('Social', {
	id: {
		type: DataTypes.STRING,
		allowNull: false
	},
	media: {
		type: DataTypes.STRING,
		allowNull: false
	},
	profileLink: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Social;