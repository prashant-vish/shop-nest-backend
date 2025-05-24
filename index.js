import express from "express";
import mongoose from "mongoose";

import productRouter from "./routes/Products.js";
import categoriesRouter from "./routes/Categories.js";
import brandsRouter from "./routes/Brands.js";
import cors from "cors";
const server = express();

server.use(cors());

server.use(express.json()); // to parse req.body
server.use("/products", productRouter);
server.use("/categories", categoriesRouter);
server.use("/brands", brandsRouter);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ecommerce");
  console.log("database connected");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});
// server.post("/products", createProduct);

server.listen(8080, () => {
  console.log("Server is running at 8080 port");
});
