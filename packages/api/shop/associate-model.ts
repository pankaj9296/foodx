import Models from './services/models';

Models.CategoryModel.hasMany(Models.CategoryModel);

Models.ProductModel.hasMany(Models.GalleryModel);
Models.ProductModel.hasMany(Models.CategoryModel);

Models.CouponModel.hasMany(Models.ProductModel);

Models.OrderModel.belongsToMany(Models.ProductModel, { through: Models.ProductOrderModel });
Models.OrderModel.belongsTo(Models.UserModel);

Models.UserModel.hasMany(Models.AddressModel);
Models.UserModel.hasMany(Models.CardModel);
Models.UserModel.hasMany(Models.ContactModel);
Models.UserModel.hasMany(Models.OrderModel);

Models.VendorModel.hasMany(Models.ProductModel);