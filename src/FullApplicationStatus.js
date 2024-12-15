import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import "./FullApplicationStatus.css"; // Ensure to import the CSS file
import NavBar from "./Navbar";

const FullApplicationStatus = () => {
  const location = useLocation();
  const { row } = location.state;
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <NavBar />
      <div className="path">
        <a className="Home" href="#">
          Home
        </a>
        <p> > </p>
        <p className="iv"> Status</p>
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
        <h1>Application Status Messages</h1>
        <hr></hr>
        <div className="para">
          <p>
            Check the status, review the details and read messages for your
            application
          </p>
          <a href="#">View submitted applications</a>
        </div>
      </div>

      <div className="cards">
        <div className="full-application-card2">
          {/* Heading Section */}
          <div className="heading-section">
            <h1>Application Status</h1>
          </div>

          {/* Application Details */}
          <div className="details-section">
            <p>
              A final decision has been made. Please see the final decision
              below.
            </p>
            <p>
              <strong>Latest Update</strong>
            </p>
            <p>
              <strong>Final decision:</strong> {row.finaldecision} Your
              application was approved.Check your messages below for detail.
            </p>
          </div>
        </div>

        <div className="full-application-card">
          {/* Heading Section */}
          <div className="heading-section">
            <h1>Application Information</h1>
          </div>

          {/* Application Details */}
          <div className="details-section">
            <p>
              <strong>Principal Applicant:</strong> {row.applicationName}
            </p>
            <p>
              <strong>Unique Client Identifier (UCI):</strong> {row.uci}
            </p>
            <p>
              <strong>Application Number:</strong> {row.applicationNumber}
            </p>
            <p>
              <strong>Date Received:</strong> {row.dateSubmitted}
            </p>

            {/* Biometrics Details */}

            <p>
              <strong>Biometrics:</strong>
            </p>
            <div className="biometric-details">
              <p>
                <strong>Biometric Number:</strong> {row.biometricNumber}
              </p>
              <p>
                <strong>Date of Biometrics Enrollment:</strong>{" "}
                {row.enrollmentDate}
              </p>
              <p>
                <strong>Expiry Date:</strong> {row.expiryDate}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="restData">
        <hr></hr>
        <h1>Details about your application status </h1>
        <p>
          When we get your application, there are a series of steps it may go
          through before we make a decision
        </p>
        <div className="section" id="section-content">
          <div className="row">
            <img
              src="eligibilty.png"
              alt="Image 1"
              className="image"
              id="image1"
            />
            <h2 id="heading">Review of eligibilty</h2>
            <img src="qus.png" alt="Image 2" className="image" id="image2" />
          </div>
          <ul id="unordered-list">
            <li>
              {" "}
              {row.enrollmentDate} Your eligibilty has been reviewed. Please see
              the final decision below.
            </li>
          </ul>
        </div>

        <div className="section" id="section-content">
          <div className="row">
            <img
              src="hospital.png"
              alt="Image 1"
              className="image"
              id="image1"
            />
            <h2 id="heading">Review of Medical Results</h2>
            <img src="qus.png" alt="Image 2" className="image" id="image2" />
          </div>
          <ul id="unordered-list">
            <li>
              {" "}
              You do not need a medical exam. We will send you a message if this
              changes.
            </li>
          </ul>
        </div>

        <div className="section" id="section-content">
          <div className="row">
            <img
              src="addDocuments.png"
              alt="Image 1"
              className="image"
              id="image1"
            />
            <h2 id="heading">Review of Addtional documents</h2>
            <img src="qus.png" alt="Image 2" className="image" id="image2" />
          </div>
          <ul id="unordered-list">
            <li> We do not need addtional documents</li>
          </ul>
        </div>
        <div className="section" id="section-content">
          <div className="row">
            <img
              src="interview.svg"
              alt="Image 1"
              className="image"
              id="image1"
            />
            <h2 id="heading">Interview</h2>
            <img src="qus.png" alt="Image 2" className="image" id="image2" />
          </div>
          <ul id="unordered-list">
            <li>
              {" "}
              You do not an interview. We will send you a message if this
              changes.
            </li>
          </ul>
        </div>
        <div className="section" id="section-content">
          <div className="row">
            <img src="touch.svg" alt="Image 1" className="image" id="image1" />
            <h2 id="heading">Biometric</h2>
            <img src="qus.png" alt="Image 2" className="image" id="image2" />
          </div>
          <ul id="unordered-list">
            <li> Your Biometric has been done on {row.enrollmentDate}</li>
          </ul>
        </div>

        <div className="section" id="section-content">
          <div className="row">
            <img
              src="bgcheck.png"
              alt="Image 1"
              className="image"
              id="image1"
            />
            <h2 id="heading">Background check</h2>
            <img src="qus.png" alt="Image 2" className="image" id="image2" />
          </div>
          <ul id="unordered-list">
            <li> {row.bgcheck} Your Background check was completed</li>
          </ul>
        </div>

        <div className="section" id="section-content">
          <div className="row">
            <img
              src="balance.png"
              alt="Image 1"
              className="image"
              id="image1"
            />
            <h2 id="heading">Final decision</h2>
            <img src="qus.png" alt="Image 2" className="image" id="image2" />
          </div>
          <ul id="unordered-list">
            <li>
              {" "}
              {row.finaldecision} Your application was approved. You need to
              send us valid passport to finalize your approval
            </li>
          </ul>
        </div>

        <hr></hr>
        <h1>Messages about your application </h1>
        <p>(1 new message)</p>

        <div className="oneline">
          <p>Showing 0 to 0 of 0 entries</p>
          <p>|</p>
          <div className="rows-dropdown">
            <label htmlFor="rows">
              <b>Show</b>{" "}
            </label>
            <select
              id="rows"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(e.target.value)}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>
              <b> entries</b>
            </span>
          </div>
        </div>

        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th className="table-header">Subject</th>
                <th className="table-header">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row">
                <td className="table-cell">
                  <a
                    href={`./${row.applicationNumber}.pdf`}
                    className="table-link"
                  >
                    Original Passport Request
                  </a>
                </td>
                <td className="table-cell">{row.finalDecision}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">
                  <a href="#" className="table-link">
                    Correspondence Letter
                  </a>
                </td>
                <td className="table-cell">{row.finalDecision}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">
                  <a href="#" className="table-link">
                    Submission Confirmation
                  </a>
                </td>
                <td className="table-cell">{row.submissionConfirm}</td>
              </tr>
              <tr className="table-row">
                <td className="table-cell">
                  <a href="#" className="table-link">
                    Confirmation of Online Application
                  </a>
                </td>
                <td className="table-cell">{row.dateSubmitted}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default FullApplicationStatus;
