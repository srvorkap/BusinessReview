const express = require("express");
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Validating Signup Request Body
// validateSignup middleware
const validateSignup = [
    check('email')
      // .exists({ checkFalsy: true })
      // .withMessage('Email address is a required field.')
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      // .exists({ checkFalsy: true })
      // .withMessage('Username is a required field.')
      .isLength({ min: 4 })
      // .withMessage('Please provide a username with at least 4 characters.'),
      .withMessage('Username must be at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      // .exists({ checkFalsy: true })
      // .withMessage('Password is a required field.')
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];


// User signup API route: POST /api/users
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
  );

module.exports = router;
