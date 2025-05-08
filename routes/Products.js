import express from "express";
import { createProduct } from "../controller/Products.js";

const router = express.Router();

router.post("/", createProduct);

export default router;
