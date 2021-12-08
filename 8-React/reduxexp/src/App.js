import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, logging } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <br />
      <button onClick={() => dispatch(logging())}>Click to Sign</button>
      {islogged?'ok':'bye'}
    </div>
  );
}

export default App;
