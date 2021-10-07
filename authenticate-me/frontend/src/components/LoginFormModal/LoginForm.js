import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
        {/* <div className="headerStrip"><img className="logo" src="https://i.imgur.com/DbdVpyZ.png" alt="kelp logo"></img></div> */}
            <div className="form-container">
                <form onSubmit={handleSubmit} className="loginForm">
                  <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                  </ul>
                  <h1 className="login-header">Log in to Kelp</h1>
                  <div className="signupContainer">
                  <h3 className="signup-header">New to Kelp?</h3> 
                  <Link to="/signup" className="signup-link">sign up</Link>
                  </div>
                  <div className="form-items">
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
                  </div>
                  <div className="buttons">
                    <button className="login-button" type="submit">Log In</button>
                    <button className="demo-button" type="submit">Demo</button>
                  </div>
                </form>
                <img className="loginImage" src="https://i.imgur.com/qI2NnYR.png" alt="placeholder"></img>
            </div>
    </>
  );
}

export default LoginForm;