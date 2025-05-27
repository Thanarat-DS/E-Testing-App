-- ไฟล์นี้ไม่ได้ใช้ run เป็นแค่ประวัติ
-- SQL code ที่เคยใช้สร้าง Database 

--ชื่อใน AdminJS: "ผู้ใช้งาน"
CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    employeeID VARCHAR(10),
    Department VARCHAR(100),
    JobTitle VARCHAR(100),
    Level VARCHAR(20),
    Site VARCHAR(20),
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    manager VARCHAR(100),
    email_manager VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--ชื่อใน AdminJS: "แผนก"
CREATE TABLE department (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(255) NOT NULL,
    company_name VARCHAR(50),
    site VARCHAR(50)
);

--ชื่อใน AdminJS: "ตั้งค่า"
CREATE TABLE topic (
    topic_code VARCHAR(20) NOT NULL PRIMARY KEY,
    topic_title VARCHAR(255)
);

-- CREATE TABLE topic (
--     topic_code VARCHAR(20) NOT NULL PRIMARY KEY,
--     dept_ids JSON,
--     topic_title VARCHAR(255),
--     time_limit_hq INT,
--     time_limit_sk INT,
--     time_limit_st INT,
--     type ENUM('All', 'Partial'),
--     FOREIGN KEY (dept_id) REFERENCES department(dept_id)
-- );

-- **ไม่ได้ใช้**
-- CREATE TABLE manager_topic (
--     topic_code VARCHAR(20) NOT NULL PRIMARY KEY,
--     topic_title VARCHAR(255),
--     time_limit_hq INT,
--     time_limit_sk INT,
--     time_limit_st INT
-- );

-- Junction Table
CREATE TABLE topic_site (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topic_code VARCHAR(20) NOT NULL,
    site ENUM('HQ', 'SK', 'ST') NOT NULL,
    type ENUM('All', 'Partial') NOT NULL,
    time_limit INT NOT NULL,
    FOREIGN KEY (topic_code) REFERENCES topic(topic_code)
);

-- Junction Table
-- สำหรับกรณี type = 'Partial'
CREATE TABLE topic_site_department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topic_site_id INT NOT NULL,
    dept_id INT NOT NULL,
    FOREIGN KEY (topic_site_id) REFERENCES topic_site(id) ON DELETE CASCADE,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

--ชื่อใน AdminJS: "รายงาน ประวัติฯ"
CREATE TABLE score (
    score_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    topic_code VARCHAR(20) NOT NULL,
    score INT,
    qnum INT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (topic_code) REFERENCES topic(topic_code)
);

--ชื่อใน AdminJS: "ข้อสอบ"
CREATE TABLE question (
    question_id INT AUTO_INCREMENT PRIMARY KEY,
    topic_code VARCHAR(20) NOT NULL, 
    question_text TEXT NOT NULL,
    choice1 TEXT NOT NULL,
    choice2 TEXT NOT NULL,
    choice3 TEXT NOT NULL,
    choice4 TEXT NOT NULL,
    correct_choice ENUM('1', '2', '3', '4') NOT NULL,
    FOREIGN KEY (topic_code) REFERENCES topic(topic_code)
);
