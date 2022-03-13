import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Layout from "./components/Layout";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // require authentication to render the page
  const requireAuth = (Component) => {
    return isLoggedIn ? <Component /> : <Navigate to="/login" />;
  };
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={requireAuth(Home)} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
