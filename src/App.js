import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./header";
import Body from "./Body";
import Footer from "./Footer";
import Account from "./Account.js";
import FullApplicationStatus from './FullApplicationStatus'; // Import the new component


function App() {
  return (
    <div className="App">
         <Router>
        <Header />
        <hr className="headerBase" />
        <br />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/account" element={<Account />} />
          <Route path="/full-application-status" element={<FullApplicationStatus />} /> {/* New Route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
