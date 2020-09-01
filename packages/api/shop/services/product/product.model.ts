import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Product = sequelize.define('Product', {
	id: {
		type: DataTypes.BIGINT,
		allowNull: false,
		primaryKey: true,
	},
	slug: {
		type: DataTypes.STRING,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	salePrice: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	discountInPercent: {
		type: DataTypes.BIGINT,
		allowNull: true
	},
	weight: {
		type: DataTypes.STRING,
		allowNull: false
	},
	quantity: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
	total: {
		type: DataTypes.BIGINT,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Product;