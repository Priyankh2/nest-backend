// routes/notificationRoutes.js
const express = require("express");
const {
  sendNotification,
  getNotificationsByUser,
  markAsRead,
} = require("../controllers/notificationController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, sendNotification);
router.get("/", protect, getNotificationsByUser);
router.put("/:id/read", protect, markAsRead);

module.exports = router;
