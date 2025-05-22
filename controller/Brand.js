import Brand from "../models/Brand.js";

export const  fetchBrands = async (req, res) => {
  try {
    const brands = await Brand.find({}).exec();
    res.status(200).json(brands);
  } catch (error) {
    res.status(400).json(err);
  }
};

export const createBrand = async (req, res) => {
  // this product we have to get from API body
  const brand = new Brand(req.body);

  try {
    const doc = await brand.save();
    res.status(201).send(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
