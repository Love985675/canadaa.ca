import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn.js";
import Header from "./header";
import Body from "./Body";
import Footer from "./Footer";
import Account from "./Account.js";
import FullApplicationStatus from "./FullApplicationStatus"; // Import the new component
import Welcome from "./Welcome.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <hr className="headerBase" />
        <br />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Body />} />
          <Route path="/body" element={<Body />} />
          <Route path="/full-application-status" element={<FullApplicationStatus />} /> {}
          <Route
            path="/full-application-status"
            element={<FullApplicationStatus />}
            
          />
        </Routes>

        {/* <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/account" element={<Account />} />
          <Route path="/full-application-status" element={<FullApplicationStatus />} /> {}
        </Routes> */}

        <Footer />
      </Router>
    </div>
  );
}

export default App;
