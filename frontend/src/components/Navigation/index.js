import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import DemoLogin from '../DemoButton';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className="login-buttons">
            <DemoLogin/>
            <LoginFormModal/>
            <Link to="/signup" className="signup">Sign Up</Link>
        </div>
      </>
    );
  }

  return (
    <div className="navbar">
      <div className="home">
        <Link exact to="/"> <img className="logo" src="https://i.imgur.com/DbdVpyZ.png" alt="kelp logo"></img></Link>
      </div>
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;