import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";
import signupLoginImage from "../../images/signupLogin.png";

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/businesses" />;

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
        <div className="signup-login-page">
            <div className="signup-login-form">
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
                        className="red buttons signup-login-buttons"
                    />
                </form>
                <div className="signup-login">
                    <p className="grey">Already on BusinessReview?&nbsp;</p>
                    <NavLink to="/login" id="login-link">
                        Log In
                    </NavLink>
                </div>
            </div>
            <div className="signup-login-image">
                <img src={signupLoginImage} />
            </div>
        </div>
    );
}

export default SignupFormPage;
