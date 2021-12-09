import "./App.css";

import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetails from "./Components/ItemDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Home Page</h1>;
};

export default App;
