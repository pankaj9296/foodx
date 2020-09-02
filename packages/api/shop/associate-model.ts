import Models from './services/models';

Models.CategoryModel.hasMany(Models.CategoryModel);

Models.ProductModel.hasMany(Models.GalleryModel);
Models.ProductModel.hasMany(Models.CategoryModel);

Models.CouponModel.hasMany(Models.ProductModel);

Models.OrderModel.hasMany(Models.ProductModel);
Models.OrderModel.hasOne(Models.UserModel);

Models.UserModel.hasMany(Models.AddressModel);
Models.UserModel.hasMany(Models.CardModel);
Models.UserModel.hasMany(Models.ContactModel);

Models.VendorModel.hasMany(Models.ProductModel);