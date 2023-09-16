import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./NavBar";

const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [signupForm, setSignupForm] = useState({
    signupEmail: "",
    signupPassword: "",
    confirmPassword: "",
  });

  const [isLogin, setIsLogin] = useState(true);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", loginForm);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signing up with:", signupForm);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">{isLogin ? "Login" : "Sign Up"}</div>
              <div className="card-body">
                {isLogin ? (
                  <form onSubmit={handleLoginSubmit}>
                    <div className="mb-3">
                      <label htmlFor="loginEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="loginEmail"
                        name="loginEmail"
                        value={loginForm.loginEmail}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="loginPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        name="loginPassword"
                        value={loginForm.loginPassword}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Login
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSignupSubmit}>
                    <div className="mb-3">
                      <label htmlFor="signupEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="signupEmail"
                        name="signupEmail"
                        value={signupForm.signupEmail}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signupPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="signupPassword"
                        name="signupPassword"
                        value={signupForm.signupPassword}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={signupForm.confirmPassword}
                        onChange={handleSignupChange}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ fontWeight: "bold" }}
                    >
                      Sign Up
                    </button>
                  </form>
                )}
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={handleSwitchForm}
                >
                  {isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
