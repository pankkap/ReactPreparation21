import { useDispatch, useSelector } from "react-redux";
import { decrement,increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.islogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      {islogged ? <h3>Welcome User</h3> : <h3>User not Logged In</h3>}
    </div>
  );
}

export default App;
