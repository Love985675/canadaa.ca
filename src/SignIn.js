import React, { useState } from "react";
import "./SignIn.css";
import NavBar2 from "./NavBar2";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
//     // Add logic to handle sign-in here
//   };
const navigate = useNavigate();
const handleContinue = () => {
  // Add a delay of 2 seconds (2000 milliseconds)
  setTimeout(() => {
    navigate("/welcome");
  }, 3000);
};

  return (
    <div>
      <NavBar2></NavBar2>
      <div className="path">
        <a className="Home" href="#">
          Home
        </a>
        <p> > </p>
        <p className="iv"> Sign In / Sign Up</p>
      </div>

      <div className="welcome">
        <h1>Welcome to GCkey</h1>
        <hr className="hr"></hr>
      </div>

      <div className="sign-in-card">
        {/* Left Side: Sign-In Form */}
        <div className="sign-in-left">
          <h1>Sign In</h1>
          <form  className="sign-in-form">
            <div className="form-group">
              <label htmlFor="email"><p>Username:<bold>(required)</bold></p></label>
              <input
                type="username"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"><p>Password:(required)</p></label>
              <input
                type="password"
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
              />
              <a href="">Forget your password? </a>
            </div>
            <div className="buttongroup">
              <button type="submit" className="sign-in-button" onClick={() => handleContinue("/welcome")}>
                Sign In
              </button>
              <button type="clear" className="clear">
               Clear All
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Right Side: Info Section */}
        <div className="sign-in-right">
          <h2>Simple Secure Access</h2>
          <p>
            A simple way to securely access Government of Canada online
            services.
          </p>
          <p>One username.</p><p> One password.</p>
          <button className="sign-up-button">Sign Up</button>
<br></br>
          <p>your GCKey can be used to access multiple Government of Canada online Enabled Services</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
