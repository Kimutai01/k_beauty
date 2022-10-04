import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import VendorLogin from "./components/Vendors/VendorLogin";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/vendors" element={<VendorLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
