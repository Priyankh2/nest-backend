// routes/bookRoutes.js
const express = require("express");
const {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBookById,
  filterBooks,
} = require("../controllers/bookController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, addBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.get("/filter", filterBooks);

module.exports = router;
