import React from "react";

import { Status } from './Status.js'
import { Question } from './Question.js'
import { Options } from './Options.js'
import { OptionResult } from './OptionResult.js'
import { NextButton } from './NextButton.js'


export const QuestionContainer = () => {

  return (
    <>
      <Status />
      <Question />
      <Options />
      <OptionResult />
      <NextButton />
    </>
  )
}
