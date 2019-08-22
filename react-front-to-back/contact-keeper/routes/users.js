const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a new user
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

    const { name, email, password } = req.body;

    try {
      // Check if the user is already registered.
      let user = await User.findOne({ email });

      if (user) {
        return res.status(422).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password
      });

      // Encrypt the password before sending to the database.
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Push to the database.
      await user.save();

      // Generate a web token to send to the user.
      // This uses the id generated by MongoDB.
      const payload = {
        user: {
          id: user.id
        }
      };

      // Use the secret set in the config. (This can be anything.)
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;