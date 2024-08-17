// routes/discussionRoutes.js
const express = require("express");
const {
  createDiscussion,
  addComment,
  getDiscussionsByClub,
} = require("../controllers/discussionController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, createDiscussion);
router.post("/:id/comment", protect, addComment);
router.get("/club/:clubId", getDiscussionsByClub);

module.exports = router;
