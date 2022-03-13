import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./../redux/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    dispatch(login({ email, password }));
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body py-4">
              <form onSubmit={onSubmit}>
                <div className="mb-2">
                  <label>Email</label>
                  <input
                    disabled={isLoading}
                    className="form-control"
                    type="email"
                    defaultValue={email}
                    required
                    onChange={(evt) => setEmail(evt.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    disabled={isLoading}
                    className="form-control"
                    type="password"
                    defaultValue={password}
                    required
                    onChange={(evt) => setPassword(evt.target.value)}
                  />
                </div>
                <button className="btn w-100 btn-primary" disabled={isLoading}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Login;
