import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchQuestions } from "../../Redux/quizReducer/actions";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const PhysQuiz = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState({});
  const { loading, error, Questions } = useSelector(
    (state) => state.QuizReducer
  );
  const dispatch = useDispatch();
  const nav = useNavigate();

  function FetchingQuestions(catagory) {
    dispatch(FetchQuestions(catagory));
  }

  const physics = "physics";
  useEffect(() => {
    FetchingQuestions(physics);
  }, []);

  const handleAnswerSelection = (questionId, answer) => {
    setChosenAnswers((prevState) => ({
      ...prevState,
      [questionId]: answer,
    }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    Questions.forEach((question) => {
      if (chosenAnswers[question.id] === question["right-answer"]) {
        score++;
      }
    });
    alert(`Your score is ${score} out of ${Questions.length}`);
    setCurrentQuestionIndex(0);
    setChosenAnswers({});
    setStartQuiz(false);
    nav("/Home")
  };

  if (loading) return <div>Loading .....</div>;
  if (error) return nav("/NotFound");

  const currentQuestion = Questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === Questions.length - 1;

  return (
    <div className={styles.wrapper}>
      {startQuiz ? (
        <div>
          <h2 className={styles.Question}>{currentQuestion.question}</h2>
          <ul>
            {currentQuestion.choices.map((choice) => (
              <li className={styles.choices} key={choice}>
                <input
                  name={currentQuestion.id}
                  type="radio"
                  value={choice}
                  onChange={() =>
                    handleAnswerSelection(currentQuestion.id, choice)
                  }
                />
                <label>{choice}</label>
              </li>
            ))}
          </ul>
          <div className={styles.ButtonWrapper}>
            {isLastQuestion ? (
              <button onClick={handleSubmitQuiz}>Submit Quiz</button>
            ) : (
              <button onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}>
                Next Question
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.ButtonWrapper}>
          <h2>Click to start The Computer Quiz</h2>
          <button onClick={() => setStartQuiz(!startQuiz)}>Start Quiz!</button>
        </div>
      )}
    </div>
  );
};

export default PhysQuiz;
