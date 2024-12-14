import React, { useState } from "react";
import "./Welcome.css";
import NavBar2 from "./NavBar2";
import { useNavigate } from "react-router-dom";


const Welcome = () => {


    const navigate = useNavigate();
const handleContinue = () => {
  // Add a delay of 2 seconds (2000 milliseconds)
  setTimeout(() => {
    navigate("/body");
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
        <p className="iv"> welcome</p>
      </div>

      <div className="welcome">
        <h1>Welcome</h1>
        <hr className="hr"></hr>

        <div className="welcome-body">
          <div className="welcome-content">
            <p>
              You last signed in with your GCKey on Thursday, October 14, 2024
              at 16:07:23 ET.
            </p>
            <div className="options">
              <p>From this page you can</p>
              <a href="">change your password</a>
              <a href="">change your recovery option </a>
              <p>or</p>
              <a href=""> revoke Your GCKey</a>
            </div>

            <p>
              To help protect your information, please remember to sign out and
              close your browser before leaving this computer unattended
            </p>

            <p>
              Please select Continue to return to the Government of Canada
              online service.
            </p>

            <button type="submit" className="Continue" onClick={() => handleContinue("/body")}>
            Continue
              </button>
          </div>

          <div className="sidetable">
          <table className="table">
            <thead>
              <tr>
                <th className="table-header">Options</th>
               
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="tablecell">
                  <p>
                    change your recovery Password
                  </p>
                </td>
               
             </tr>
             <tr className="table-row">
                <td className="tablecell">
                  <p>
                    change your recovery Question
                  </p>
                </td>
               
             </tr>
             <tr className="table-row">
                <td className="tablecell">
                  <p>
                    Revoke your GCKey
                  </p>
                </td>
               
             </tr>
             <tr className="table-row">
                <td className="tablecell">
                  <p>
                    Sign Out
                  </p>
                </td>
               
             </tr>
            </tbody>
          </table>

          </div>
        </div>
        <p>Date modified 2023-09-12</p>
      </div>
    </div>
  );
};

export default Welcome;
