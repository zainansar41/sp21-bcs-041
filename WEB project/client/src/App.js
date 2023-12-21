import "./App.css";
import Signin from "./pages/AuthPages/Signin";
import Signup from "./pages/AuthPages/Signup";
import Home from "./pages/Home/Home";

import LivePreview from "./pages/Generate/LivePreview";
import GeneratePage from "./pages/Generate/GeneratePage";
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [path, setPath] = useState(false);

  useEffect(() => {
    if (
      window.location.pathname === "/signin" ||
      window.location.pathname === "/signup" ||
      window.location.pathname === "/preview"
    ) {
      setPath(true);
    } else {
      setPath(false);
    }
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/preview" element={<LivePreview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
