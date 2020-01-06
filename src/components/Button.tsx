import React from 'react';
import { buttonType } from "./Controls";
import { EOperations } from './Display';

interface IProps {
  name: string;
  text: string;
  type: buttonType;

  firstNumber: number;
  operation: EOperations;
  secondNumber: number;

  setFirstNumber: any;
  setOperation: any;
  setSecondNumber: any;
}

export const Button: React.FC<IProps> = ({ name, text, type, firstNumber, operation, secondNumber, setFirstNumber, setOperation, setSecondNumber}) => {

  function evaulateButtonPress(){

    if( type === buttonType.function && name === "allClear"){
      setFirstNumber(0)
      setOperation(EOperations.none)
      setSecondNumber(0)
    }

    if (type === buttonType.function && name === "clear" && operation === EOperations.none && secondNumber === 0) {
      setFirstNumber(Number(firstNumber.toString().slice(0, -1)))
    }

    if (type === buttonType.function && name === "clear") {
      setSecondNumber(Number(secondNumber.toString().slice(0, -1)))
    }

    if (type === buttonType.operation && name === "equals") {
      switch (operation) {
        case EOperations.addition: setFirstNumber(firstNumber + secondNumber); break;
        case EOperations.subtraction: setFirstNumber(firstNumber - secondNumber); break;
        case EOperations.multiplication: setFirstNumber(firstNumber * secondNumber); break;
        case EOperations.division: setFirstNumber(firstNumber / secondNumber); break;
        default: break;
      }
      setOperation(EOperations.none)
      setSecondNumber(0)
    }

    if( type === buttonType.number && operation === EOperations.none && secondNumber === 0){
      setFirstNumber(Number(firstNumber.toString().concat(text)))
    }

    if( type === buttonType.operation && secondNumber === 0){
      setOperation(name)
    }

    if (type === buttonType.number && operation !== EOperations.none) {
      setSecondNumber(Number(secondNumber.toString().concat(text)))
    }

  }

  return (
    <button
      className={type.toString()}
      onClick={ () => evaulateButtonPress()}
    >
      {text}
    </button>
  )
}