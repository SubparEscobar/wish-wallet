// OAuth routes for Google authentication
// Using Passport.js to handle the OAuth flow

const express = require('express');
const passport = require('passport');
const authRouter = express.Router();

// Start Google OAuth - redirects to Google login
authRouter.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google redirects back here after user logs in
authRouter.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // User is logged in now
    res.json({
      success: true,
      message: 'Authentication successful',
      user: req.user
    });
  }
);

// Logout endpoint
authRouter.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Logout failed' });
    }
    res.json({ success: true, message: 'Logged out successfully' });
  });
});

// Check if user is logged in
authRouter.get('/status', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

module.exports = authRouter;

