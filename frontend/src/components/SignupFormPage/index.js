import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";
// import logo from "../../images/newLogo.png";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/business" />;

  const handleSubmit = e => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async res => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <div id="whole-signup-page">
      <div id="signup-image">{/* <img src={logo}></img> */}</div>
      <div id="signup-form-page">
        <form onSubmit={handleSubmit}>
          <ul className="errors">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className="signup-login-inputs"
            />
          </div>
          <div>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
              className="signup-login-inputs"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className="signup-login-inputs"
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="signup-login-inputs"
            />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="signup-login-inputs signup-login-inputs-submit"
          />
          {/* <button type="submit">Sign Up</button> */}
        </form>
        <div id="signup-login">
          <p>Already on BusinessReview?</p>
          <NavLink to="/login" id="signup-login-link">
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SignupFormPage;
