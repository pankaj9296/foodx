import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Payment = sequelize.define('Payment', {
	status: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Payment;