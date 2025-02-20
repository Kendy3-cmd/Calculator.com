import Calculator from "./Calculator.jsx";
import IncrementDecrement from "./Increment.jsx";
import Info from "./Info.jsx";

function App() {
  return (
    <div className="body">
      <Info name="Kenneth D. Del Carmen" courseYear="BSICT - 3B" />
      <hr />
      <IncrementDecrement />
      <hr />
      <Calculator />
      <hr />
    </div>
  );
}

export default App;
