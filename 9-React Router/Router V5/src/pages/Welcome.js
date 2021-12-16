import { Link, Route } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h1>The Welcome Page</h1>
      <Link className="btn btn-danger mt-3 mb-3" to="/welcome/new-user">New User</Link>

      {/* Nested Routes */}

      <Route path="/welcome/new-user">
        <p>This is new User</p>
      </Route>
    </div>
  );
};

export default Welcome;
