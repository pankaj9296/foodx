import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const DeliveryDetails = sequelize.define('DeliveryDetails', {
	charge: {
		type: DataTypes.STRING,
		allowNull: false
	},
	maximumDistance: {
		type: DataTypes.STRING,
		allowNull: true
	},
	minimumOrder: {
		type: DataTypes.NUMBER,
		allowNull: true
	},
	isFree: {
		type: DataTypes.BOOLEAN,
		allowNull: true
	},
}, {
	timestamps: true,
});

export default DeliveryDetails;