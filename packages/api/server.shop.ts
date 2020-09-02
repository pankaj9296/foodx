import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './shop/services/user/user.resolver';
import { ProductResolver } from './shop/services/product/product.resolver';
import { PaymentResolver } from './shop/services/payment/payment.resolver';
import { OrderResolver } from './shop/services/order/order.resolver';
import { CouponResolver } from './shop/services/coupon/coupon.resolver';
import { CategoryResolver } from './shop/services/category/category.resolver';
import { VendorResolver } from './shop/services/vendors/vendors.resolver';
import sequelize from './sequelize';
import { seed } from './shop/services/seed';

const app: express.Application = express();
const path = '/shop/graphql';
const PORT = process.env.PORT || 4000;
const main = async () => {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      ProductResolver,
      PaymentResolver,
      OrderResolver,
      CouponResolver,
      CategoryResolver,
      VendorResolver,
    ],
  });
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
  });
  apolloServer.applyMiddleware({ app, path });

  app.listen(PORT, async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      require('./shop/associate-model');

      if (process.env.SYNC_MODELS) {
        await sequelize.sync({ force: true });
      }
      if (process.env.RUN_SEED) {
        await seed();
      }
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }

    console.log(`started http://localhost:${PORT}${path}`);
  });
};

main();
