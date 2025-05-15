import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  // this product we have to get from API body
  const product = new Product(req.body);

  try {
    const response = await product.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const fetchAllProducts = async (req, res) => {
  // this product we have to get from API body
  // here we need all query string
  const products = Product.find();

  try {
    const response = await product.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).json(error);
  }
};
