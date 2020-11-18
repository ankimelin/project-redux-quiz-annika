import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'

const Button = styled.button`
  background-color: #9911AA;
  border-radius: 20px;
  padding: 12px;
  border: none;
  color: white;
  font-weight: 400;
  font-size: 16px;
  width: 100px;

  &:hover {background-color: black; cursor: pointer};
`

export const NextButton = () => {

  const dispatch = useDispatch()

  return (
    <Button color="#032A34" onClick={(() => dispatch(quiz.actions.goToNextQuestion()))}>Next</Button>
  )
}
