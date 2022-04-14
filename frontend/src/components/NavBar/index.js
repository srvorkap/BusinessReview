import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./NavBar.css";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <div id="navbar">
            <NavLink to="/businesses" id="navbar-left">
                <i class="fab fa-yelp" id="yelp-icon"></i>
                <h1 id="business-review">BusinessReview</h1>
            </NavLink>

            <div id="navbar-center">
                <div className="margin-right">
                    <a href="https://srvorkap.github.io/" target="_blank">
                        <span id="github-icon">
                            <div>Portfolio</div>
                        </span>
                    </a>
                </div>
                <div className="margin-right">
                    <a href="https://github.com/srvorkap" target="_blank">
                        <span id="github-icon">
                            <i class="fab fa-github"></i>
                        </span>
                    </a>
                </div>
                <div className="margin-right">
                    <a
                        href="https://www.linkedin.com/in/srdanvorkapic/"
                        target="_blank"
                    >
                        <span id="linkedin-icon">
                            <i class="fab fa-linkedin"></i>
                        </span>
                    </a>
                </div>
                <div className="margin-right">
                    <a href="https://angel.co/u/srdan-vorkapic" target="_blank">
                        <span id="linkedin-icon">
                            <i class="fab fa-angellist"></i>
                        </span>
                    </a>
                </div>
                {sessionUser && (
                    <div className="margin-right">
                        <NavLink to="/businesses" id="business-navlink">
                            Businesses
                        </NavLink>
                    </div>
                )}
            </div>

            <div id="navbar-right-profile-button">
                {sessionUser ? (
                    <div>
                        <ProfileButton
                            user={sessionUser}
                            className="margin-right"
                        />
                    </div>
                ) : (
                    <div id="navbar-right-login-signup">
                        <div>
                            <NavLink to="/login" className="links margin-right">
                                Log In
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                id="signup-button-navbar"
                                to="/signup"
                                className="links margin-right"
                            >
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navigation;
