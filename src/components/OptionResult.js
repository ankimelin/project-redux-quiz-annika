import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Text = styled.h3`
  font-size: 16px;
  font-weight: 400;
`

export const OptionResult = () => {

  const answer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  )

  return (
    <>
      {answer && answer.isCorrect && <Text>YEY</Text>}
      {answer && !answer.isCorrect && <Text>Noooooo</Text>}
      {!answer && <Text>Choose an answer</Text>}
    </>
  )
}