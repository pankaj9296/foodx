import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';
import { ProductType } from './product.enum';

const Product = sequelize.define('Product', {
	id: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	slug: {
		type: DataTypes.STRING,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	type: {
		type: DataTypes.ENUM({
			values: [
				ProductType.BOOK,
				ProductType.BAGS,
				ProductType.GROCERY,
				ProductType.MEDICINE,
				ProductType.CLOTH,
				ProductType.CLOTHING,
				ProductType.FURNITURE,
				ProductType.MAKEUP,
			]
		}),
		allowNull: false
	},
	unit: {
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
		type: DataTypes.NUMBER,
		allowNull: false
	},
	salePrice: {
		type: DataTypes.NUMBER,
		allowNull: false
	},
	discountInPercent: {
		type: DataTypes.NUMBER,
		allowNull: true
	},
}, {
	timestamps: true,
});

export default Product;