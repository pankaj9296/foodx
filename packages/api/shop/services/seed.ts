import Models from './models';
import loadCategories from './category/category.sample';
import { createProductSamples } from './product/product.sample';


Models.CategoryModel.truncate();

export const seed = async () => {
	console.log('RUNNING SEED');

	// categories
	await Models.CategoryModel.truncate({ cascade: true });
	await Models.GalleryModel.truncate({ cascade: true });
	await Models.OrderModel.truncate({ cascade: true });
	await Models.VendorModel.truncate({ cascade: true });
	await Models.ProductModel.truncate({ cascade: true });

	const categories = loadCategories();
	
	for (const category of categories) {
		if (category.type === 'grocery') {
			const rootCategory: any = await Models.CategoryModel.create(category);

			const childGroceryCategories = category.children?.filter((cc) => cc.type === 'grocery');

			if (childGroceryCategories && childGroceryCategories.length) {
				const cgc = await Promise.all(
					childGroceryCategories.map(async (cgc) => Models.CategoryModel.create(cgc))
				);

				rootCategory.setCategories(cgc);
			}
		}
	}

	//products
	const products = createProductSamples();

	for (const product of products) {
		const image = product.image;

		const [galleryModel] = await Models.GalleryModel.findOrCreate({
			where: {
				url: image,
			}	
		});

		const productModel:any = await Models.ProductModel.create({
			title: product.title.trim(),
			slug: product.slug.trim(),
			unit: product.unit.trim(),
			price: product.price,
			salePrice: product.salePrice,
			discountInPercent: product.discountInPercent,
			description: product.description.trim(),
			image: product.image,
			quantity: 10,
		});

		await productModel.setGalleries([
			galleryModel,
			galleryModel,
			galleryModel,
			galleryModel,
		]);

		const categoriesToAdd = await Promise.all(
			product.categories.map(({ slug }) => Models.CategoryModel.findOne({ where: { slug } }))
		);

		productModel.setCategories(categoriesToAdd.filter((c) => !!c));

		await productModel.save();
	}
}