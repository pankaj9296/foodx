import { DataTypes } from 'sequelize';
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
		type: DataTypes.BIGINT,
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