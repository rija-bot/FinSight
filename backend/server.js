
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MySQL connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// Session database store
const sessionStore = new MySQLStore({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  createDatabaseTable: true,
});

// Middleware
app.set('trust proxy', 1);

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

app.use(session({
  name: 'finsight.sid',
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.COOKIE_SECURE === 'true',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000,
  },
}));

// Backend test
app.get('/', (req, res) => {
  res.send('FinSight Backend Server is Running!');
});

// Database test
app.get('/api/db-test', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 AS connected');

    res.json({
      message: 'FinSight Database Connected Successfully!',
      database: rows[0].connected === 1,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Database connection failed.' });
  }
});

// Signup API
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Please fill in all fields.',
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: 'Password must be at least 8 characters.',
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const [existingUser] = await db.query(
      'SELECT id FROM users WHERE email = ?',
      [cleanEmail]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        message: 'This email is already registered.',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const [result] = await db.query(
      'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
      [name.trim(), cleanEmail, hashedPassword]
    );

    req.session.userId = result.insertId;
    req.session.save((error) => {
      if (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Session creation failed.' });
      }

      res.status(201).json({
        message: 'Account created successfully!',
        user: {
          id: result.insertId,
          name: name.trim(),
          email: cleanEmail,
        },
      });
    });
  } catch (error) {
    console.error('Signup error:', error.message);
    res.status(500).json({ message: 'Signup failed. Please try again.' });
  }
});

// Login API
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Please enter email and password.',
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    const [users] = await db.query(
      'SELECT * FROM users WHERE email = ?',
      [cleanEmail]
    );

    if (users.length === 0) {
      return res.status(401).json({
        message: 'Invalid email or password.',
      });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: 'Invalid email or password.',
      });
    }

    req.session.regenerate((error) => {
      if (error) {
        return res.status(500).json({ message: 'Login session failed.' });
      }

      req.session.userId = user.id;

      req.session.save((saveError) => {
        if (saveError) {
          return res.status(500).json({ message: 'Login session failed.' });
        }

        res.json({
          message: 'Login successful!',
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        });
      });
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Login failed. Please try again.' });
  }
});

// Check logged-in user
app.get('/api/auth/me', async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Not logged in.' });
    }

    const [users] = await db.query(
      'SELECT id, name, email FROM users WHERE id = ?',
      [req.session.userId]
    );

    if (users.length === 0) {
      return res.status(401).json({ message: 'User not found.' });
    }

    res.json({ user: users[0] });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Could not verify session.' });
  }
});

// Logout API
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Logout failed.' });
    }

    res.clearCookie('finsight.sid');
    res.json({ message: 'Logged out successfully.' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`FinSight server running on port ${PORT}`);
});
