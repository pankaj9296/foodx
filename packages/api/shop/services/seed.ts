import Models from './models';
import loadCategories from './category/category.sample';


Models.CategoryModel.truncate();

export const seed = async () => {
	console.log('RUNNING SEED');
	await Models.CategoryModel.truncate();
	const categories = loadCategories();
	
	for (const category of categories) {
		if (category.type === 'grocery') {
			const rootCategory: any = await Models.CategoryModel.create(category);

			const childGroceryCategories = category.children?.filter((cc) => cc.type === 'grocery');

			if (childGroceryCategories && childGroceryCategories.length) {
				Promise.all(
					childGroceryCategories.map(async (cgc: any) => {
						cgc.CategoryId = rootCategory.id;
						await Models.CategoryModel.create(cgc);
					})
				);
			}
		}
	}
}