import "./App.css";

import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetails from "./Components/ItemDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route
            path="/shop/:id"
            exact
            render={(props) => <ItemDetails {...props} />}
            element={<ItemDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h1>Home Page</h1>;
};

export default App;
