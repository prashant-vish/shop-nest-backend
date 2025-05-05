const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: {
    type: Number,
    min: [1, "Wrong min price"],
    max: [10000, "Wrong max price"],
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [1, "Wrong min discount"],
    max: [99, "Wrong max discount"],
  },
  rating: {
    type: Number,
    min: [1, "Wrong min Rating"],
    max: [5, "Wrong max rating"],
    default: 0,
  },
  stock: { type: Number, min: [0, "Wrong min Stock"], default: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true },
  deleted: { type: Boolean, default: false },
});

exports.Product = mongoose.model("Product", productSchema);
