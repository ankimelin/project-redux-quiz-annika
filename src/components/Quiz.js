import React from 'react'
import { useSelector } from 'react-redux'

import { Question } from './Question.js'
import { Summary } from './Summary.js'


export const Quiz = () => {

  const done = useSelector(
    (state) => state.quiz.quizOver
  )

  return (
    <>
      {!done && <Question />}
      {done && <Summary />}
    </>
  );
};
