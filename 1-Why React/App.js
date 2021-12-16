import "./App.css";

const element = (
  <ul>
    <li>HTML5</li>
    <li>Css3</li>
    <li>JavaScript</li>
    <li>MongoDB</li>
    <li>ReactJS</li>
  </ul>
);

const cssStyle = {
  color: "white",
  backgroundColor: "black",
  display: "inlineBlock",
  padding: "10px",
  borderRadius: "10px",
};

const name = "Beta-Labs";
const i = false;
const logo =
  "https://2.bp.blogspot.com/-CzH30hf-cXg/X9sdRn_6eMI/AAAAAAAACJU/aFcU5FprQMgOnZ6Bz_yzyV8aB_Gm8y7dgCK4BGAYYCw/s1600/Blog%2BBanner%2B1080x210.jpg";

const link = "https://www.beta-labs.in";
function App() {
  return (
    <div className="App">
      <h1>
        Hello Welcome to <span style={cssStyle}>{name}</span>{" "}
      </h1>
      <h2>I am the Follower? {i ? "Yes" : "No"}</h2>
      <a href={link}>
        <img src={logo} alt="" />
      </a>
      <h3>These are topics you will learn:</h3>
      {element}
    </div>
  );
}
export default App;
