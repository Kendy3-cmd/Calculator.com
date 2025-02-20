import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  function calculate() {
    const firstNumber = parseFloat(num1);
    const secondNumber = parseFloat(num2);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      setResult("Enter valid numbers");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = firstNumber + secondNumber;
        break;
      case "-":
        res = firstNumber - secondNumber;
        break;
      case "*":
        res = firstNumber * secondNumber;
        break;
      case "/":
        res =
          secondNumber !== 0
            ? firstNumber / secondNumber
            : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operator";
    }

    setResult(res);
  }

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <button onClick={calculate}>Calculate</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default Calculator;
