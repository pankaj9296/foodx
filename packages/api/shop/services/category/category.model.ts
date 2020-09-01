import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Category = sequelize.define('Category', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true
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
		type: DataTypes.BIGINT,
		allowNull: true
	},
}, {
	timestamps: true,
});

export default Category;