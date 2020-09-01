import Models from './services/models';

Models.CategoryModel.hasMany(Models.CategoryModel);

Models.ProductModel.hasMany(Models.GalleryModel);
Models.ProductModel.hasMany(Models.CategoryModel);

Models.CouponModel.hasMany(Models.ProductModel);

Models.OrderModel.hasMany(Models.ProductModel);

Models.UserModel.hasMany(Models.AddressModel);
Models.UserModel.hasMany(Models.CardModel);
Models.UserModel.hasMany(Models.ContactModel);

Models.VendorModel.hasOne(Models.DeliveryDetailsModel);
Models.VendorModel.hasMany(Models.ProductModel);