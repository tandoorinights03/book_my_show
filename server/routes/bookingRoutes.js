const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/user");

const router = express.Router();

// Book a movie (Protected Route)
router.post("/book", authMiddleware, async (req, res) => {
  try {
    const { movieId, showtime, seats, totalPrice } = req.body;
    const user = await User.findById(req.user.userId);

    if (!user) return res.status(404).json({ msg: "User not found" });

    user.bookings.push({ movieId, showtime, seats, totalPrice });
    await user.save();

    res.json({ msg: "Booking confirmed", bookings: user.bookings });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
