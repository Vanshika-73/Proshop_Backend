import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct,createReview } from "../controllers/ProductController.js";
import { adminAuth } from "../middleware/authMiddleware.js";

const routes= Router();

routes.route("/").get(getProducts);
routes.post("/", adminAuth, createProduct);
routes.post("/reviews/:_id", createReview);
routes.route("/:_id").get(getProduct);
routes.put("/:_id", adminAuth, updateProduct);
routes.delete("/:_id", adminAuth, deleteProduct);
export default routes;