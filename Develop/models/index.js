// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");
const { transformGeom2D } = require("ol/geom/SimpleGeometry");

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: "category_id" });
// Categories have many Products
Category.hasMany(Product, { foreignKey: "category_id" });
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "tag_products",
  foreignKey: "product_id",
});
// Tags belongToMany Products (through ProductTag)
transformGeom2D.belongsToMany(Products, {
  through: ProductTag,
  as: "tag_products",
  foreignKey: "tag_id",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
