import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Vendors = sequelize.define('Vendors', {
	totalCount: {
		type: DataTypes.NUMBER,
		allowNull: false,
		defaultValue:  0,
	},
	hasMore: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Vendors;