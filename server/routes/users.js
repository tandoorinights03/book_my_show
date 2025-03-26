const express = require('express');
const router = express.Router();

// Dummy User Data
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

// GET /api/users - Fetch all users
router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;
