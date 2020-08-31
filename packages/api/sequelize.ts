import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
	process.env.POSTGRES_DATABASE || 'foodx',
	process.env.POSTGRES_USERNAME || 'postgres',
	process.env.POSTGRES_PASSWORD || 'root',
	{
		host: 'localhost',
		dialect: 'postgres'
	}
);

export default sequelize;