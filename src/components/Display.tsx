import React from 'react'

export enum EOperations {
  addition = "addition",
  subtraction = "subtraction",
  multiplication = "multiplication",
  division = "division",
  none = "none"
}

export interface IEquation {
  firstNumber: number;
  operation: EOperations;
  secondNumber: number;
}

export const Display: React.FC<IEquation> = ({ firstNumber, secondNumber, operation }) => {

  function handleOperationRender(){
    if (operation === EOperations.none) {
      return ""
    } else {
      switch (operation) {
        case EOperations.addition: return "+"
        case EOperations.subtraction: return "-"
        case EOperations.multiplication: return "×"
        case EOperations.division: return "÷"
        default: return ""
      } 
    }
  }

  function handleSecondNumberRender() {
    if (secondNumber === 0) {
      return ""
    } else {
      return secondNumber
    }
  }
  
  function handlePreviewRender(){
    if (operation === EOperations.none && secondNumber === 0){
      return ""
    } else {
      switch (operation) {
        case EOperations.addition: return (firstNumber+secondNumber)
        case EOperations.subtraction: return (firstNumber-secondNumber)
        case EOperations.multiplication: return (firstNumber*secondNumber)
        case EOperations.division: return (firstNumber/secondNumber)
        default: return ""
      } 
    }
  }

  return (
    <div className="Display">
      <h1>
        {firstNumber}
        {handleOperationRender()}
        {handleSecondNumberRender()}
      </h1>
      <h2>
        {handlePreviewRender()}
      </h2>
    </div>
  )
}
