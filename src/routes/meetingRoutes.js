// routes/meetingRoutes.js
const express = require("express");
const {
  scheduleMeeting,
  updateMeeting,
  deleteMeeting,
  getMeetingsByClub,
} = require("../controllers/meetingController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, scheduleMeeting);
router.put("/:id", protect, updateMeeting);
router.delete("/:id", protect, deleteMeeting);
router.get("/club/:clubId", getMeetingsByClub);

module.exports = router;
