import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// สร้าง Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, 'root', process.env.DB_PASSWORD, {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false,
});

// User Model
export const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  employeeID: DataTypes.STRING(10),
  Department: DataTypes.STRING(100),
  JobTitle: DataTypes.STRING(100),
  Level: {
    type: DataTypes.ENUM('Employee', 'Manager'),
    allowNull: false
  },
  Site: DataTypes.STRING(20),
  username: { type: DataTypes.STRING(50), allowNull: false },
  password: { type: DataTypes.STRING(100), allowNull: false },
  email: DataTypes.STRING(100),
  manager: DataTypes.STRING(100), 
  email_manager: DataTypes.STRING(100), 
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
}, {
  timestamps: false,
  tableName: 'user',
});

// Department Model
export const Department = sequelize.define('department', {
  dept_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dept_name: { type: DataTypes.STRING(255), allowNull: false },
  company_name: { type: DataTypes.STRING(50) },
  site: { type: DataTypes.STRING(50) },
}, {
  timestamps: false,
  tableName: 'department',
});

// Topic Model
export const Topic = sequelize.define('topic', {
  topic_code: { type: DataTypes.STRING(20), primaryKey: true },
  topic_title: DataTypes.STRING(255),
}, {
  timestamps: false,
  tableName: 'topic',
});

// TopicSite Model 
export const TopicSite = sequelize.define('topic_site', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  topic_code: { type: DataTypes.STRING(20), allowNull: false },
  site: { type: DataTypes.ENUM('HQ', 'SK', 'ST'), allowNull: false },
  type: { type: DataTypes.ENUM('All', 'Partial'), allowNull: false },
  time_limit: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: false,
  tableName: 'topic_site',
});
TopicSite.belongsTo(Topic, { foreignKey: 'topic_code' });
Topic.hasMany(TopicSite, { foreignKey: 'topic_code' });

// TopicSiteDepartment Model
export const TopicSiteDepartment = sequelize.define('topic_site_department', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  topic_site_id: { type: DataTypes.INTEGER, allowNull: false },
  dept_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: false,
  tableName: 'topic_site_department',
});
TopicSiteDepartment.belongsTo(TopicSite, { foreignKey: 'topic_site_id', onDelete: 'CASCADE' });
TopicSite.hasMany(TopicSiteDepartment, { foreignKey: 'topic_site_id' });
TopicSiteDepartment.belongsTo(Department, { foreignKey: 'dept_id' });
Department.hasMany(TopicSiteDepartment, { foreignKey: 'dept_id' });

// Score Model
export const Score = sequelize.define('score', {
  score_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  topic_code: { type: DataTypes.STRING(20), allowNull: false },
  score: DataTypes.INTEGER,
  qnum: DataTypes.INTEGER,
  submitted_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
}, {
  timestamps: false,
  tableName: 'score',
});
Score.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Score, { foreignKey: 'user_id' });
Score.belongsTo(Topic, { foreignKey: 'topic_code', targetKey: 'topic_code' });
Topic.hasMany(Score, { foreignKey: 'topic_code', sourceKey: 'topic_code' });

// Question Model
export const Question = sequelize.define('Question', {
    question_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    topic_code: { type: DataTypes.STRING(20), allowNull: false },
    question_text: { type: DataTypes.TEXT, allowNull: false },
    choice1: { type: DataTypes.TEXT, allowNull: false },
    choice2: { type: DataTypes.TEXT, allowNull: false },
    choice3: { type: DataTypes.TEXT, allowNull: false },
    choice4: { type: DataTypes.TEXT, allowNull: false },
    correct_choice: { type: DataTypes.ENUM('1', '2', '3', '4'), allowNull: false },
  }, {
    timestamps: false,
    tableName: 'question',
  });
  Question.associate = (models) => {
    Question.belongsTo(models.Topic, { foreignKey: 'topic_code', targetKey: 'topic_code' });
  };
  

export { sequelize };
