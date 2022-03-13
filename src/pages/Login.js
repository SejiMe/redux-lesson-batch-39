import { useState } from "react";

function Login() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (evt) => {
    evt.preventDefault();
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
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                  />
                </div>
                <button className="btn w-100 btn-primary">Submit</button>
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
