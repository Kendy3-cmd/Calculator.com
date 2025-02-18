import Calculator from "./Calculator.jsx";
import IncrementDecrement from "./Increment.jsx";
import Info from "./Info.jsx";
import Rick from "./Rickroll.jsx";
function App() {
  return (
    <div className="body">
      <IncrementDecrement />
      <hr />
      <Calculator />
      <hr />
      <Rick />
      <hr />
      <Info name="kenneth" />
    </div>
  );
}

export default App;
