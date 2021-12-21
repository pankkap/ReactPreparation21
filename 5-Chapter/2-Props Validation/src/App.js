import "./App.css";
import Student from "./Student";
import Student1 from "./Student1";

function App() {
  
  return (
    <div className="App">
      <Student name = {"pankaj"} roll={101} />
      <Student1 name="manish" roll={102} />
    </div>
  );
}

export default App;
