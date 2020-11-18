import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from 'reducers/quiz'

import { Options } from './Options.js'
import { Status } from './Status.js'

export const Question = () => {

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const dispatch = useDispatch()

  return (
    <>
      <Status />
      <h1>Question: {question.questionText}</h1>
      <Options />
      <div>
        <button onClick={(() => dispatch(quiz.actions.goToNextQuestion()))}>Next</button>
      </div>
    </>
  );
};
