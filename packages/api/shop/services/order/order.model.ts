import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Order = sequelize.define('Order', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true,
	},
	userId: {
		type: DataTypes.BIGINT,
		allowNull: false
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
		type: DataTypes.BIGINT,
		allowNull: false
	},
	subtotal: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	discount: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	deliveryFee: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	deliveryAddress: {
		type: DataTypes.STRING,
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