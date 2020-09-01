import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Payment = sequelize.define('Payment', {
	status: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Payment;