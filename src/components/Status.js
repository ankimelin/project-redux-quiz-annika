import React from 'react'
import { useSelector } from 'react-redux'

export const Status = () => {

  const index = useSelector(
    (state) => state.quiz.currentQuestionIndex
  )

  const questions = useSelector(
    (state) => state.quiz.questions
  )

  return (
    <p>Question {index + 1}/{questions.length}</p>
  )
}