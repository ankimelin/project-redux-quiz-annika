import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

const Button = styled.button`
  width: 300px;
  border-radius: 8px;
  padding: 12px;
  margin: 12px;
  background-color: #FF0033;
  font-weight: 700;
  font-size: 16px;
  color: white;
  border: none;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const Options = () => {

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const answer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  )

  const dispatch = useDispatch()

  return (
    <Wrapper>
      {question.options.map((option, index) =>
        <Button key={index} disabled={answer} onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))}>{option}</Button>
      )}
    </Wrapper>
  )
}