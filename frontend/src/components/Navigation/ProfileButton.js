import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import "./Navigation.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  return (
    <>
      <div className="account-menu">
        <button onClick={openMenu}>
          <FontAwesomeIcon className="account-icon" icon={faBars} />
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <li>{`Hello, ${user.firstName} ${user.lastName}`}</li>
            <li>{user.email}</li>
            <button onClick={logout} className="logOut">
              Log Out
            </button>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
