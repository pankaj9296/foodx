import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Coupon = sequelize.define('Coupon', {
	id: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	code: {
		type: DataTypes.STRING,
		allowNull: false
	},
	image: {
		type: DataTypes.STRING,
		allowNull: true
	},
	discountInPercent: {
		type: DataTypes.NUMBER,
		allowNull: true
	},
	number_of_coupon: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	number_of_used_coupon: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	status: {
		type: DataTypes.ENUM({
			values: [
				"active",
				"revoked"
			]
		}),
		allowNull: false,
	},
	expiration_date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
}, {
	timestamps: true,
});

export default Coupon;