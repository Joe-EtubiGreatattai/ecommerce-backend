// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route to authenticate user
router.post('/login', authController.authenticateUser);

module.exports = router;
