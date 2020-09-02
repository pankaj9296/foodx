import { Resolver, Query, Arg, Int, ObjectType } from 'type-graphql';
import { createProductSamples } from './product.sample';
import Product, { ProductResponse } from './product.type';
import { filterItems, getRelatedItems } from '../../helpers/filter';
import Models from '../models';

@Resolver()
export class ProductResolver {
  private readonly items: Product[] = createProductSamples();

  @Query(() => ProductResponse, { description: 'Get all the products' })
  async products(
    @Arg('limit', (type) => Int, { defaultValue: 10 }) limit: number,
    @Arg('offset', (type) => Int, { defaultValue: 0 }) offset: number,
    @Arg('type', { nullable: true }) type?: string,
    @Arg('text', { nullable: true }) text?: string,
    @Arg('category', { nullable: true }) category?: string
  ): Promise<ProductResponse> {
    const total = this.items.length;
    const filteredData = filterItems(
      this.items,
      limit,
      offset,
      text,
      type,
      category
    );
    const query: any = {};
    text && (query.text = text);
    type && (query.type = type);
    category && (query.category = category);
    const a = await Models.CategoryModel.findAll({
      where: query,
      include: [Models.UserModel],
    });
    return new ProductResponse({
      total: total,
      ...filteredData,
    });
  }

  @Query(() => Product)
  async product(
    @Arg('slug', (type) => String) slug: string
  ): Promise<Product | undefined> {
    return await this.items.find((item) => item.slug === slug);
  }

  @Query(() => [Product], { description: 'Get the Related products' })
  async relatedProducts(
    @Arg('slug', (slug) => String) slug: string,
    @Arg('type', { nullable: true }) type?: string
  ): Promise<any> {
    const relatedItem = await getRelatedItems(type, slug, this.items);
    return relatedItem;
  }
}
