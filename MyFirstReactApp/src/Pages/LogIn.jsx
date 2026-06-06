import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", userName);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="border p-4 w-50 bg-light shadow rounded">
          <h2 className="text-primary text-center">Login</h2>
          <h4 className="text-center mb-4">Welcome Back!!!</h4>

          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <br />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;