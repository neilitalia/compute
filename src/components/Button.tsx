import React from 'react';
import { buttonType } from "./Controls";

interface IProps {
  name: string;
  text: string;
  type: buttonType;
}

export const Button: React.FC<IProps> = ({ name, text, type }) => {
  return (
    <button className={type.toString()}>
      {text}
      {console.log(type)}
    </button>
  )
}