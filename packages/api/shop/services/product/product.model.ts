import { DataTypes } from 'sequelize';
import sequelize from '../../../sequelize';

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(1024),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1024),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    salePrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    gallery: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    discountInPercent: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Product;
