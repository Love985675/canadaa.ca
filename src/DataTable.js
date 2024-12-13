import React, { useState } from 'react';
import './DataTable.css';

const DataTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

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
          {/* Data rows will be added dynamically later */}
          <tr>
            <td colSpan="7" style={{ textAlign: 'center' }}>
              No data available
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;