import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import passwordsFeature from '@adminjs/passwords';
import bcrypt from 'bcrypt';
import { Components, componentLoader } from './components/components.js'
import mysql from 'mysql2/promise';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { sequelize, Department } from './model.js';

import { userResource } from './resources/user.js';
import { departmentResource } from './resources/department.js';
import { topicResource } from './resources/topic.js';
import { topicSiteResource } from './resources/junction_topicSite.js';
import { topicSiteDepartmentResource } from './resources/junction_topicSiteDepartment.js';
import { questionResource } from './resources/question.js';
import { scoreResource } from './resources/score.js';
import { adminLocale } from './admin-locale.js';

const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const { Database, Resource } = AdminJSSequelize;
AdminJS.registerAdapter({ Database, Resource });

const adminJs = new AdminJS({
  rootPath: '/admin',
  componentLoader,
  resources: [
    userResource,
    departmentResource,
    questionResource,
    topicSiteResource,
    topicSiteDepartmentResource,
    topicResource,
    scoreResource,
  ],
  pages: {
    'grouped-questions': {
      label: 'Grouped Questions',
      component: Components.GroupedQuestionsPage,
      handler: async (request, response, context) => {
        const [results] = await sequelize.query(`
          SELECT topic_code, COUNT(*) AS total
          FROM question
          GROUP BY topic_code
        `)
        /* for debug */
        // console.log("🧪 Sending from handler:", results)
      
        return results
      }
    },
    'topic-config': {
      label: 'Topic Config',
      component: Components.TopicConfig,
      handler: async (request, response, context) => {
        if (request.method === 'get') {
          const [topicCodes] = await sequelize.query(`
            SELECT DISTINCT topic_code FROM question
          `);

          const departments = await Department.findAll();
          
          /* for debug */
          console.log("🧪 Sending from handler:", departments.map(dep => dep.toJSON()))
          return {
            topicCodes: topicCodes.map(row => row.topic_code),
            departments: departments.map(dep => dep.toJSON()),
          };
        }
        
        // POST: บันทึก config
        if (request.method === 'post') {
          const { topic_code, config } = request.payload;

          // ตัวอย่าง สมมติ config เป็น object แล้วคุณจะบันทึกลง database
          // คุณต้องเขียน logic insert/update ตาม schema ของคุณเอง
          // ตัวอย่าง:
          /*
          for (const site in config) {
            const { type, time_limit, dept_ids } = config[site];
            // update or insert into topicSiteDepartmentResource or related table
          }
          */
          
          // สมมติบันทึกสำเร็จ
          return { status: 'success', message: 'ตั้งค่าสำเร็จ!' };
        }
        
        return {};
      }
    }
  },
  locale: adminLocale
});

adminJs.watch() // this builds frontend code in development environment

const router = AdminJSExpress.buildRouter(adminJs)
const app = express();
const PORT = 8080;

app.use(adminJs.options.rootPath, router);
app.use(express.json());

const allowedOrigins = [
  process.env.SERVER_URL_BACKEND,
  process.env.SERVER_URL_AUTH,
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

const posts = [
  {
    username: 'thanarat.sri',
    title: 'Post 1'
  },
  {
    username: 'Test',
    title: 'Post 2'
  }
]

//add route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get('/api/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});

app.get('/api/questions', async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM question');
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/exams/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const [rows] = await db.query(`
      SELECT *
      FROM user u

    `, [username]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "User or exams not found" });
    }

    const department = rows[0].department;
    const exams = rows.map(r => ({
      ExamID: r.ExamID,
      time_limit: r.time_limit,
      score: "0",
      qnum: r.qnum
    }));

    res.json({ rows });
    // res.json({ department, exams });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user
    next()
  })
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`AdminJS at ${PORT}${adminJs.options.rootPath}`);
});