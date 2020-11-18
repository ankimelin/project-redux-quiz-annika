import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Options = () => {

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const dispatch = useDispatch()

  return (
    <>
      {question.options.map((option, index) =>
        <button key={index} onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))}>{option}</button>
      )}
    </>
  )
}