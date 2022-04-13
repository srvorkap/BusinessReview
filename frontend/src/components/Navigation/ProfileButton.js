import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";
import logoutImage from "../../images/logout-button.png";

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
        return <Redirect to="/login" />;
    };

    return (
        // <div id="profile-button-and-dropdown">
        <>
            <div id="bozepomozi">
                <button onClick={openMenu} id="profile-icon-button">
                    <img src={logoutImage} id="profile-icon-image" />
                </button>
            </div>
            <div>
                {showMenu && (
                    <div id="profile-dropdown">
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        <div>
                            <button onClick={logout} id="logout-button">
                                Log Out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
        // </div>
    );
}

export default ProfileButton;
