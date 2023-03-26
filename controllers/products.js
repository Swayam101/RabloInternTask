const {createHash } = require("crypto");


const asyncWrapper = require("../utils/asyncWrapper");
const Product = require("../models/Product.js");
const { StatusCodes } = require("http-status-codes");

exports.postAddProduct = asyncWrapper(async (req, res, next) => {
  console.log("POST @ Add Products");
  const { name, price, featured, rating, company} = req.body;
  const productId = createHash('sha512').update(name).digest('hex')
  const createdProduct = await Product.create({
    productId,
    name,
    price,
    featured,
    rating,
    company,
  });
  console.log("Product Created!");
  res.status(StatusCodes.CREATED).json({
    data: { createdProduct },
    message: "Product Listed Successfully!",
  });
});

exports.getAllProducts = asyncWrapper(async (req, res, next) => {
  const allProducts = await Product.find();
  console.log("Get @ all-products");
  res.json({ message: "All Products Fetched!", data: { allProducts } });
});

exports.postUpdateProduct = asyncWrapper(async (req, res, next) => {
  const { name, price, featured, rating, company, productId } = req.body.data;
  const newProduct = { name, price, featured, rating, company, productId };
  const oldProduct = await Product.findOneAndUpdate({ productId }, newProduct);

  const updatedProduct = await Product.findOne({ name });
  res
    .status(StatusCodes.ACCEPTED)
    .json({ message: "Product Updated Succesfully", data: { updatedProduct } });
});

exports.postDeleteProduct = asyncWrapper(async (req, res, next) => {
  const { productId } = req.body.data;

  const oldProduct = await Product.findOneAndDelete({ productId });

  res
    .status(204)
    .json({ message: "Product Updated Succesfully", data: { oldProduct } });
});

exports.getFeaturedProducts = asyncWrapper(async (req, res, next) => {
  const featuredProducts = await Product.find({ featured: true });

  res
    .status(StatusCodes.ACCEPTED)
    .json({
      message: "Featured Products Fetched!",
      data: { featuredProducts },
    });
});



exports.getFilteredProducts = asyncWrapper(async (req, res, next) => {
  var productFilter = {};
  console.log(req.query);

  if (req.query.price_lt) {
    productFilter.price = productFilter.price || {};
    productFilter.price.$lt = req.query.price_lt;
  } 
  if (req.query.rating_gt) {
    productFilter.rating = productFilter.rating || {};
    productFilter.rating.$gt = req.query.rating_gt;
  }

  const filteredProducts = await Product.find(productFilter);
  

  res
    .status(StatusCodes.ACCEPTED)
    .json({
      message: "Filtered Products Fetched!",
      data: { filteredProducts },
    });
});
