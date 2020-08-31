import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Order = sequelize.define('Order', {
	id: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	userId: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	status: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	deliveryTime: {
		type: DataTypes.STRING,
		allowNull: false
	},
	amount: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	subtotal: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	discount: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	deliveryFee: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	deliveryAddress: {
		type: DataTypes.STRING,
		allowNull: false
	},
	date: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Order;