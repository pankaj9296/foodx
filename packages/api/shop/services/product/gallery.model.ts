import { DataTypes } from 'sequelize/types';
import sequelize from '../../../sequelize';

const Gallery = sequelize.define('Gallery', {
	url: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
});

export default Gallery;