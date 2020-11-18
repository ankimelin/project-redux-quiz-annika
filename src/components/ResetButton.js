import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const ResetButton = () => {

  const dispatch = useDispatch()

  return (
    <button onClick={(() => dispatch(quiz.actions.restart()))}>Play again</button>
  )
}