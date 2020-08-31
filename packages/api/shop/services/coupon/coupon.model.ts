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
}, {
	timestamps: true,
});

export default Coupon;