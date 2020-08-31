import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const OrderProduct = sequelize.define('OrderProduct', {
	id: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	weight: {
		type: DataTypes.STRING,
		allowNull: false
	},
	quantity: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	total: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default OrderProduct;