import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <main className="body">
      <div className="menu">
        <img src="menu.png" alt="menu" />
      </div>

      <div className="path">
        <a className="Home" href="#">
          Home
        </a>
        <p> > </p>
        <p className="iv"> Identity Validation</p>
      </div>

      <div className="signedInAs">
        <p>Signed in as Fonix Immigration thapa</p>
        <a className="Logout" href="#">
          Logout
        </a>
      </div>

      <div className="Identity">
        <h1>Identity Validation</h1>
        <hr></hr>
        <p>
          For security reasons, additional identification is required to access
          your account.
        </p>
        <p>Please answer the following secret question:</p>

        <div className="fruit">
          <h3 className="astric">*</h3>
          <h3>"Favorite fruit"</h3>
          <h3 className="astric">(required)</h3>
        </div>
        <input className="answer" type="text" placeholder="" />

        <div className="buttons">
          <button className="continue">Continue</button>
          <button className="logout">Logout</button>
        </div>
        <button className="report">
          Report a Problem or mistake on this page
        </button>
      </div>
    </main>
  );
};

export default Body;
