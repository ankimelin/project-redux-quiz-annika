import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Status = () => {

  const Text = styled.h2`
    font-size: 20px;
    font-weight: 400;
  `

  const index = useSelector(
    (state) => state.quiz.currentQuestionIndex
  )

  const questions = useSelector(
    (state) => state.quiz.questions
  )

  return (
    <Text>Question {index + 1}/{questions.length}</Text>
  )
}