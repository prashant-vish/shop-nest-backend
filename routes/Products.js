import express from "express";
import { createProduct, fetchAllProducts, fetchProductById } from "../controller/Products.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", fetchAllProducts);
router.get("/:id",fetchProductById);

export default router;
