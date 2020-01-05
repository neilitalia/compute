import React from 'react'

export enum EOperations {
  addition = "addition",
  subtraction = "subtraction",
  multiplication = "multiplication",
  division = "division"
}

interface Props {
  firstNumber: number;
  operation?: EOperations;
  secondNumber?: number;
}

export const Display: React.FC<Props> = ({ firstNumber, secondNumber, operation }) => {
  return (
    <div className="Display">
      {firstNumber}
      {operation}
      {secondNumber}
    </div>
  )
}
