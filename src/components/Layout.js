import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./../redux/auth";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const onLogout = (evt) => {
    evt.preventDefault();
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <div>
        <Link to="/">Home</Link>{" "}
        {!isLoggedIn ? (
          <>
            | <Link to="/login">Login</Link>
          </>
        ) : (
          <Link to="/login" onClick={onLogout}>
            Logout
          </Link>
        )}
      </div>
      {children}
      <div>Footer</div>
    </div>
  );
}

export default Layout;
