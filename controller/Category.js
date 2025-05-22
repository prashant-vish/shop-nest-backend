import Category from "../models/Category.js";

export const fetchCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(err);
  }
};

export const createCategory = async (req, res) => {
  // this product we have to get from API body
  const category = new Category(req.body);

  try {
    const doc = await category.save();
    res.status(201).send(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
