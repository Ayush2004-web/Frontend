import { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
      confirmPassword,
      terms,
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4 w-50 bg-light shadow rounded">
        <h2 className="text-primary text-center">Registration</h2>
        <h4 className="text-center mb-4">Create Your Account</h4>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <br />

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="terms">
              I accept all Terms & Conditions
            </label>
          </div>

          <br />

          <div className="text-end">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>

          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;