const express = require('express');
const { getContacts, postContact } = require('./contactController');
const router = express.Router();

// Route to get all contacts
router.get('/contacts', getContacts);

// Route to add a new contact
router.post('/contacts', postContact);

module.exports = router;
