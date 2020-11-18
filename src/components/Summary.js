import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Summary = () => {

  const answers = useSelector(
    (state) => state.quiz.answers
  )

  const dispatch = useDispatch()

  return (
    <>
      <p> Correct answers: {answers.filter(answer => answer.isCorrect).length}/{answers.length}</p >
      <button onClick={(() => dispatch(quiz.actions.restart()))}>Play again</button>
    </>
  )
}