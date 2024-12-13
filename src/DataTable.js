import React, { useState } from 'react';
import './DataTable.css';
import { useNavigate } from 'react-router-dom';

const DataTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const [tableData] = useState([
    {
      applicationType: "Online Application",
      applicationNumber: "PR123456",
      uci:6757657,
      applicationName: "Amardeep Singh",
      dateSubmitted: "2024-12-01",
      currentStatus: "Approved",
      messages: 2,
      action: "View",
      biometricNumber: "BN12345",
    enrollmentDate: "2024-11-20",
    expiryDate: "2025-11-20",
    },
    {
      applicationType: "Online Application",
      applicationNumber: "WP654321",
      uci:98798787,
      applicationName: "Hardeep Singh Chahal",
      dateSubmitted: "2024-11-15",
      currentStatus: "Approved",
      messages: 1,
      action: "View",
    },
    {
      applicationType: "Online Application",
      applicationNumber: "SP789012",
      uci:12345678,
      applicationName: "Gopal Singh",
      dateSubmitted: "2024-12-05",
      currentStatus: "Pending",
      messages: 0,
      action: "View",
    },
    {
        applicationType: "Online Application",
        applicationNumber: "SP789012",
        uci:7987987,
        applicationName: "Harpreet Singh",
        dateSubmitted: "2024-12-09",
        currentStatus: "Approved",
        messages: 0,
        action: "View",
      },
  ]);

  const handleViewDetails = (row) => {
    navigate('/full-application-status', { state: { row } });
  };


  return (
    <div className="datatable-container">
      <div className="datatable-header">
        <div className="search-box">
          <label htmlFor="search"><b>Search:</b> </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            
          />
          
        </div>
        <p>
        Showing 0 to 0 of 0 entries
      </p>
      <p>|</p>
        <div className="rows-dropdown">
          <label htmlFor="rows"><b>Show</b> </label>
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
          <span><b> entries</b></span>
        </div>
      </div>
      
      <table className="datatable">
        <thead>
          <tr>
            <th>Application Type  ↑↓</th>
            
            <th>Application Number  ↑↓</th>
            <th>Application Name  ↑↓</th>
            <th>Date Submitted  ↑↓</th>
            <th>Current Status  ↑↓</th>
            <th>Messages  ↑↓</th>
            <th>Action  ↑↓</th>
          </tr>
        </thead>
        <tbody>
        {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.applicationType}</td>
              <td>{row.applicationNumber}</td>
              <td>{row.applicationName}</td>
              <td>{row.dateSubmitted}</td>
              <td>{row.currentStatus}</td>
              <td>
                <button onClick={() => handleViewDetails(row)}>Read</button>
              </td>
              <td>
                <a href="#" onClick={(e) => { e.preventDefault(); handleViewDetails(row); }}>
                  Check full application status
                </a>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;