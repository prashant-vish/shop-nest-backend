import express from "express";
import { createCategory, fetchCategories } from "../controller/Category.js";

const router = express.Router();
// categories is already added in base path.
router.post("/", createCategory);
router.get("/", fetchCategories);

export default router;
