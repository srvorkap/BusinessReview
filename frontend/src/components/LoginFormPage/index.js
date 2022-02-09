import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import "./LoginForm.css";
import signupLoginImage from "../../images/signupLogin.png";

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    // if logged in redirect to (it used to be '/')
    if (sessionUser) return <Redirect to="/businesses" />;

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div className="signup-login-page">
            <div className="signup-login-form">
                <form onSubmit={handleSubmit}>
                    <ul className="errors">
                        {errors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                    <div>
                        <input
                            type="text"
                            value={credential}
                            onChange={e => setCredential(e.target.value)}
                            placeholder="Email address or username"
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
                    <input
                        type="submit"
                        value="Log In"
                        className="red buttons"
                    />
                </form>
                <div className="signup-login">
                    <p>New to BusinessReview?</p>
                    <NavLink to="/signup" id="signup-login-link">
                        Sign up
                    </NavLink>
                </div>
                <div className="signup-login-image">
                    <img src={signupLoginImage} />
                </div>
            </div>
        </div>
    );
}

export default LoginFormPage;
