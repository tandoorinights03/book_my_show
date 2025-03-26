const express = require("express");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/user");

const router = express.Router();

// 🟢 User Signup Route
router.post("/signup", [
    check("email", "Valid email is required").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
], async (req, res) => {
    console.log("🟢 Signup request received:", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("🔴 Validation errors:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            console.log("🔴 User already exists:", user);
            return res.status(400).json({ msg: "User already exists" });
        }

        console.log("🟠 Creating new user...");
        user = new User({ name: email.split("@")[0], email, password }); // Store password as plain text
        await user.save();
        console.log("🟢 User created successfully:", user);

        // Generate JWT Token
        const token = jwt.sign({ userId: user.id, role: user.role }, "secret_key", { expiresIn: "1h" });
        console.log("🟢 JWT Token generated");

        res.status(201).json({ success: true, token, user: { name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        console.error("🔴 Server Error:", error);
        res.status(500).send("Server Error");
    }
});

// 🟢 User Login Route
router.post("/login", [
    check("email", "Valid email is required").isEmail(),
    check("password", "Password is required").exists(),
], async (req, res) => {
    console.log("🟢 Login request received:", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("🔴 Validation errors:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        console.log("🔵 User found in DB:", user);

        if (!user) {
            console.log("🔴 User not found");
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Direct password comparison
        if (password !== user.password) {
            console.log("🔴 Incorrect password");
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign({ userId: user.id, role: user.role }, "secret_key", { expiresIn: "1h" });
        console.log("🟢 JWT Token generated");

        res.json({ success: true, token, user: { name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        console.error("🔴 Server Error:", error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
