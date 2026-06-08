import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div className="row">
        <div className="col-md-4 ms-5 mt-5">
          <div className="card shadow border-0 p-4">
            <h1
              className="fw-bold text-center"
              style={{ color: "#c94b0c" }}
            >
              Welcome Back
            </h1>

            <p className="text-center text-muted mb-4">
              Login to your Cravings account
            </p>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Remember + Forgot */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="remember"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="remember"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#c94b0c" }}
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn w-100 text-white fw-bold"
                style={{
                  backgroundColor: "#c94b0c",
                  height: "50px",
                }}
              >
                Login
              </button>

              {/* Divider */}
              <div className="d-flex align-items-center my-4">
                <hr className="flex-grow-1" />
                <span className="px-2 text-muted">
                  Don't have an account?
                </span>
                <hr className="flex-grow-1" />
              </div>

              {/* Register Link */}
              <div className="text-center">
                <a
                  href="/register"
                  className="text-decoration-none fw-semibold"
                  style={{ color: "#c94b0c" }}
                >
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;