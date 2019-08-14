const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a users
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Email must be valid').isEmail(),
    check('password', 'Password must be 5 or more characters').isLength({
      min: 5
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    return res.json(user);
  }
);

module.exports = router;
