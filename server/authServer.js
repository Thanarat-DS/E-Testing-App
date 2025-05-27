import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 8000;

app.use(cookieParser());
app.use(express.json());
// app.use(cors());
/*app.use(cors({
origin: '*',
credentials: true,
}));
app.options('*', cors());
*/

const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const allowedOrigins = [
  'https://e-testing.trrcane.com',
  'https://auth-e-testing.trrcane.com',
  'http://localhost',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

let refreshTokens = []

// ชั่วคราว
const users = [
  { username: "thanarat.sri", password: "123456" },
  { username: "user1", password: "password1" },
  { username: "sarawut", password: "1234"}
];

// เปลี่ยน Access Token ที่หมดอายุเป็นอันใหม่ด้วย Refresh Token
app.post('/api/token', (req, res) => {
  const refreshToken = req.body.token
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshToken.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name })
    res.json({ accessToken: accessToken })
  })
})

app.delete('/api/logout', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);

  refreshTokens = refreshTokens.filter(token => token !== refreshToken);
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.sendStatus(204)
})

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM user WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const user = rows[0];

    // สมมุติว่า password ใน DB ถูก hash แล้ว
    // const passwordMatch = await bcrypt.compare(password, user.password);

    // if (!passwordMatch) {
    //   return res.status(401).json({ error: 'Invalid username or password' });
    // }

    // ตรวจสอบ password แบบ plain-text
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const accessToken = generateAccessToken({ name: user.username });
    const refreshToken = generateRefreshToken({ name: user.username });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None"
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None"
    });

    res.json({ message: "Login successful" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/api/check-auth", (req, res) => {
  const accessToken = req.cookies.accessToken; // ✅ อ่าน accessToken จาก Cookies

  if (!accessToken) {
    return res.json({ authenticated: false });
  }

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.json({ authenticated: false });
    }
    
    res.json({ authenticated: true, user });
  });
});


function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m'});  
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15d' });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});