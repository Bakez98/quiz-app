import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchQuestions } from "../../Redux/quizReducer/actions";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const SportsQuiz = () => {

  const [startQuiz, setStartQuiz] = useState(false);
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

  if (loading) return <div>Loading .....</div>;
  if (error) return nav("/NotFound");



  return (
    <div className={styles.wrapper}>
    {startQuiz ? (
      <div>
        <ul className={styles.QuestionWrapper}>
          {Questions.map((question) => (
            <li className={styles.Question} key={question.id}>
              {question.question}
              <ul>
                {question.choices.map((choice) => (
                  <li className={styles.choices}>
                    <input name={question.question} type="radio" />
                    <label>{choice}</label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className={styles.ButtonWrapper}>
        <h2>Click to start The Sports Quiz</h2>
        <button onClick={() => setStartQuiz(!startQuiz)}>Start Quiz!</button>
      </div>
    )}
  </div>
  )
}

export default SportsQuiz