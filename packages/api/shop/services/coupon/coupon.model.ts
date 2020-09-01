import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Coupon = sequelize.define('Coupon', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true
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
		type: DataTypes.BIGINT,
		allowNull: true
	},
	number_of_coupon: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	number_of_used_coupon: {
		type: DataTypes.BIGINT,
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