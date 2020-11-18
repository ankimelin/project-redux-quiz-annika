import React from 'react'
import { useSelector } from 'react-redux'

export const SummaryResult = () => {

  const answers = useSelector(
    (state) => state.quiz.answers
  )

  return (
    <p> Correct answers: {answers.filter(answer => answer.isCorrect).length}/{answers.length}</p >
  )
}