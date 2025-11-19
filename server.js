// Main server file for Wish Wallet
// Setting up Express with HTTPS, CORS, OAuth, and file uploads

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const passport = require('./config/passport');

// Routes
const incomeRouter = require('./routes/incomeRouter');
const expenseRouter = require('./routes/expenseRouter');
const wishRouter = require('./routes/wishRouter');
const authRouter = require('./routes/authRouter');
const uploadRouter = require('./routes/uploadRouter');

const app = express();

// CORS setup - needed so frontend can talk to backend
// Had to enable credentials for OAuth to work
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'https://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Middleware
app.use(morgan('dev')); // Logs requests to console
app.use(bodyParser.json()); // Parse JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data

// Session config for OAuth - stores user login info
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // HTTPS only
    httpOnly: true, // Can't access from JS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Passport for Google OAuth
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/incomes', incomeRouter);
app.use('/expenses', expenseRouter);
app.use('/wishes', wishRouter);
app.use('/auth', authRouter);
app.use('/upload', uploadRouter);

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check - just to see if server is up
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// HTTPS setup - loading the certificates we generated
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};

const port = process.env.PORT || 3002;
const httpsPort = process.env.HTTPS_PORT || 3443;

// Start HTTPS server
https.createServer(httpsOptions, app).listen(httpsPort, () => {
  console.log(`HTTPS Server running on port ${httpsPort}`);
  console.log(`Access the server at https://localhost:${httpsPort}`);
});

// Also start HTTP server in dev mode (for testing)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`HTTP Server running on port ${port} (redirect to HTTPS)`);
  });
}
