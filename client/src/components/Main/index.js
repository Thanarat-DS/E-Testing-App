import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
  Loader,
  List,
  Header
} from 'semantic-ui-react';

import place_holder_logo from '../../images/place_holder_logo.jpg';

import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME,
} from '../../constants';
import { shuffle } from '../../utils';
import api from "../../APIs/api";
import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 120,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);
  const [responseData, setResponseData] = useState(null); // State เก็บค่าจาก API

  // Test
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

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
          // score: exam.score ? ((exam.score / exam.qnum) * 100) + '%' : null
          score: exam.score ? ((exam.score / exam.qnum) * 100) + '%' : null
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

  // const fetchData = () => {
  //   setProcessing(true);

  //   if (error) setError(null);

  //   const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

  //   fetch(API)
  //     .then(respone => respone.json())
  //     .then(data =>
  //       setTimeout(() => {
  //         const { response_code, results } = data;

  //         if (response_code === 1) {
  //           const message = (
  //             <p>
  //               The API doesn't have enough questions for your query. (Ex.
  //               Asking for 50 Questions in a Category that only has 20.)
  //               <br />
  //               <br />
  //               Please change the <strong>No. of Questions</strong>,{' '}
  //               <strong>Difficulty Level</strong>, or{' '}
  //               <strong>Type of Questions</strong>.
  //             </p>
  //           );

  //           setProcessing(false);
  //           setError({ message });

  //           return;
  //         }

  //         results.forEach(element => {
  //           element.options = shuffle([
  //             element.correct_answer,
  //             ...element.incorrect_answers,
  //           ]);
  //         });

  //         setProcessing(false);
  //         startQuiz(
  //           results,
  //           countdownTime.hours + countdownTime.minutes + countdownTime.seconds
  //         );
  //       }, 1000)
  //     )
  //     .catch(error =>
  //       setTimeout(() => {
  //         if (!navigator.onLine) {
  //           setOffline(true);
  //         } else {
  //           setProcessing(false);
  //           setError(error);
  //         }
  //       }, 1000)
  //     );
  // };

  // const fetchData = () => {
  //   setProcessing(true);
    
  //   if (error) setError(null);

  //   fetch('./test.json')
  //     .then(response => response.json())
  //     .then(data =>
  //       setTimeout(() => {
  //         const results = data.map(item => ({
  //           question: item.QuestionText,
  //           correct_answer: item.Choices.find(choice => choice.IsCorrect).ChoiceText,
  //           incorrect_answers: item.Choices.filter(choice => !choice.IsCorrect).map(choice => choice.ChoiceText),
  //           options: shuffle(item.Choices.map(choice => choice.ChoiceText))
  //         }));
  
  //         setProcessing(false);
  //         startQuiz(
  //           results,
  //           countdownTime.hours + countdownTime.minutes + countdownTime.seconds
  //         );
  //       }, 1000)
  //     )
  //     .catch(error =>
  //       setTimeout(() => {
  //         setProcessing(false);
  //         setError(error);
  //       }, 1000)
  //     );
  // };
  

  // **** Test ****
  // const fetchDataForExam = (examID) => {
  //   setProcessing(true);
  //   const exam = exams.find(e => e.ExamID === examID);

  //   if (!exam) {
  //     setError(`Exam with ID ${examID} not found`);
  //     setProcessing(false);
  //     return;
  //   }
  
  //   fetch('/exam_list.json')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to load exam data');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setExams(data.exams.map(exam => ({
  //         ...exam,
  //         score: null // ค่าเริ่มต้นคะแนนเป็น null ถ้ายังไม่ทำข้อสอบ
  //       })));
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // };

  const fetchDataForExam = (examID) => {
    setProcessing(true);
    const exam = exams.find(e => e.ExamID === examID);

    if (!exam) {
      setError(`Exam with ID ${examID} not found`);
      setProcessing(false);
      return;
    }
  
    fetch('https://backend-e-testing.trrcane.com/api/questions')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const examData = data.filter(item => item.topic_code === examID);
  
        if (examData.length === 0) {
          throw new Error(`No questions found for test Exam ID ${examID}`);
        }
  
        const results = examData.map(item => {
          const allChoices = [
            item.choice1,
            item.choice2,
            item.choice3,
            item.choice4
          ];
  
          const correctIndex = parseInt(item.correct_choice, 10) - 1;
          const correctAnswer = allChoices[correctIndex];
  
          const incorrectAnswers = allChoices.filter((_, idx) => idx !== correctIndex);
  
          return {
            question: item.question_text,
            correct_answer: correctAnswer,
            incorrect_answers: incorrectAnswers,
            options: shuffle(allChoices)
          };
        });
  
        setProcessing(false);
        startQuiz(results, exam.time_limit * 60);
      })
      .catch(error => {
        setProcessing(false);
        setError(error.message);
      });
  };
  
  if (offline) return <Offline />;

  return (
    <Container>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image src={place_holder_logo} />
            <Item.Content>
              <Item.Header>
                <h1>The Ultimate Trivia test Quiz</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              {/* <Divider /> */}

              {/* Quiz List */}
              <List divided relaxed>
                {exams.map((exam, index) => (
                  <List.Item key={index} style={{ marginBottom: "7px"}}>
                    <List.Content>
                      <List.Header style={{ marginTop: "8px"}}>{`${index + 1}. ${exam.ExamID} | ${exam.ExamTitle} | ${exam.qnum} ข้อ`}</List.Header>
                      <List.Description style={{ marginTop: "7px"}} >
                        Time Limit: {exam.time_limit} minutes <br></br>
                        Score: {exam.score !== null ? `${parseFloat(exam.score).toFixed(2)}%` : 'N/A'}
                      </List.Description>
                    </List.Content>
                    <Button
                      primary
                      size="small"
                      icon="play"
                      labelPosition="left"
                      content="Start Test"
                      onClick={() => fetchDataForExam(exam.ExamID)}
                      style={{ marginTop: "10px", backgroundColor: 'rgb(80, 45, 30)'}}
                    />
                  </List.Item>
                ))}
              </List>

            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Main;
