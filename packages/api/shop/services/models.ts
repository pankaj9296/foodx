import CategoryModel from './category/category.model';

import CouponModel from './coupon/coupon.model';

import OrderModel from './order/order.model';
import OrderProductModel from './order/orderProduct.model';

import PaymentModel from './payment/payment.model';

import ProductModel from './product/product.model';
import MetaModel from './product/meta.model';
import AuthorModel from './product/author.model';
import GalleryModel from './product/gallery.model';
import SocialModel from './product/social.model';

import UserModel from './user/user.model';
import AddressModel from './user/address.model';
import CardModel from './user/card.model';
import ContactModel from './user/contact.model';

import DeliveryDetailsModel from './vendors/deliveryDetails.model';
import VendorProductModel from './vendors/vendorProduct.model';
import VendorModel from './vendors/vendor.model';
import VendorsModel from './vendors/vendors.model';

const Models = {
	CategoryModel,

	CouponModel,

	OrderModel,
	OrderProductModel,

	PaymentModel,

	ProductModel,
	AuthorMetaModel: MetaModel,
	AuthorModel,
	GalleryModel,
	SocialModel,

	UserModel,
	AddressModel,
	CardModel,
	ContactModel,

	DeliveryDetailsModel,
	VendorProductModel,
	VendorModel,
	VendorsModel,
};

export default Models;