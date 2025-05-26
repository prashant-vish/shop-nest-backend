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
  // filter ={"category":["smartphone","beauty"],"brand":["apple","acer"]}
  // sort ={"_sort":"price"}
  // pagination ={_page:1,_per_page:1}
  // Todo : We have to try with multiple Category and brand after change in frontend.
  console.log("hellow");

  let query = Product.find({});
  let totalProductsQuery = Product.find({});

  if (req.query.category) {
    query = query.find({ category: req.query.category });
    totalProductsQuery = totalProductsQuery.find({
      category: req.query.category,
    });
  }

  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
    totalProductsQuery = totalProductsQuery.find({ brand: req.query.brand });
  }
  if (req.query._sort && req.query._order) {
    totalProductsQuery = totalProductsQuery.sort({
      [req.query._sort]: req.query._order,
    });
  }
  const totalDocs = await totalProductsQuery.countDocuments().exec();
  console.log({ totalDocs });

  if (req.query._page && req.query._per_page) {
    const pageSize = req.query._per_page;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(201).send(docs);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const fetchProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
};
