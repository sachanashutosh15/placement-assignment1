import React from "react";
export default function CalculatorCard() {
  const [calculatorState, setCalculatorState] = React.useState({
    input1: "",
    input2: "",
    operator: "",
    input: "",
    isOperator: false,
    result: false,
  });

  function handleClick(e) {
    if(calculatorState.result) {
      window.location.reload();
    }
    if (calculatorState.isOperator) {
      return;
    }
    let operator = e.target.innerText;
    setCalculatorState(prevState => {
      let input1 = prevState.input;
      let input =  input1 + operator;
      return {...prevState, input: input, isOperator: true, operator: operator};
    })
  }

  function handleNumberClick(e) {
    if(calculatorState.result) {
      window.location.reload();
    }
    let change = e.target.innerText;
    if (!calculatorState.isOperator) {
      setCalculatorState(prevState => {
        let input1 = prevState.input1;
        input1 += change;
        let input = prevState.input;
        input += change;
        return {...prevState, input1: input1, input: input};
      })
    } else {
      setCalculatorState(prevState => {
        let input2 = prevState.input2;
        input2 += change;
        let input = prevState.input;
        input += change;
        return {...prevState, input2: input2, input: input};
      })
    }
  }

  function giveResult(e) {
    if(calculatorState.result) {
      window.location.reload();
    }
    setCalculatorState(prevState => {
      let input1 = Number(prevState.input1);
      let input2 = Number(prevState.input2);
      let operator = prevState.operator;
      let result = calculate(input1, input2, operator);
      console.log(calculatorState);
      return {...prevState, input: result, result: true};
    })
  }

  function calculate (input1, input2, operator) {
      switch (operator) {
        case "+":
          return input1 + input2;
        case "-":
          return input1 - input2;
        case "*":
          return input1 * input2;
        case "/":
          return input1 / input2;
      }
  }

  function handleClear() {
    setCalculatorState({
      input: "",
      input2: "",
      operator: "",
      input: "",
    })
  }

  return (
    <>
      <div className="calculatorCard">
        <div className="cardHeader">
          <h1>Calculator</h1>
        </div>
        <div className="mainDiv">
          <div className="inputDiv">
            <input id="cardDisplay" value={calculatorState.input} className="cardInput" type="text" disabled></input>
            <button onClick={handleClear} className="symbolButton">C</button>
          </div>
          <div className="calculationDiv">
            <button onClick={handleNumberClick} className="numberButton">1</button>
            <button onClick={handleNumberClick} className="numberButton">2</button>
            <button onClick={handleNumberClick} className="numberButton">3</button>
            <button onClick={handleClick} className="symbolButton">/</button>
          </div>
          <div className="calculationDiv">
            <button onClick={handleNumberClick} className="numberButton">4</button>
            <button onClick={handleNumberClick} className="numberButton">5</button>
            <button onClick={handleNumberClick} className="numberButton">6</button>
            <button onClick={handleClick} className="symbolButton">-</button>
          </div>
          <div className="calculationDiv">
            <button onClick={handleNumberClick} className="numberButton">7</button>
            <button onClick={handleNumberClick} className="numberButton">8</button>
            <button onClick={handleNumberClick} className="numberButton">9</button>
            <button onClick={handleClick} className="symbolButton">+</button>
          </div>
          <div className="calculationDiv">
            <button onClick={handleNumberClick} className="numberButton">.</button>
            <button onClick={handleNumberClick} className="numberButton">0</button>
            <button onClick={giveResult} className="numberButton">=</button>
            <button onClick={handleClick} className="symbolButton">*</button>
          </div>
        </div>
      </div>
    </>
  );
}