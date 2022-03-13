import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <div>
        <Link to="/">Home</Link> |<Link to="/login">Login</Link>
      </div>
      {children}
      <div>Footer</div>
    </div>
  );
}

export default Layout;
