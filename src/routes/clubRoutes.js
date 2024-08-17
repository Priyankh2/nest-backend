// routes/clubRoutes.js
const express = require("express");
const {
  createClub,
  updateClub,
  deleteClub,
  getAllClubs,
  getClubById,
  getClubMembers,
} = require("../controllers/clubController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createClub);
router.put("/:id", protect, updateClub);
router.delete("/:id", protect, deleteClub);
router.get("/", getAllClubs);
router.get("/:id", getClubById);
router.get("/:id/members", getClubMembers);

module.exports = router;
