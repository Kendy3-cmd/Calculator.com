import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    function handleClick(value) {
        setInput((prev) => prev + value);
    }

    function handleClear() {
        setInput("");
        setResult(null);
    }

    function calculateResult() {
        try {
            setResult(eval(input)); // Replace with a safe math parser like `mathjs`
        } catch {
            setResult("Error");
        }
    }

    return (
        <div className="calculator">
            <div className="display">{result !== null ? result : input || "0"}</div>
            <div className="buttons">
                <button className="number" onClick={() => handleClick("1")}>1</button>
                <button className="number" onClick={() => handleClick("2")}>2</button>
                <button className="number" onClick={() => handleClick("3")}>3</button>
                <button className="operator" onClick={() => handleClick("+")}>+</button>

                <button className="number" onClick={() => handleClick("4")}>4</button>
                <button className="number" onClick={() => handleClick("5")}>5</button>
                <button className="number" onClick={() => handleClick("6")}>6</button>
                <button className="operator" onClick={() => handleClick("-")}>-</button>

                <button className="number" onClick={() => handleClick("7")}>7</button>
                <button className="number" onClick={() => handleClick("8")}>8</button>
                <button className="number" onClick={() => handleClick("9")}>9</button>
                <button className="operator" onClick={() => handleClick("*")}>×</button>

                <button className="clear" onClick={handleClear}>C</button>
                <button className="number" onClick={() => handleClick("0")}>0</button>
                <button className="equal" onClick={calculateResult}>=</button>
                <button className="operator" onClick={() => handleClick("/")}>÷</button>
            </div>
        </div>
    );
}

export default Calculator;
