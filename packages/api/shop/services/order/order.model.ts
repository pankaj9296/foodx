import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Order = sequelize.define('Order', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true,
	},
	status: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	deliveryTime: {
		type: DataTypes.DATE,
		allowNull: false
	},
	amount: {
		type: DataTypes.DOUBLE,
		allowNull: false
	},
	subtotal: {
		type: DataTypes.DOUBLE,
		allowNull: false
	},
	discount: {
		type: DataTypes.DOUBLE,
		allowNull: false
	},
	deliveryFee: {
		type: DataTypes.DOUBLE,
		allowNull: false
	},
	deliveryAddress: {
		type: DataTypes.STRING(5000),
		allowNull: false
	},
	date: {
		type: DataTypes.DATE,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Order;