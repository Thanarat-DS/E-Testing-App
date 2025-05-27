// ไฟล์นี้ยังไม่ได้ใช้

import React, { useEffect, useState } from 'react';
import { Container, Segment, List, Header, Loader, Message } from 'semantic-ui-react';

const QuizList = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/exam_list.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load exam data');
        }
        return response.json();
      })
      .then(data => {
        setExams(data.exams.map(exam => ({
          ...exam,
          score: null // ค่าเริ่มต้นคะแนนเป็น null ถ้ายังไม่ทำข้อสอบ
        })));
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader active inline='centered' />;
  if (error) return <Message negative>{error}</Message>;

  return (
      <Segment>
        <Header as='h2'>Exam List</Header>
        <List divided relaxed>
          {exams.map((exam, index) => (
            <List.Item key={index}>
              <List.Content>
                <List.Header>{exam.ExamID}{exam.ExamTitle}</List.Header>
                <List.Description>
                  Time Limit: {exam.time_limit} minutes
                  {exam.score !== null && (
                    <div>Score: {exam.score.toFixed(2)}</div>
                  )}
                </List.Description>
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>

  );
};

export default QuizList;
