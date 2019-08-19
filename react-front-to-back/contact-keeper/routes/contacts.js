const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contact = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/contacts
// @desc    Add a new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a contact');
});

// @route   PUT api/contacts/:id
// @desc    Update a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
