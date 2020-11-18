import React from 'react'
import { useSelector } from 'react-redux'

import { QuestionContainer } from './QuestionContainer.js'
import { SummaryContainer } from './SummaryContainer.js'


export const Quiz = () => {

  const done = useSelector(
    (state) => state.quiz.quizOver
  )

  return (
    <>
      {!done && <QuestionContainer />}
      {done && <SummaryContainer />}
    </>
  );
};
