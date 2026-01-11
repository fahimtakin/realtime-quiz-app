const passport = require("passport");

const GoogleStrategy = require("passport-google-oidc");

passport.use(new GoogleStrategy({
    clientID: process.env['GOOGLE_CLIENT_ID'],
    clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    callbackURL: 'https://www.example.com/oauth2/redirect/google'
  },
  async function(issuer, profile, cb) {
    // In production, this would be a database call
    const user = await User.findOne({ googleId: profile.id });
    if (user) {
      return cb(null, user);
    }
    const newUser = new User({
      googleId: profile.id,
      username: profile.displayName,
      email: profile.emails[0].value
    });
    await newUser.save();
    return cb(null, newUser);
  }
);