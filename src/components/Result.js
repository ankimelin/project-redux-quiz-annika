import React from 'react'
import { useSelector } from 'react-redux'

export const Result = () => {

  const answer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  )

  return (
    <>
      {answer && answer.isCorrect && <p>YEY</p>}
      {answer && !answer.isCorrect && <p>Noooooo</p>}
      {!answer && <p>Choose an answer</p>}
    </>
  )
}