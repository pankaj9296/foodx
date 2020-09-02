import { Resolver, Query, Arg, Int } from 'type-graphql';
import ArrayToTree from 'array-to-tree';
import { Model } from 'sequelize';
import loadCategories from './category.sample';
import Category from './category.type';
import Models from '../models';

@Resolver()
export class CategoryResolver {
  private readonly items: Category[] = loadCategories();

  @Query(() => [Category], { description: 'Get all the categories' })
  async categories(
    @Arg('type', type => String) type: string
  ): Promise<any[]> {
    const rootCategories = await Models.CategoryModel.findAll({
      where: {
        type
      }
    });

    const rootCategoriesJSONArray = rootCategories.map((rootCategory) => rootCategory.toJSON());

    return ArrayToTree(
      rootCategoriesJSONArray,
      {
        customID: 'id',
        parentProperty: "CategoryId"
      }
    );
  }

  @Query(() => Category)
  async category(
    @Arg('id', type => Int) id: number
  ): Promise<any> {
    const rootCategory: any = await Models.CategoryModel.findOne({
      where: {
        id,
      }
    });

    if (rootCategory) {
      const rootCategoryJSON = rootCategory.toJSON();
      const childCategories = await rootCategory.getCategories();
      const childCategoriesJSON = childCategories.map((cc: any) => cc.toJSON());

      rootCategoryJSON.children = childCategoriesJSON;

      return rootCategoryJSON;
    }
    else {
      return null;
    }

    return await this.items.find(item => item.id === id);
  }
}
