// controllers/notificationController.js
const Notification = require("../models/Notification");

// Send a notification
exports.sendNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get notifications for a user
exports.getNotificationsByUser = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mark notifications as read
exports.markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    notification.read = true;
    await notification.save();
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
