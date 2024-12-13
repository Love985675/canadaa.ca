import React from "react";
import NavBar from "./Navbar";
import DataTable from "./DataTable";
import DataTable2 from "./DataTable2";
const Account = () => {
  return (
    <div>
      <NavBar />

      <div className="menu">{/* <img src="menu.png" alt="menu" /> */}</div>
      <br />
      <br />

      <div className="path">
        <a className="Home" href="#">
          Home
        </a>
        <p> > </p>
        <p className="iv"> Your Account</p>
      </div>

      <div className="signedInAs">
        <p>Signed in as Fonix Immigration thapa</p>
        <a className="Logout" href="#">
          Account Home
        </a>
        <p> | </p>
        <a className="Logout" href="#">
          Account Profile
        </a>
        <p> | </p>
        <a className="Logout" href="#">
          Help
        </a>
        <p> | </p>
        <a className="Logout" href="#">
          Logout
        </a>
      </div>

      <div className="Identity">
        <h1>Fonix Immigration Account</h1>
        <hr></hr>

        <h2>View the applications you submitted</h2>
        <p>
          Review, check the status or read messages about your submitted
          application.{" "}
        </p>
      </div>

      <DataTable />

      <div className="lastPara">
        <p>
          Did you apply on paper or don't see your online application in your
          account?
        </p>
        <a href="#">Add (link) your application to your account</a>
        <p> to access it and check your status online.</p>
      </div>
      <br></br>

      <h2>Countinue an application you haven't submitted</h2>
      <p>
        Countinue working on an application or profile you haven't submitted .{" "}
      </p>

      <DataTable2 />
    </div>
  );
};

export default Account;
