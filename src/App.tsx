import React from 'react';
import './App.scss';
import { Display, EOperations } from './components/Display';
import { Controls } from './components/Controls';

const App: React.FC = () => {
  
  const [firstNumber, setFirstNumber] = React.useState<number>(0)
  const [operation, setOperation] = React.useState<EOperations>(EOperations.none)
  const [secondNumber, setSecondNumber] = React.useState<number>(0)

  return (
    <div className="App">
      <Display
        firstNumber={firstNumber}
        operation={operation}
        secondNumber={secondNumber} />
      <Controls
        firstNumber={firstNumber}
        operation={operation}
        secondNumber={secondNumber}

        setFirstNumber={setFirstNumber}
        setOperation={setOperation}
        setSecondNumber={setSecondNumber}
      />
    </div>
  );
}

export default App;