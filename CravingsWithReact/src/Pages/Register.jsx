import { useState } from "react";

function Register() {
  const [role, setRole] = useState("Customer");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid h-100">
        <div className="row h-100 justify-content-end align-items-center">
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow p-4 m-4">
              <h1
                className="text-center fw-bold"
                style={{ color: "#c94b0c" }}
              >
                Create Account
              </h1>

              <p className="text-center text-muted mb-4">
                Join us as a Customer, Restaurant, or Rider
              </p>

              <form onSubmit={handleSubmit}>
                {/* Role */}
                <div className="mb-3">
                  <label className="fw-bold d-block mb-2">
                    Register as:
                  </label>

                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        checked={role === "Customer"}
                        onChange={() => setRole("Customer")}
                      />
                      <label className="form-check-label">
                        Customer
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        checked={role === "Restaurant"}
                        onChange={() => setRole("Restaurant")}
                      />
                      <label className="form-check-label">
                        Restaurant
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="role"
                        checked={role === "Rider"}
                        onChange={() => setRole("Rider")}
                      />
                      <label className="form-check-label">
                        Rider
                      </label>
                    </div>
                  </div>
                </div>

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter your full name"
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Enter your email"
                />

                <input
                  type="tel"
                  className="form-control mb-3"
                  placeholder="Enter your phone number"
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Enter your password"
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Confirm your password"
                />

                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="terms"
                  >
                    I agree to the{" "}
                    <span style={{ color: "#c94b0c" }}>
                      terms and conditions
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn w-100 text-white fw-bold"
                  style={{
                    backgroundColor: "#c94b0c",
                    height: "50px",
                  }}
                >
                  Register
                </button>

                <div className="text-center mt-4">
                  <span className="text-muted">
                    Already registered?{" "}
                  </span>
                  <a
                    href="/login"
                    className="text-decoration-none fw-semibold"
                    style={{ color: "#c94b0c" }}
                  >
                    Login here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;