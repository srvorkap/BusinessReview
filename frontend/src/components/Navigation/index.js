import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
// import logo from "../../images/newLogo.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <NavLink to="/businesses">Businesses</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink exact to="/" className="navbar-links">
          Home
        </NavLink>
        <NavLink to="/login" className="navbar-links">
          Log in
        </NavLink>
        <NavLink to="/signup" className="navbar-links">
          Sign up
        </NavLink>
      </>
    );
  }

  return (
    <ul id="navbar">
      <li id="navbar-two">
        {/* <img src={logo} id="logo"></img> */}

        <a href="https://github.com/srvorkap" target="_blank">
          <span id="github-icon">
            <i class="fab fa-github"></i>
          </span>
        </a>
        <a href="https://www.linkedin.com/in/srdanvorkapic/" target="_blank">
          <span id="linkedin-icon">
            <i class="fab fa-linkedin"></i>
          </span>
        </a>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
