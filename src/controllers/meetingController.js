// controllers/meetingController.js
const Meeting = require("../models/Meeting");

// Schedule a meeting
exports.scheduleMeeting = async (req, res) => {
  try {
    const meeting = new Meeting(req.body);
    await meeting.save();
    res.status(201).json(meeting);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a meeting
exports.updateMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(meeting);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a meeting
exports.deleteMeeting = async (req, res) => {
  try {
    await Meeting.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Meeting deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all meetings for a club
exports.getMeetingsByClub = async (req, res) => {
  try {
    const meetings = await Meeting.find({ club: req.params.clubId });
    res.status(200).json(meetings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
