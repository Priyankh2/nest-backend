// controllers/clubController.js
const Club = require("../models/Club");

// Create a new club
exports.createClub = async (req, res) => {
  try {
    const club = new Club(req.body);
    await club.save();
    res.status(201).json(club);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a club
exports.updateClub = async (req, res) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(club);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a club
exports.deleteClub = async (req, res) => {
  try {
    await Club.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Club deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all clubs
exports.getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find({});
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single club by ID
exports.getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    res.status(200).json(club);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all members of a club
exports.getClubMembers = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id).populate("members");
    res.status(200).json(club.members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
