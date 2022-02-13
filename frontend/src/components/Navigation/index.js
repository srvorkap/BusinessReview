import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <div className="margin-right">
                    <NavLink to="/businesses" id="business-navlink">
                        Businesses
                    </NavLink>
                </div>
                <div>
                    <ProfileButton user={sessionUser} className="margin-right"/>
                </div>
            </>
        );
    } else {
        sessionLinks = (
            <>
                <div>
                    <NavLink exact to="/" className="navbar-links margin-right">
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/login" className="navbar-links margin-right">
                        Log In
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/signup" className="navbar-links margin-right">
                        Sign Up
                    </NavLink>
                </div>
            </>
        );
    }

    return (
        <div id="navbar">
            {/* <div id="navbar-two"> */}
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
            <div id="navbar-conditional">{isLoaded && sessionLinks}</div>
            {/* </div> */}
        </div>
    );
}

export default Navigation;
