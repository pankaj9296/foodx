import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Social = sequelize.define('Social', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true,
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