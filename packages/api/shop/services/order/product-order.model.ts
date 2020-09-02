import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const ProductOrder = sequelize.define('ProductOrder', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	}
});

export default ProductOrder;