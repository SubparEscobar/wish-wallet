// Passport config for Google OAuth
// This sets up how we authenticate users with Google

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configure Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || "/auth/google/callback"
},
  (accessToken, refreshToken, profile, done) => {
    // TODO: Save user to database here
    // For now just returning the profile info
    return done(null, {
      id: profile.id,
      email: profile.emails[0].value,
      name: profile.displayName,
      photo: profile.photos[0].value
    });
  }
));

// Save user to session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Get user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;

