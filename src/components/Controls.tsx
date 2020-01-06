import React from "react";
import { Button } from './Button';
import { EOperations } from "./Display";

export enum buttonType {
  function = "function",
  operation = "operation",
  number = "number"
}

interface IProps {
  firstNumber: number;
  operation: EOperations;
  secondNumber: number;

  setFirstNumber: any;
  setOperation: any;
  setSecondNumber: any;
}

export const Controls: React.FC<IProps> = ({firstNumber, operation, secondNumber, setFirstNumber, setOperation, setSecondNumber}) => {

  type ButtonData = {
    name: string;
    text: string;
    type: buttonType;
  }

  var buttons: ButtonData[] = [
    { name: "allClear", text: "AC", type: buttonType.function },
    { name: "clear", text: "C", type: buttonType.function },
    { name: "seven", text: "7", type: buttonType.number },
    { name: "eight", text: "8", type: buttonType.number },
    { name: "nine", text: "9", type: buttonType.number },
    { name: "division", text: "÷", type: buttonType.operation },
    { name: "plusMinus", text: "+/-", type: buttonType.function },
    { name: "percent", text: "%", type: buttonType.function },
    { name: "four", text: "4", type: buttonType.number },
    { name: "five", text: "5", type: buttonType.number },
    { name: "six", text: "6", type: buttonType.number },
    { name: "multiplication", text: "×", type: buttonType.operation },
    { name: "leftParenthesis", text: "(", type: buttonType.function },
    { name: "rightParenthesis", text: ")", type: buttonType.function },
    { name: "one", text: "1", type: buttonType.number },
    { name: "two", text: "2", type: buttonType.number },
    { name: "three", text: "3", type: buttonType.number },
    { name: "subtraction", text: "-", type: buttonType.operation },
    { name: "undo", text: "@", type: buttonType.function },
    { name: "squareRoot", text: "√", type: buttonType.function },
    { name: "zero", text: "0", type: buttonType.number },
    { name: "decimal", text: ".", type: buttonType.number },
    { name: "equals", text: "=", type: buttonType.operation },
    { name: "addition", text: "+", type: buttonType.operation },
  ]

  return (
    <div className="Controls">
      {
      buttons.map( function(button, index) {
        return (
          <Button
            key={index}
            name={button.name}
            text={button.text}
            type={button.type}

            firstNumber={firstNumber}
            operation={operation}
            secondNumber={secondNumber}
            
            setFirstNumber={setFirstNumber}
            setOperation={setOperation}
            setSecondNumber={setSecondNumber}
          />
        )
      })
      }
    </div>
  );
};