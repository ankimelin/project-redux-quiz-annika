import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'

export const Question = () => {

  const Text = styled.h1`
  font-size: 24px;  
`

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  return (
    <Text>{question.questionText}</Text>
  )
}
