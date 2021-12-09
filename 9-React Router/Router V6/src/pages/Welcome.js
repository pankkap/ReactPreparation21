import { Link, Route, Routes, Outlet } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h1>The Welcome Page</h1>
      <Link to="/welcome/new-user">New User</Link>

      <Outlet />
      {/* Move this is to main Routing Page as child Route
         and use Outlet to render content of Child Route here
      <Routes>
        <Route path="new-user" element={<p>This is new User</p>}></Route>
      </Routes> */}
    </div>
  );
};

export default Welcome;
