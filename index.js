import express from "express";
import mongoose from "mongoose";
import { createProduct } from "./controller/Products.js";

const server = express();

server.use(express.json()); // to parse req.body

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/ecommerce");
  console.log("database connected");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});
server.post("/products", createProduct);

server.listen(8080, () => {
  console.log("Server is running at 8080 port");
});
