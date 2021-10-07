import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
        <div className="headerStrip"><img className="logo" src="https://i.imgur.com/DbdVpyZ.png" alt="kelp logo"></img></div>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="loginForm">
                  <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                  </ul>
                  <h1 className="login-header">Log in to Kelp</h1>
                  <div className="signupContainer">
                  <h3 className="signup-header">New to Kelp?</h3> 
                  <Link to="/" className="signup-link">sign up</Link>
                  </div>
                  <label className="login-label">
                    Email
                    <input
                      className="login-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className="login-label">
                    Password
                    <input
                      className="login-input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                  <div className="buttons">
                    <button className="login-button" type="submit">Log In</button>
                    <button className="demo-button" type="submit">Demo</button>
                  </div>
                </form>
                <img className="loginImage" src="https://placeimg.com/640/480/animals" alt="placeholder"></img>
            </div>
    </>
  );
}

export default LoginFormPage;