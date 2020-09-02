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
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	image: {
		type: DataTypes.STRING,
		allowNull: true
	},
	discountInPercent: {
		type: DataTypes.DOUBLE,
		allowNull: true,
		validate: {
			min: 0,
			max: 100,
		}
	},
	number_of_coupon: {
		type: DataTypes.BIGINT,
		allowNull: false,
		validate: {
			min: 1,
		}
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
		defaultValue: "active",
	},
	expiration_date: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: () => new Date(),
	},
}, {
	timestamps: true,
});

export default Coupon;