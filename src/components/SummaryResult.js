import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const SummaryResult = () => {

  const Text = styled.h2`
  font-size: 20px;
  font-weight: 400;
`
  const answers = useSelector(
    (state) => state.quiz.answers
  )

  return (
    <Text>Correct answers: {answers.filter(answer => answer.isCorrect).length}/{answers.length}</Text >
  )
}