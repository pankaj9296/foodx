import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Vendor = sequelize.define('Vendor', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	slug: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	logoUrl: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	thumbnailUrl: {
		type: DataTypes.STRING,
		allowNull: false
	},
	previewUrl: {
		type: DataTypes.STRING,
		allowNull: false
	},
	slogan: {
		type: DataTypes.STRING,
		allowNull: true
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},
	address: {
		type: DataTypes.STRING,
		allowNull: true
	},
	promotion: {
		type: DataTypes.STRING,
		allowNull: true
	},
}, {
	timestamps: true,
});

export default Vendor;