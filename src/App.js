import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./header";
import Body from "./Body";
import Footer from "./Footer";
import Account from "./Account.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <hr className="headerBase"></hr>
        <br></br>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
