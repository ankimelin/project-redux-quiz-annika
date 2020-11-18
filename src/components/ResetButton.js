import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #9911AA;
  border-radius: 20px;
  padding: 12px;
  border: none;
  color: white;
  font-weight: 400;
  font-size: 48px;
  width: 400px;
  height: 200px;
  margin-top: 100px;

  &:hover {background-color: black; cursor: pointer};
`

export const ResetButton = () => {

  const dispatch = useDispatch()

  return (
    <Button onClick={(() => dispatch(quiz.actions.restart()))}>Play again</Button>
  )
}