import Calculator from "./Calculator.jsx";
import IncrementDecrement from "./Increment.jsx";
import Rick from "./Rickroll.jsx";
function App() {
  return (
    <div className="body">
    <IncrementDecrement />
    <hr />
    <Calculator />
    <hr />
    <Rick />
    </div>
  );
}

export default App;