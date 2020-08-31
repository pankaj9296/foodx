import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Category = sequelize.define('Category', {
	id: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false
	},
	icon: {
		type: DataTypes.STRING,
		allowNull: true
	},
	slug: {
		type: DataTypes.STRING,
		allowNull: false
	},
	itemCount: {
		type: DataTypes.NUMBER,
		allowNull: true
	},
}, {
	timestamps: true,
});

export default Category;