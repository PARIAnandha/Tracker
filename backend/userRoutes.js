const express = require('express');
const { getUsers, createUser } = require('./userController');
const router = express.Router();
 // Adjust the path if necessary

// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getUsers);


module.exports = router;
