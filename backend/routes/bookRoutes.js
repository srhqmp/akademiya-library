import express from "express";
import {
  getAllBooks,
  getAvailableBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook,
} from "../controllers/bookController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getAllBooks);
router.route("/available").get(getAvailableBooks);
router.route("/:id").get(getBook);
router.route("/").post(protect, addBook);
router.route("/:id").put(protect, updateBook);
router.route("/:id").delete(protect, deleteBook);
router.route("/borrow/:id").post(protect, borrowBook);
router.route("/return/:id").post(protect, returnBook);

export default router;
