// controllers/discussionController.js
const Discussion = require("../models/Discussion");

// Create a discussion topic
exports.createDiscussion = async (req, res) => {
  try {
    const discussion = new Discussion(req.body);
    await discussion.save();
    res.status(201).json(discussion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a comment to discussion
exports.addComment = async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);
    discussion.comments.push(req.body);
    await discussion.save();
    res.status(200).json(discussion);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all discussions for a club
exports.getDiscussionsByClub = async (req, res) => {
  try {
    const discussions = await Discussion.find({ club: req.params.clubId });
    res.status(200).json(discussions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
