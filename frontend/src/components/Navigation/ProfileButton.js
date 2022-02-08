import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  const logout = e => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    return <Redirect to='/' />
  };


  return (
    <>

      {/* <NavLink to='/notes' className="navbar-links">Notes</NavLink> */}
      <button onClick={openMenu}>
        <div id="icon-profile" >
          <i className="fas fa-user-circle" />
        </div>
      </button>

      {showMenu && (


        <ul id="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
              <button onClick={logout} id="logout-button">Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
