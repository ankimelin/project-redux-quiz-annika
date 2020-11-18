import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

const OptionButton = styled.button`
  width: 300px;
  border-radius: 8px;
  padding: 12px;
  margin: 12px;
  font-weight: 700;
  font-size: 16px;
  color: white;
  border: none;
  background-color: #0088FF;

  &:hover {cursor: pointer};

  &.right {background-color: #AADD22};
  &.wrong {background-color: #FF0033};
  &.neutral {background-color: lightgrey};
`

const NextButton = styled.button`
  background-color: #9911AA;
  border-radius: 20px;
  padding: 12px;
  border: none;
  color: white;
  font-weight: 400;
  font-size: 16px;
  width: 100px;
  margin-top: 20px;

  &:hover {background-color: black; cursor: pointer};
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

export const Options = () => {

  const [userAnswer, setUserAnswer] = useState()

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const answer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  )

  const dispatch = useDispatch()

  return (
    <>
      <Wrapper>
        {question.options.map((option, index) =>
          <OptionButton
            key={index}
            disabled={answer}
            onClick={() => {
              dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
              setUserAnswer(index)
            }}
            className={
              answer && answer.isCorrect && userAnswer === index ? 'right'
                : answer && !answer.isCorrect && userAnswer === index ? 'wrong'
                  : answer && userAnswer !== index ? 'neutral'
                    : null}
          >
            {option}
          </OptionButton>
        )}
      </Wrapper >
      <NextButton
        disabled={!answer}
        onClick={(() => {
          dispatch(quiz.actions.goToNextQuestion())
          setUserAnswer(-1)
        })}>Next</NextButton>
    </>
  )
}