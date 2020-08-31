import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const VendorProduct = sequelize.define('VendorProduct', {
	id: {
		type: DataTypes.STRING,
		allowNull: false
	},
	vendorId: {
		type: DataTypes.STRING,
		allowNull: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	categories: {
		type: DataTypes.STRING,
		allowNull: true
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true
	},
	price: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default VendorProduct;