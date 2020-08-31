import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Meta = sequelize.define('Meta', {
	publisher: {
		type: DataTypes.STRING,
		allowNull: false
	},
	isbn: {
		type: DataTypes.STRING,
		allowNull: false
	},
	edition: {
		type: DataTypes.STRING,
		allowNull: false
	},
	country: {
		type: DataTypes.STRING,
		allowNull: false
	},
	languages: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: false
	},
	numberOfReader: {
		type: DataTypes.STRING,
		allowNull: false
	},
	numberOfPage: {
		type: DataTypes.STRING,
		allowNull: false
	},
	samplePDF: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Meta;