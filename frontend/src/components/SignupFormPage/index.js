import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import LoginFormModal from '../LoginFormModal'
import './SignupFormPage.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, firstName, lastName, profileImg, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
            <div className="signup-form-container">
                <form onSubmit={handleSubmit} className="signupForm">
                  <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                  </ul>
                  <h1 className="login-header">Sign up for Kelp</h1>
                  <div className="signupContainer">
                  <h3 className="signup-header">Already a user?</h3> 
                  <LoginFormModal />
                  </div>   
                  <div className="name-fields">              
                    <label className="signup-label firstName">
                      First Name
                      <input
                        className="signup-input"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </label>
                    <label className="signup-label lastName">
                      Last Name
                      <input
                        className="signup-input"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <label className="signup-label">
                    Email
                    <input 
                      className="signup-input"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className="signup-label">
                    Profile Image
                    <input
                      className="signup-input"
                      type="text"
                      value={profileImg}
                      onChange={(e) => setProfileImg(e.target.value)}
                      required
                    />
                  </label>
                  <label className="signup-label">
                    Password
                    <input
                      className="signup-input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                  <label className="signup-label">
                    Confirm Password
                    <input
                      className="signup-input"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </label>
                  <div className="buttons">
                    <button className="signup-button" type="submit">Sign Up</button>
                  </div>
                </form>
                <img className="signupImage" src="https://i.imgur.com/qI2NnYR.png" alt="placeholder"></img>
            </div>
            <div className="spacer"></div>
      
    </>                
  );
}

export default SignupFormPage;