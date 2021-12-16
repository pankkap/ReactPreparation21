import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, logging } from "./actions";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  console.log(counter);
  console.log(isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <br />
      <br />
      <button onClick={() => dispatch(logging())}>Click to Sign</button>
      <br />
      <br />
      {isLogged ? (
        <span style={{ color: "green", fontWeight: "bold" }}>Welcome User</span>
      ) : (
        <span style={{ color: "red", fontWeight: "bold" }}>
          Your are not Authorize User..!! Click Button to Sign In
        </span>
      )}
    </div>
  );
}

export default App;
