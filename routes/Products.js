import express from "express";
import { createProduct, fetchAllProducts } from "../controller/Products.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", fetchAllProducts);

export default router;
