import React from 'react';
import './App.scss';
import { Display } from './components/Display';
import { EOperations } from './components/Display';
import { Controls } from './components/Controls';

const App: React.FC = () => {

  interface IEquation {
    firstNumber: number;
    operation: EOperations;
    secondNumber: number;
  }

  return (
    <div className="App">
        <Display firstNumber={1000} operation={EOperations.addition} secondNumber={2}/>
        <Controls/>
    </div>
  );
}

export default App;