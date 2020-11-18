import React from "react";

import { Status } from './Status.js'
import { Question } from './Question.js'
import { Options } from './Options.js'

export const QuestionContainer = () => {

  return (
    <>
      <Status />
      <Question />
      <Options />
    </>
  )
}
