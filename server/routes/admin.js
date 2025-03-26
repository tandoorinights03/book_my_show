const express = require('express');
const router = express.Router();

// Dummy Admin Panel Route
router.get('/', (req, res) => {
    res.json({ message: "Welcome to Admin Panel!" });
});

module.exports = router;
